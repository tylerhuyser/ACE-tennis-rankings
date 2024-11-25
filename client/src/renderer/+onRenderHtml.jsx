export { onRenderHtml }

import React from 'react'
import { renderToString } from 'react-dom/server'
import { escapeInject, dangerouslySkipEscape } from 'vike/server'
import { StaticRouter } from 'react-router-dom/server';
import pkg from 'react-helmet-async';
const { HelmetProvider } = pkg;


async function onRenderHtml(pageContext) {
  
  const { Page, pageProps, urlPathname } = pageContext

  const pageHtml = dangerouslySkipEscape(
    renderToString(
      <HelmetProvider>
        <StaticRouter location={urlPathname}>
          <Page {...pageProps} />
        </StaticRouter>
      </HelmetProvider>
    ),
  )

  return escapeInject`
    <!doctype html>
    <html lang="en">
      <head>
    @@ -8,6 +15,7 @@
      </head>
      <body>
        <div id="root">${pageHtml}</div>
      </body>
    </html>
  `
}