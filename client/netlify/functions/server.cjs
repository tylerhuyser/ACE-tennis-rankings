const express = require('express');
const serverless = require('serverless-http');
const compression = require('compression');
const cors = require('cors');
const sirv = require('sirv');
const { renderPage } = require('vike/server');
const path = require('path');
const app = express();

app.use(cors());
app.use(compression());

// const root = path.resolve(__dirname, '..');

// console.log(`Root Path: ${root}}`)
// const distPath = path.join(root, 'dist', 'client');
// console.log('Dist path:', distPath);  // Verify this path points to the correct directory
// console.log('Resolved __dirname:', __dirname); // Log the base directory
// console.log('Current working directory:', process.cwd()); // Log the current working directory

const { dirname } = require('path') 
const { fileURLToPath } = require('url')
const __dirname = dirname(fileURLToPath(import.meta.url))
const root = `${__dirname}/..`

const isProduction = process.env.NODE_ENV === 'production';
if (isProduction) {
  app.use(sirv(`${root}/dist/client`));
} else {
  console.log('Development Environment');
  // Add any necessary development middleware
}
app.get('*', async (req, res) => {
  const pageContextInit = {
    urlOriginal: req.originalUrl,
    headersOriginal: req.headers,
  };
  const pageContext = await renderPage(pageContextInit);
  const { httpResponse } = pageContext;
  if (!httpResponse) {
    res.status(404).send('Page not found');
    return;
  }
  res.status(httpResponse.statusCode).send(httpResponse.body);
});
module.exports.handler = serverless(app);