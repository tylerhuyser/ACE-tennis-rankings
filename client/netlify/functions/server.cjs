const express = require('express');
const serverless = require('serverless-http');
const compression = require('compression');
const cors = require('cors');
const { renderPage } = require('vike/server');
const app = express();

app.use(cors());
app.use(compression());

app.get('*', async (req, res) => {

  const pageContextInit = {
    urlOriginal: req.originalUrl,
    headersOriginal: req.headers,
  };

  const pageContext = await renderPage(pageContextInit);
  
  if (!pageContext) {
    console.log(`No Page Context - 404 Delivered`)
    res.status(404).send('Page not found');
    return;
  }

  const { httpResponse } = pageContext;

  console.log(`httpResponse BEGIN`)
  console.log(httpResponse)
  console.log(`httpResponse END`)


  const isJsonRequest = req.originalUrl.endsWith('.json');
  if (isJsonRequest) {
    res.setHeader('Content-Type', 'application/json');
  } else {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
  }

  if (!httpResponse) {
    console.log(`No HTTPResponse - 404 Delivered`)
    res.status(404).send('Page not found');
    return;
  }

  // Set headers from httpResponse
  httpResponse.headers?.forEach(([key, value]) => {
    res.setHeader(key, value);
  });

  res.status(httpResponse.statusCode).send(httpResponse.body);
});

module.exports.handler = serverless(app);