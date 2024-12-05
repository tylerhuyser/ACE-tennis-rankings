export { Page }

import App from "../../App"

function Page({ pageContext }) {

  console.log('Error - +Page.jsx')
  let { abortReason } = pageContext

  if (!abortReason) {
    abortReason = pageContext.is404 ? 'Page not found.' : 'Something went wrong.'
  }

  return (
    <App pageContext={pageContext} error={abortReason} />
  )
}