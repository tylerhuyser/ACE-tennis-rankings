export { onRenderClient }

import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'
import { PageContextProvider } from './usePageContext';

let root

// removed "async" from below
function onRenderClient(pageContext) {

  const { Page, urlPathname } = pageContext

  if (!Page) throw new Error('My onRenderClient() hook expects pageContext.Page to be defined')
  if (!urlPathname) throw new Error('My onRenderHtml() hook expects pageContext.ulrPathname to be defined')

  const helmetContext = {}

  const container = document.getElementById('react-root')
  if (!container) throw new Error('DOM element #react-root not found')

  
  const page = (
    <HelmetProvider context={helmetContext}>
      <HashRouter location={urlPathname} future={{v7_relativeSplatPath: true, v7_startTransition: true}} >
      <PageContextProvider pageContext={pageContext}>
          <Page pageContext={pageContext} />
        </PageContextProvider>
      </HashRouter>
    </HelmetProvider>
  )

  const { helmet } = helmetContext

  if (pageContext.isHydration) {
    root = ReactDOM.hydrateRoot(container, page)
  } else {
    if (!root) {
      root = ReactDOM.createRoot(container)
    }
    root.render(page)
  }
}