# Boilerplate Code for Nextjs-Heroku App

![Node Version](https://img.shields.io/badge/Node-≥18-brightgreen.svg)
![Next.js Version](https://img.shields.io/badge/Next.js-latest-blue.svg)
![React Version](https://img.shields.io/badge/React-18.2.0-blue.svg)
![Heroku](https://img.shields.io/badge/Platform-Heroku-purple.svg)

Boilerplate code for setting up a Nextjs application on Heroku.


## Table of Contents
- [How To Set Up Project](#how-to-set-up) 
- [Useful Heroku Commands](#heroku-commands)


## How To Set Up Project<a name="how-to-set-up"></a>
- Set up the project locally:
  - Clone the boilerplate repository
    - On your local machine, navigate to the folder which you want to create your new project inside of (e.g. Coding_Projects)
    - git clone https://github.com/michellevit/Boilerplate-Nextjs-Heroku new-project-name
    - Note: replace 'new-project-name' with the actual project name
  - Install dependencies
    - Navigate into the new project: 
    - cd new-project-name
    - Run `npm install`
- Connect the local project to GitHub
  - Create a new repository on GitHub
  - Open a new terminal + navigate to the new project's root dir
  - Run: 
    - `git init`
    - `git add .`
    - `git commit -m "Initial commit"`
    - `git branch -M main`
    - `git remote add origin [HTTPS url from GitHub repo]`
    - `git push -u origin main`
- Create an account with Heroku
  - Create a new app for your project
  - Set up the app
    - Deploy Tab:
      - In the Deployment method section, select GitHub (connect to GitHub)
      - Connect to your GitHub and search for the repo you created + connect it
      -	Click the button ‘Enable Automatic Deploys’
    - Settings Tab: 
      - In the Buildpack section: 
        - Add buildpack: nodejs
    - Configure SSL:
      - Select ‘Automatic Certificate Management’ and click next
    - Optional: set a custom domain:
      - Click add domain, enter the domain name, click next
      - If the domain is a Root domain: ALIAS
      - If the domain is a non-root domain: CNAME


## Useful Heroku Commands <a name="heroku-commands"></a>
- Login: `heroku login`
- View Error Logs: `heroku logs -a [your app name]`
- Restart App: `heroku restart -a [your app name]`