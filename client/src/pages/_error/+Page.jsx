export { Page }

import App from "../../App"

import { usePageContext } from "../../renderer/usePageContext"

function Page({ pageContext }) {
  console.log('Error - +Page.jsx')
  // const pageContext = usePageContext()
  let { abortReason } = pageContext

  if (!abortReason) {
    abortReason = pageContext.is404 ? 'Page not found.' : 'Something went wrong.'
  }

  return (
    <App pageContext={pageContext} error={abortReason} />
  )
}