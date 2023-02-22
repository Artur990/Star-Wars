import { apiClient } from '../configs/axios'
import { IMovie, IGetMoviesResults } from '../types/types'

const getMoves = async () => {
  const res = await apiClient.get<IGetMoviesResults>('films')
  return res.data
}

const getMove = async (id: string) => {
  const res = await apiClient.get<IMovie>(`films/${id}/`)
  return res.data
}

export const MoviesServices = {
  getMoves,
  getMove,
}
