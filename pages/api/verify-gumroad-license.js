import fetch from 'node-fetch';

const fetch = require('node-fetch');

const BASE_API = `https://api.gumroad.com`;
const VERIFY_ENDPOINT = `v2/licenses/verify`;

function verifyGumroadLicense(license_key, product_id) {

  const url = `${BASE_API}/${VERIFY_ENDPOINT}`;
  
  const headers = { 'Content-Type': 'application/json' };
  
  const body = JSON.stringify({
    product_id: product_id,
    license_key: license_key,
    increment_uses_count: false,
  });
  
  return fetch(url, {
    method: `POST`,
    headers,
    body,
  }).then(response => response.json());
}

export default verifyGumroadLicense;



// This function returns json data - example: 

// {
//   "success": true,
//   "uses": 3,
//   "purchase": {
//     "product_id": "32-nPAicqbLj8B_WswVlMw==",
//     "product_name": "Product Name Here",
//     "license_key": "FC15A693-7B304DF6-BD6EEDCA-96EDFAAF",
//     // Other purchase details...
//   }
// }