import axios from 'axios'

export const baseApi = axios.create({
  baseURL: 'http://192.168.1.8:4501/',
})