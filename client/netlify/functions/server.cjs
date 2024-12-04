const express = require('express');
const serverless = require('serverless-http');
const compression = require('compression');
const cors = require('cors');
// const sirv = require('sirv');
const { renderPage } = require('vike/server');
const path = require('path');
const app = express();
const { root } = require('../../src/server/root')

app.use(cors());
app.use(compression());

const sirv = (await require('sirv').default)
app.use(sirv(`${root}/dist/client`))

app.get('*', async (req, res) => {

  const isPageContextRequest = req.originalUrl.endsWith('.pageContext.json');

  console.log(`Req.originalURL BEGIN`)
  console.log(req.originalUrl)
  console.log(`Req.originalURL END`)

  const pageContextInit = {
    urlOriginal: isPageContextRequest
      ? req.originalUrl.replace(/\/index\.pageContext\.json$/, '')
      : req.originalUrl,
    headersOriginal: req.headers,
  };

  console.log(`PageContextInit BEGIN`)
  console.log(pageContextInit)
  console.log(`PageContextInit END`)

  const pageContext = await renderPage(pageContextInit);

  // console.log(`Page Context BEGIN`)
  // console.log(pageContext)
  // console.log(`Page Context END`)
  
  if (!pageContext) {
    res.status(404).send('Page not found');
    return;
  }


  const { httpResponse } = pageContext;

  // if (!httpResponse) {
  //   res.status(404).send('Page not found');
  //   return;
  // }

  const isJsonRequest = req.originalUrl.endsWith('.json');
  if (isJsonRequest) {
    res.setHeader('Content-Type', 'application/json');
  } else {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
  }

  if (!httpResponse) {
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