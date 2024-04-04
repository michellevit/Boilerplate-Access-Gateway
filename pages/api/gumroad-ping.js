
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


const CUSTOM_FIELD_KEY = 'custom_fields[Github Username]';

async function gumroadPingHandler(req, res) {
  if (req.method !== `POST`) {
    return res.status(501).end();
  }

  const payload = req.body;
  const licenseKey = payload.license_key;
  const fields = payload.custom_fields ?? {};
  const githubUsername = fields[CUSTOM_FIELD_KEY];

  if (!githubUsername || !licenseKey) {
    console.log({ licenseKey }, `Details not provided. Exiting successfully`);

    return res.status(200).end();
  }

  await activateLicense({
    licenseKey,
    githubUsername
  });

  res.status(200).end();
}


export default gumroadPingHandler;
