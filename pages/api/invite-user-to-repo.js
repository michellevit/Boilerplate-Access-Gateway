import { Octokit } from '@octokit/core';

function inviteUserToRepository({ owner, repo, githubUsername }) {
  const octokit = new Octokit({
    auth: process.env.GITHUB_API_TOKEN,
  });

  const endpointUrl = `PUT /repos/${owner}/${repo}/collaborators/${githubUsername}`;
  
  console.log('Endpoint URL:', endpointUrl);

  return octokit.request(endpointUrl, {
    owner: owner,
    repo: repo,
    username: githubUsername,
    permission: 'pull', // Set permission to 'pull' for read-only access
  });
}

export default inviteUserToRepository;