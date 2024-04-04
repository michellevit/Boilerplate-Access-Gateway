
// Simple in-memory rate limiting
// const rateLimit = ((timeWindow, limit) => {
//   const ipRecords = new Map();

//   return (req) => {
//     const now = Date.now();
//     const userIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

//     if (!ipRecords.has(userIp)) {
//       ipRecords.set(userIp, { count: 1, lastRequest: now });
//       return true;
//     }

//     const record = ipRecords.get(userIp);

//     if (now - record.lastRequest < timeWindow) {
//       if (record.count >= limit) {
//         return false;
//       }
//       record.count++;
//     } else {
//       record.count = 1;
//       record.lastRequest = now;
//     }

//     return true;
//   };
// })(60000, 5); // For example, limit to 5 requests per minute per IP

import activateLicense from './activate-license';
import bodyParser from 'body-parser';


const urlencodedParser = bodyParser.urlencoded({ extended: false });

async function gumroadPingHandler(req, res) {
  await new Promise((resolve) => urlencodedParser(req, res, resolve));

  if (req.method !== `POST`) {
    return res.status(501).end();
  }

  const { license_key, product_name, product_id, custom_fields } = req.body;
  let github_username;

  if (custom_fields) {
    const fields = JSON.parse(custom_fields);
    github_username = fields['Github Username']; 
  }

  console.log({ licenseKey: license_key, githubUsername: github_username, productName: product_name, productid: product_id, field: fields });

  if (!githubUsername || !license_key) {
    console.log(`Details not provided. Exiting successfully`);
    return res.status(200).end();
  }

  await activateLicense({
    licenseKey,
    githubUsername,
    productName
  });

  res.status(200).end();
}


export default gumroadPingHandler;