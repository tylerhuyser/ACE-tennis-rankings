export { onRenderHtml }

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { escapeInject, dangerouslySkipEscape } from 'vike/server'

import { StaticRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { PageContextProvider } from './usePageContext';

// async removed below
async function onRenderHtml(pageContext) {
  
  const { Page, urlPathname } = pageContext

  if (!Page) throw new Error('My onRenderHtml() hook expects pageContext.Page to be defined')
  if (!urlPathname) throw new Error('My onRenderHtml() hook expects pageContext.ulrPathname to be defined')

  const helmetContext = {}

  console.log('+onRenderHTML.jsx')

  const pageHtml = ReactDOMServer.renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={urlPathname} future={{v7_relativeSplatPath: true, v7_startTransition: true}}>
        <PageContextProvider pageContext={pageContext}>
          <Page pageContext={pageContext} />
        </PageContextProvider>
      </StaticRouter>
    </HelmetProvider>
  )

  const { helmet } = helmetContext

  const documentHtml = escapeInject`
    <html lang="en">
      <head>
        ${dangerouslySkipEscape(helmet.title.toString())}
        ${dangerouslySkipEscape(helmet.meta.toString())}
        ${dangerouslySkipEscape(helmet.link.toString())}
        <!-- Google tag (gtag.js) -->
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-75265ZG2W0"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-75265ZG2W0');
          </script>
      </head>
      <body>
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>
  `

  return {
    documentHtml,
    pageContext: {

    }
  }
}