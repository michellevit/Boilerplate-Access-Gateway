## Setup:
- Create Nextjs project (clone boilerplate-nextjs-heroku)
  - `npx create-next-app@latest boilerplate-nextjs-heroku --use-npm --example "https://github.com/vercel/next-learn/tree/main/basics/learn-starter"`
- Connect local project to new GitHub repo
  - Create a new repository oin GitHub
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
    

## To Do
- Gumroad: Update ping endpoint to DNS corrrect one
- gumroad-ping.js: remove the console log logging the ping data
- activate-license.js: add product_id mapping for rails boilerplate
- verify-gumroad-license.js: change increment_uses_count to true
- Add link to video tutorial to product content (user's post-purchase page) and details page
- index.js: improve
- gumroad-ping.js: add rate limiting



Gumroad Data:
productName: 'Django-React-PostgreSQL Boilerplate Code [Deploy on Heroku with Ease]'
productid: 'TycqIdYZ_hocg_O_7LFh9Q=='


Folder Dir: 

Boilerplate-Nextjs-Heroku
| - pages
| | - index.js
| | - api
| | | - activate-license.js
| | | - gumroad-ping.js
| | | - invite-user-to-repo.js
| | | - verify-gumroad-license.js
| - public
| | - favicon.ico
| | - vercels.svg
| - styles
| | - global.css
| | - Home.module.css
| - .gitignore
| - .nvmrc
| - package-lock.json
| - package.json
| - README.md