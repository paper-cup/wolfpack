const { Octokit } = require('@octokit/core')
const authToken = 'Nr0qP0T9YOxTM9BQv+duKHe0wKcY59yd7lOQ6j87USs='

const wolf = new Octokit({ auth: 'ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAINhh4JtSrEHxZ2ZGCvmDCjgbja0YsD0lADVlKaI8Cjl3 paper_cup@qip.ru'})
await wolf.request('PATCH /app/hook/config', {
    content_type: 'json',
    insecure_ssl: '0',
    secret: authToken,
    url: 'https://github.com/paper-cup/wolfpack/settings/hooks/409852497',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
