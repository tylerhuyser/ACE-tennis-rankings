import SitemapPackage from 'react-router-sitemap'
const Sitemap = SitemapPackage.default
import { routes } from './src/routes.js'

// Initialize the sitemap generator
new Sitemap(routes)
  .build('https://rankings.gamesetblog.com') // Replace with your deployed site's URL
  .save('./public/sitemap.xml'); // Saves the generated sitemap in the public folder
