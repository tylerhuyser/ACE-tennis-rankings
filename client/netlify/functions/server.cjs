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

const root = path.resolve(__dirname, '../../');

console.log('Production Environment')
app.use(sirv(`${root}/dist/client`));

app.get('*', async (req, res) => {
  const pageContextInit = {
    urlOriginal: req.originalUrl,
    headersOriginal: req.headers,
  };

const pageContext = await renderPage(pageContextInit);

if (pageContext.errorWhileRendering) {
  // Install error tracking here, see https://vike.dev/error-tracking
  // Vike Automatically calls 'console.log(error), when an error occurs, so this code is not needed.
}

const { httpResponse } = pageContext;

if (res.writeEarlyHints) res.writeEarlyHints({ link: httpResponse.earlyHints.map((e) => e.earlyHintLink) })
  httpResponse.headers.forEach(([name, value]) => res.setHeader(name, value))
  res.status(httpResponse.statusCode)
  // For HTTP streams use pageContext.httpResponse.pipe() instead, see https://vike.dev/streaming
  res.send(httpResponse.body)
});

module.exports.handler = serverless(app);