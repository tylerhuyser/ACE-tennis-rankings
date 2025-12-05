export { data }

import API from "../api-config"

const data = async () => {

  const url = process.env.NODE_ENV === 'production' ? 'https://tennis-api.fly.dev/api/atp/rankings/singles' : 'http://localhost:3500/api/atp/rankings/singles'

  // const url = 'https://tennis-api.fly.dev/api/atp/rankings/singles'

  const response = await API.get(url)
  const data = response.data
  return data

}
