import { Octokit } from '@octokit/core';

export function inviteMemberToRepository(params) {
  const octokit = new Octokit({
    auth: process.env.GITHUB_API_TOKEN,
  });

  return octokit.request('PUT /repos/{owner}/{repo}/collaborators/{username}', {
    owner: params.owner,
    repo: params.repo,
    username: params.username,
    permission: 'pull',
  });
}
