import axios from 'axios'
// import { apiBaseUrl } from '../config'

const instance = axios.create({
  // headers: {
  //   'Content-Type': 'application/x-www-form-urlencoded',
  // },
  // baseURL: apiBaseUrl
})

// instance.defaults.timeout = 5000

instance.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

instance.interceptors.response.use(response => {
  console.log(response.config.url, response.config.params, response.data)

  return response.data
}, error => {
  console.log(error)
  return Promise.reject(error)
})

export default instance
