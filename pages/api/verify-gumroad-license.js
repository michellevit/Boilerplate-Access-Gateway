import fetch from 'node-fetch';

const BASE_API = `https://api.gumroad.com`;
const VERIFY_ENDPOINT = `v2/licenses/verify`;

async function verifyGumroadLicense(license_key, product_id) {

  const url = `${BASE_API}/${VERIFY_ENDPOINT}`;
  
  const headers = { 'Content-Type': 'application/json' };
  
  const body = JSON.stringify({
    product_id: product_id,
    license_key: license_key,
    increment_uses_count: "false",
  });

 // NEW CODE

  try {
    const response = await fetch(url, {
      method: `POST`,
      headers,
      body,
    });

    if (!response.ok) {
      // New code to log detailed error information
      const contentType = response.headers.get("content-type");
      let errorDetail = '';
      if (contentType && contentType.includes("application/json")) {
        const errorData = await response.json();
        errorDetail = JSON.stringify(errorData);
        // Check if the error message is present and throw a specific error
        if (errorData.success === false && errorData.message) {
          throw new Error(`API call failed with status ${response.status}: ${errorData.message}`);
        }
      } else {
        errorDetail = await response.text(); // Fallback to raw text if not JSON
      }
      throw new Error(`API call failed with status ${response.status}: ${errorDetail}`);
    }

    // Proceed to parse JSON assuming the response is successful and content type is JSON
    if (response.headers.get("content-type")?.includes("application/json")) {
      return await response.json();
    } else {
      throw new Error("Received non-JSON response");
    }
  } catch (error) {
    console.error(`Fetch error: ${error.message}`);
    if (error.response) {
      console.error(`Response status: ${error.response.status}`);
      try {
        const errorData = await error.response.json();
        console.error(`Error details: ${JSON.stringify(errorData)}`);
      } catch (jsonError) {
        console.error("Failed to parse error response as JSON.");
      }
    }
    throw error; 
  }
}

export default verifyGumroadLicense;
