import axios from 'axios'

const url = process.env.NODE_ENV === 'production' ? 'https://tennis-rankings-api-e2ae70d187c2.herokuapp.com/api/' : 'https://cors-anywhere.herokuapp.com/https://tennis-rankings-api-e2ae70d187c2.herokuapp.com/api'

const api = axios.create({
  baseURL: url,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
})

export default api