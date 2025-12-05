export { Page }

import App from "../../App"

function Page({ pageContext }) {

  console.log('Error - +Page.jsx')
  let { abortReason } = pageContext

  if (!abortReason) {
    abortReason = pageContext.is404 ? 'Page not found.' : 'Something went wrong.'
  }

  const errorPageContext = {
    ...pageContext,
    data: pageContext.data || { rankings: [], lastUpdated: new Date().toISOString() }
  }

  return (
    <App pageContext={errorPageContext} error={abortReason} />
  )
}