import axios from 'axios'

export const apiClient = axios.create({
  baseURL: 'https://swapi.dev/api',
})

export const apiComments = axios.create({
  baseURL: 'http://127.0.0.1:8888/scoops',
})
// http://localhost:8888/films/1
