# Boilerplate Access Gateway

![Next.js Version](https://img.shields.io/badge/Next.js-14.1.4-blue.svg)
![Node.js Version](https://img.shields.io/badge/Node.js-18-green.svg)
![React Version](https://img.shields.io/badge/React-18.2.0-blue.svg)
![Gumroad API](https://img.shields.io/badge/API-Gumroad-pink.svg)
![GitHub API](https://img.shields.io/badge/API-GitHub-black.svg)
![Heroku](https://img.shields.io/badge/Platform-Heroku-lightgrey.svg)

This project provides access to several Boilerplate Code Template Repositories for license holders via Gumroad.

<a href="https://store.michellef.dev/l/jerae?layout=profile" target="_blank"><img src="https://img.shields.io/badge/Website-black?style=for-the-badge&logo=next.js"></a>

## Table of Contents
- [Setup](#setup)
- [To Do](#todo)


## Setup<a name="setup"></a>
- Create new repository from the Nextjs Template repository 
  - Click the 'Use this template' green button at the top right of the Nextjs-Heroku template repository
  - Select 'Create a new repository' 
    - Provide a name, description, and set it to public or private
    - Click 'Create repository' 
- Set up the project locally
  - After creating a repository from the template, you need to set it up on local machine for development
  - Open a terminal on computer
  - Navigate into the folder you would like project to reside in
    - e.g. `cd ~/Projects`
  - Clone the repository
    - `git clone https://github.com/USERNAME/REPOSITORY_NAME.git`
    - Note: replace USERNAME and REPOSITORY_NAME with actual GitHub username and the name of the new repository just created (NOT the boilerplate template)
  - Navigate into the project directory
    - `cd REPOSITORY_NAME`
  -Check the remote setup to verify that the repository URL has been set correctly
    - `git remote -v`
  - Now you can start making changes to the project:
    - To add changes: `git add .`
    - To commit change: `git commit -m "Your message"`
    - To push changes to GitHub: `git push origin main`
- Setup on Heroku
  - Create new Heroku app
  - Resources Tab: Connect to GitHub repo + enable automatic deploys
  - Settings Tab - Config Vars: Add GITHUB_API_TOKEN key/value
  - Settings Tab - Config Vars: Add GITHUB_USERNAME key/value
  - Settings Tab - Buildpacks: Add nodejs buildpack
  - Settings Tab - SSL Certificates: Configure Certificate -> Select 'Automate Certificate Management'
  - Settings Tab - Domains: connect to custom domain (OPTIONAL)
- Create product on Gumroad
  - Create Product
    - Product Tab
      - Add product description, thumbnail, price, etc
    - Content Tab
      - Click '...' menu item
      - Click 'License key' 
      - Save
  - Add Ping Endpoint
    - Go to Settings in menu bar on left
    - Go to Advanced Tab
    - In the 'Ping' section, add endpoint for ping script: 
      - Example: https://[custom-domain].com/api/gumroad-ping
      - Example: https://[heroku-app-url].herokuapp.com/api/gumroad-ping
  - Add custom field:
    - Go to Checkout tab in menu -> add custom field for specified product: GitHub Username
    - https://app.gumroad.com/checkout/form
