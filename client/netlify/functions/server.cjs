const express = require('express');
const serverless = require('serverless-http');
const compression = require('compression');
const cors = require('cors');
const { renderPage } = require('vike/server');
const app = express();

app.use(cors());
app.use(compression());

app.get('*', async (req, res) => {

  const isPageContextRequest = req.originalUrl.endsWith('.pageContext.json');

  console.log(`Req.originalURL BEGIN`)
  console.log(req.originalUrl)
  console.log(`Req.originalURL END`)

  const pageContextInit = {
    urlOriginal: req.originalUrl,
    headersOriginal: req.headers,
  };

  // console.log(`PageContextInit BEGIN`)
  // console.log(pageContextInit)
  // console.log(`PageContextInit END`)

  const pageContext = await renderPage(pageContextInit);

  // console.log(`Page Context BEGIN`)
  // console.log(pageContext)
  // console.log(`Page Context END`)
  
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

  // // Set headers from httpResponse
  // httpResponse.headers?.forEach(([key, value]) => {
  //   res.setHeader(key, value);
  // });

  // res.status(httpResponse.statusCode).send(httpResponse.body);
  if (res.writeEarlyHints) res.writeEarlyHints({ link: httpResponse.earlyHints.map((e) => e.earlyHintLink) })
    httpResponse.headers.forEach(([name, value]) => res.setHeader(name, value))
    res.status(httpResponse.statusCode)
    // For HTTP streams use pageContext.httpResponse.pipe() instead, see https://vike.dev/streaming
    res.send(httpResponse.body)
});

module.exports.handler = serverless(app);