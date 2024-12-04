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

app.get('*', async (req, res) => {

  console.log(`Req.originalURL BEGIN`)
  console.log(req.originalUrl)
  console.log(`Req.originalURL END`)

  const pageContextInit = {
    urlOriginal: req.originalUrl,
    headersOriginal: req.headers,
  };
  const pageContext = await renderPage(pageContextInit);

  console.log(`Page Context BEGIN`)
  console.log(pageContext)
  console.log(`Page Context END`)
  
  const { httpResponse } = pageContext;
  if (!httpResponse) {
    res.status(404).send('Page not found');
    return;
  }
  res.status(httpResponse.statusCode).send(httpResponse.body);
});
module.exports.handler = serverless(app);