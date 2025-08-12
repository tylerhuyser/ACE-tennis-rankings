export { data }

import API from "../api-config"

const data = async () => {

  const response = await API.get(`https://tennis-api.fly.dev/api/atp/rankings/singles`)
  // console.log(`BEGIN Server Data:`)
  // console.log(`Total Players: ${response.data.length}`)
  // console.log(`END Server Data.`)
  const rankings = response.data
  return rankings

}
