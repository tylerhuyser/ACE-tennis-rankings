export { onRenderHtml }

import React from 'react'
import { renderToString } from 'react-dom/server'
import { escapeInject, dangerouslySkipEscape } from 'vike/server'
import { StaticRouter } from 'react-router-dom/server';
import pkg from 'react-helmet-async';
const { HelmetProvider } = pkg;


async function onRenderHtml({ pageContext }) {
  
  const { Page, pageProps, urlPathname } = pageContext

  const helmetContext = {}

  const pageHtml = dangerouslySkipEscape(
    renderToString(
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={urlPathname}>
          {/* <Page {...pageProps} data={pageContext.data} /> */}
          <Page pageContext={pageContext} />
        </StaticRouter>
      </HelmetProvider>
    ),
  )

  const { helmet } = helmetContext

  return escapeInject`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      ${dangerouslySkipEscape(helmet.title.toString())}
      ${dangerouslySkipEscape(helmet.meta.toString())}
    </head>
    <body>
      <div id="root">${pageHtml}</div>
    </body>
  </html>
`}