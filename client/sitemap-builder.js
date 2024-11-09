const Sitemap = require('react-router-sitemap').default;
const routes = require('./src/routes'); // This is where your routes are defined (we'll set this up below)

// Initialize the sitemap generator
new Sitemap(routes)
  .build('https://rankings.gamesetblog.com') // Replace with your deployed site's URL
  .save('./public/sitemap.xml'); // Saves the generated sitemap in the public folder
