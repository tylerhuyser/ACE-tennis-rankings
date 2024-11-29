export { onRenderClient }

import React from 'react'
import { hydrateRoot, createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'

let root

async function onRenderClient(pageContext) {

  const { Page } = pageContext

  const helmetContext = {}

  const container = document.getElementById('root')
  const page = (
    <HelmetProvider context={helmetContext}>
      <BrowserRouter>
          <Page />
      </BrowserRouter>
    </HelmetProvider>
  )

  const { helmet } = helmetContext

  if (pageContext.isHydration) {
    root = hydrateRoot(container, page)
  } else {
    if (!root) {
      root = createRoot(container)
    }
    root.render(page)
  }
}