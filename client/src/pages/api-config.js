import axios from 'axios'

const url = process.env.NODE_ENV === 'production' ? 'https://tennis-api.fly.dev/api/' : 'https://cors-anywhere.herokuapp.com/https://tennis-api.fly.dev/api/'

const api = axios.create({
  baseURL: url,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
})

export default api