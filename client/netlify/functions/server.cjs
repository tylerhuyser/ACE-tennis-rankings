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