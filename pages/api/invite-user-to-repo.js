import { Octokit } from '@octokit/core';

export function inviteUserToRepository( {owner, repo, username} ) {
  const octokit = new Octokit({
    auth: process.env.GITHUB_API_TOKEN,
  });

  return octokit.request('PUT /repos/{owner}/{repo}/collaborators/{username}', {
    owner: owner,
    repo: repo,
    username: username,
    permission: 'pull',
  });
}



const invite = await inviteUserToRepository({
  owner,
  repo,
  username: githubUsername,
});
