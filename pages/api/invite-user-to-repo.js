import { Octokit } from '@octokit/core';

function inviteUserToRepository({ owner, repo, username }) {
  const octokit = new Octokit({
    auth: process.env.GITHUB_API_TOKEN,
  });

  const endpointUrl = `PUT /repos/${owner}/${repo}/collaborators/${username}`;
  
  console.log('Endpoint URL:', endpointUrl);

  return octokit.request(endpointUrl, {
    owner: owner,
    repo: repo,
    username: username,
    permission: 'pull', // Set permission to 'pull' for read-only access
  });
}

export default inviteUserToRepository;