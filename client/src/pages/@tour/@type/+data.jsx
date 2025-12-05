export { data }

import API from "../../api-config"

const data = async (pageContext) => {

  let urlPathname = pageContext.urlOriginal.replace(/\/index\.pageContext\.json$/, '')
  let [, tour, type] = urlPathname.split('/')

  const url = process.env.NODE_ENV === 'production' ? `https://tennis-api.fly.dev/api/${tour}/rankings/${type}` : `http://localhost:3500/api/${tour}/rankings/${type}`

  // const url = `https://tennis-api.fly.dev/api/${tour}/rankings/${type}`

  const response = await API.get(url)
  const data = response.data
  return data

}