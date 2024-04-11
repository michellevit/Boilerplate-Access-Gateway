# Boilerplate Access Gateway

![Next.js Version](https://img.shields.io/badge/Next.js-14.1.4-blue.svg)
![Node.js Version](https://img.shields.io/badge/Node.js-18-green.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-4.5.4-blue.svg)
![Gumroad API](https://img.shields.io/badge/API-Gumroad-lightgrey.svg)
![Heroku](https://img.shields.io/badge/Platform-Heroku-lightgrey.svg)

This project facilitates access to several Boilerplate Code Template Repositories, on GitHub, for license holders via Gumroad.

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
- Connect local project to new GitHub repo
  - Create a new repository on GitHub
  - Change the local GitHub origin (from original cloned repo to new repo)
  - git add .
  - git commit -m "Initial commit"
  - git branch -M main
  - git push origin main
- Setup on Heroku
  - Nodejs buildpack
  - Custom domain: tokenizer.michellef.dev
- Create product on Gumroad
  - Add custom field:
    - Go to Checkout tab in menu -> add custom field for specified product: GitHub Username
    - https://app.gumroad.com/checkout/form
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
      - https://tokenizer.michellef.dev/api/gumroad-ping
    


## To Do<a name="todo"></a>
- Gumroad: Update ping endpoint to DNS corrrect one
- activate-license.js: add product_id mapping for rails boilerplate
- Add link to video tutorial to product content (user's post-purchase page) and details page
- gumroad-ping.js: add rate limiting


