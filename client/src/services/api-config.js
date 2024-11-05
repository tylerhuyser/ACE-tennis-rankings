import axios from 'axios'

const baseURL = 'https://tennis-rankings-api-e2ae70d187c2.herokuapp.com/api/'

const api = axios.create({
  url: baseURL
})

export default api