import axios from 'axios'

const url = process.env.NODE_ENV === 'production' ? 'https://tennis-api.fly.dev/api/' : 'http://localhost:3500/api/'

const api = axios.create({
  baseURL: url,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
})

export default api