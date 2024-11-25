export { data }

import API from "../../api-config"

const data = async (pageContext) => {

  let urlPathname = pageContext.urlPathname
  let [, tour, type ] = urlPathname.split('/')

  const response = await API.get(`https://tennis-rankings-api-e2ae70d187c2.herokuapp.com/api/${tour}/rankings/${type}`)
  return response.data

}