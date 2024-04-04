## Setup:
- Create Nextjs project (clone boilerplate-nextjs-heroku)
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
- Update ping endpoint to DNS corrrect one: 

- Add license data to index.js
- Rate limiting for gumroad-ping.js
