import verifyGumroadLicense from './verify-gumroad-license';
import inviteUserToRepository from './invite-user-to-repo';



async function activateLicense({ license_key, githubUsername, product_id }) {
  
  const productToRepoMap = {
    "TycqIdYZ_hocg_O_7LFh9Q==": "Boilerplate-Django-React-Heroku",
    "VyBMGv2jrjX8xRfDg5qplQ==": "Boilerplate-Rails-React-Heroku",
  };

  const repo = productToRepoMap[product_id];

  const owner = process.env.GITHUB_USERNAME;

  if (!owner || !repo ) {
    return Promise.reject(`Data insufficient - issue with repository name, or incorrect Gumroad product id, or GitHub owner username`);
  }

  console.log(
    {
      license_key,
      githubUsername,
      product_id,
    },
    `License Key submitted for activation. Verifying License...`
  );

  const license = await verifyGumroadLicense(license_key, product_id);

  if (license.uses > 2) {
    throw new Error(`License has already been redeemed`);
  }

  console.log(
    {
      license_key,
      githubUsername,
    },
    `License Key valid. Inviting user to repository...`
  );

  const invite = await inviteUserToRepository({
    owner,
    repo,
    githubUsername,
  });

  if (invite.data) {
    console.log(
      {
        license_key,
        githubUsername,
      },
      `User successfully invited to the repository`
    );
  }

// Unsure of what this does
  return {
    repository: invite.data.repository,
  };
}

export default activateLicense;
