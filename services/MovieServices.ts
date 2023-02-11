import { apiClient } from '../libs/axios'
import { Movie, GetMoviesResults } from '../types/types'

const getMoves = async () => {
  const res = await apiClient.get<GetMoviesResults>('films')
  return res.data
}

const getMove = async (id: string) => {
  const res = await apiClient.get<Movie>(`films/${id}/`)
  return res.data
}

export const MoviesServices = {
  getMoves,
  getMove,
}
