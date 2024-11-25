import { resolveRoute } from 'vike/routing'
import { redirect } from 'vike/abort'

export function route(pageContext) {
const paths = [
    "/atp/singles" ,
    "/atp/singles-race" ,
    "/atp/doubles" ,
    "/atp/doubles-race" ,
    "/wta/singles" ,
    "/wta/singles-race" ,
    "/wta/doubles" ,
    "/wta/doubles-race" ,
]

  let urlPathname = pageContext.urlPathname

  if (paths.includes(urlPathname)) {
    console.log('Valid URL Path Matched')
    return resolveRoute('/@tour/@type', urlPathname)
  } else if (!paths.includes(urlPathname) && urlPathname !== "/") {
    console.log('Invalid URL Path - Redirect to Root')
    throw redirect('/')
  }

  return false
}