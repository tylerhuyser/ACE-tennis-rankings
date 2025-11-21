export { data }

import API from "../../api-config"

const data = async (pageContext) => {

  // console.log(`[Tour][Type] - +data.js - URL: ${pageContext.urlOriginal}`)

  let urlPathname = pageContext.urlOriginal.replace(/\/index\.pageContext\.json$/, '')
  let [, tour, type] = urlPathname.split('/')

  const url = process.env.NODE_ENV === 'production' ? `https://tennis-api.fly.dev/api/${tour}/rankings/${type}` : `http://localhost:3500/api/${tour}/rankings/${type}`

  const response = await API.get(url)
  // console.log(`[Tour][Type] - +data.js - Response Length: ${response.data.rankings.length}`)
  // console.log(`[Tour][Type] - +data.js - First Index BEGIN`)
  // console.log(response.data.rankings[0])
  // console.log(`[Tour][Type] - +data.js - First Index END`)
  const data = response.data
  return data

}