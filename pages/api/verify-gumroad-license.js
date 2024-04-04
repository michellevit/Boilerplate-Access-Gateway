const BASE_API = `https://api.gumroad.com`;
const VERIFY_ENDPOINT = `v2/licenses/verify`;

function verifyGumroadLicense(product, licenseKey) {
  const url = [BASE_API, VERIFY_ENDPOINT].join('/');
  
  const headers = new Headers({ 'Content-Type': 'application/json' });
  
  const body = JSON.stringify({
    product_permalink: product,
    license_key: licenseKey,
  });
  
  return fetch(url, {
    method: `POST`,
    headers,
    body,
  }).then(response => response.json());
}

export default verifyGumroadLicense;