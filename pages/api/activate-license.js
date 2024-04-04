import verifyGumroadLicense from './verify-gumroad-license';
import inviteUserToRepository from './invite-user-to-repo';



async function activateLicense({ license_key, githubUsername, product_id }) {
  
  const productToRepoMap = {
    "TycqIdYZ_hocg_O_7LFh9Q==": "Boilerplate-Django-React-Heroku",
    XXX: "Boilerplate-Rails-React-Heroku",
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

  const license = await verifyGumroadLicense({
    license_key,
    product_id,
  });

  // Assuming verifyGumroadLicense is a function you've previously defined
  // and available in this scope.

  // The method below will increment "uses" by 2.
  // So we check if the license has already been redeemed
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

  // Assuming inviteMemberToRepository is a function you've previously defined
  // and available in this scope.

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

  // send as much data as you need here
  return {
    repository: invite.data.repository,
  };
}

export default activateLicense;
