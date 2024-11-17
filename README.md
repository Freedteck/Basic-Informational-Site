# Basic-Informational-Site

This project is a basic informational website powered by a Node.js server using Express.js. It serves static HTML files for different pages and handles routing to display the appropriate page based on the URL. A custom 404 page is provided for unmatched routes, ensuring a user-friendly experience.

## Features

- **Static HTML Pages**:
  - `index.html`: Homepage
  - `about.html`: About page
  - `contact-me.html`: Contact page
  - `404.html`: Custom 404 error page for undefined routes
- **Redirects**:
  - `/contact-me` redirects to `/contact` for improved user navigation.
- **Environment Variable Support**:
  - Configurable port using `.env` file.

## Requirements

- Node.js
- npm

## Installation and Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Freedteck/Basic-Informational-Site.git
   cd Basic-Informational-Site
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **(Optional) Create a .env file and specify the port**:
   ```bash
   PORT = 8080
   ```
4. **Run the server**:
   ```bash
   node app.js
   ```
5. **Access the site: Open your browser and navigate to**:

   - `http://localhost:8080 (or the port specified in the .env file) for the homepage.`

   - `http://localhost:3000/about for the about page.`
   - `http://localhost:3000/contact for the contact page.`
   - `http://localhost:3000/contact-me redirects to /contact.`
   - `Any other URL will display the custom 404 error page.`
