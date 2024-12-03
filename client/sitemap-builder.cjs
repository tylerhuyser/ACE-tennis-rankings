import { Sitemap } from 'react-router-sitemap';
import routes from './src/routes.cjs'; // Assuming your routes file can still be CommonJS

// Initialize the sitemap generator
new Sitemap(routes)
  .build('https://rankings.gamesetblog.com') // Replace with your deployed site's URL
  .save('./public/sitemap.xml'); // Saves the generated sitemap in the public folder