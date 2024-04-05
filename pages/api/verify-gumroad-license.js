import fetch from 'node-fetch';

const BASE_API = 'https://api.gumroad.com';
const VERIFY_ENDPOINT = 'v2/licenses/verify';

async function verifyGumroadLicense(license_key, product_id) {
  const url = `${BASE_API}/${VERIFY_ENDPOINT}`;

  const requestBody = new URLSearchParams();
  requestBody.append('product_id', product_id);
  requestBody.append('license_key', license_key);

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: requestBody,
    });

    if (!response.ok) {
      const contentType = response.headers.get('content-type');
      let errorDetail = '';
      if (contentType && contentType.includes('application/json')) {
        const errorData = await response.json();
        errorDetail = JSON.stringify(errorData);
        if (errorData.success === false && errorData.message) {
          throw new Error(`API call failed with status ${response.status}: ${errorData.message}`);
        }
      } else {
        errorDetail = await response.text();
      }
      throw new Error(`API call failed with status ${response.status}: ${errorDetail}`);
    }

    if (response.headers.get('content-type')?.includes('application/json')) {
      return await response.json();
    } else {
      throw new Error('Received non-JSON response');
    }
  } catch (error) {
    console.error(`Fetch error: ${error.message}`);
    if (error.response) {
      console.error(`Response status: ${error.response.status}`);
      try {
        const errorData = await error.response.json();
        console.error(`Error details: ${JSON.stringify(errorData)}`);
      } catch (jsonError) {
        console.error('Failed to parse error response as JSON.');
      }
    }
    throw error;
  }
}

export default verifyGumroadLicense;
