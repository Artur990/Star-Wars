import axios from 'axios'

export const apiClient = axios.create({
  baseURL: 'https://swapi.dev/api',
})

export const apiComments = axios.create({
  baseURL: '/api/Hendler',
})
