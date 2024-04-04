
async function activateLicense({ githubUsername, licenseKey, product_name, product_id }) {
    const owner = process.env.GITHUB_USERNAME;
    const repo = process.env.GITHUB_REPOSITORY_NAME;
    const product = process.env.GUMROAD_PRODUCT;
  
    if (!owner || !repo || !product) {
      return Promise.reject(`Environment variables not provided`);
    }
  
    console.log(
      {
        licenseKey,
        githubUsername,
        product_name,
        product_id
      },
      `License Key submitted for activation. Verifying License...`
    );
  
    const license = await verifyGumroadLicense({
      product,
      licenseKey,
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
        licenseKey,
        githubUsername,
      },
      `License Key valid. Inviting user to repository...`
    );
  
    // Assuming inviteMemberToRepository is a function you've previously defined
    // and available in this scope.
    
    const invite = await inviteMemberToRepository({
      owner,
      repo,
      username: githubUsername,
    });
  
    if (invite.data) {
      console.log(
        {
          licenseKey,
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