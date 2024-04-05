import fetch from 'node-fetch';

const BASE_API = 'https://api.gumroad.com';
const VERIFY_ENDPOINT = 'v2/licenses/verify';

async function verifyGumroadLicense(license_key, product_id) {
  const url = `${BASE_API}/${VERIFY_ENDPOINT}`;

  const requestBody = new URLSearchParams();
  requestBody.append('product_id', product_id);
  requestBody.append('license_key', license_key);
  requestBody.append('increment_uses_count', true);

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: requestBody,
    });

    if (!response.ok) {
      const errorDetail = await response.text();
      throw new Error(`API call failed with status ${response.status}: ${errorDetail}`);
    }

    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return await response.json();
    } else {
      throw new Error('Received non-JSON response');
    }
  } catch (error) {
    console.error(`Fetch error: ${error.message}`);
    throw error;
  }
}

export default verifyGumroadLicense;
