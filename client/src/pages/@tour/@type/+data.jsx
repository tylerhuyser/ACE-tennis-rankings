export { data }

import API from "../../api-config"

const data = async (pageContext) => {

  console.log(`[Tour][Type] - +data.js - URL: ${pageContext.urlOriginal}`)

  let urlPathname = pageContext.urlOriginal
  let [, tour, type] = urlPathname.split('/')

  const response = await API.get(`https://tennis-rankings-api-e2ae70d187c2.herokuapp.com/api/${tour}/rankings/${type}`)
  // console.log(response)
  console.log(`[Tour][Type] - +data.js - Response Length: ${response.data.length}`)
  console.log(`[Tour][Type] - +data.js - First Index BEGIN`)
  console.log(response.data[0])
  console.log(`[Tour][Type] - +data.js - First Index END`)
  const rankings = response.data
  return rankings

}