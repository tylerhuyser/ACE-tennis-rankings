export { data }

import API from "../api-config"

const data = async () => {

  const response = await API.get(`https://tennis-rankings-api-e2ae70d187c2.herokuapp.com/api/atp/rankings/singles`)
  console.log(`BEGIN Server Data:`)
  console.log(`Total Players: ${response.data.length}`)
  console.log(`END Server Data.`)
  const rankings = response.data
  return rankings

}
