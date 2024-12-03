import express from 'express'
import compression from 'compression'
import cors from 'cors'
import { renderPage } from 'vike/server'
import { root } from './root.mjs'
import sirvPackage from 'sirv'
const sirv = sirvPackage.default
// import sirv from 'sirv';
import vitePackage from 'vite';
// import vite from 'vite';
const vite = vitePackage.default
const isProduction = process.env.NODE_ENV === 'production'

startServer()

async function startServer() {

  const app = express()

  app.use(cors())
  app.use(compression())

  if (isProduction) {
    console.log('Production Environment')
    app.use(sirv(`${root}/dist/client`))
  } else {

    console.log('Development Environment')

    const viteDevMiddleware = (
      await vite.createServer({
        root,
        server: { middlewareMode: true }
      })
    ).middlewares
    app.use(viteDevMiddleware)
    
  }

  app.get('*', async (req, res) => {

    const pageContextInit = {
      urlOriginal: req.originalUrl,
      headersOriginal: req.headers
    }
    const pageContext = await renderPage(pageContextInit)

    if (pageContext.errorWhileRendering) {
      // Install error tracking here, see https://vike.dev/error-tracking
      // Vike Automatically calls 'console.log(error), when an error occurs, so this code is not needed.
    }

    const { httpResponse } = pageContext

    if (res.writeEarlyHints) res.writeEarlyHints({ link: httpResponse.earlyHints.map((e) => e.earlyHintLink) })
    httpResponse.headers.forEach(([name, value]) => res.setHeader(name, value))
    res.status(httpResponse.statusCode)
    // For HTTP streams use pageContext.httpResponse.pipe() instead, see https://vike.dev/streaming
    res.send(httpResponse.body)
  })


  const port = process.env.PORT || 3000
  app.listen(port)
  console.log(`NEW Server running at http://localhost:${port}`)

}