export { Page }

import App from "../../App"

import { usePageContext } from "../../renderer/usePageContext"

function Page() {
  const pageContext = usePageContext()
  let { abortReason } = pageContext

  if (!abortReason) {
    abortReason = pageContext.is404 ? 'Page not found.' : 'Something went wrong.'
  }

  return (
    <App pageContext={pageContext} error={abortReason} />
  )
}