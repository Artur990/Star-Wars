import { Character, GetCharaktersResults } from '../types/types'
import { apiClient } from '../libs/axios'

const getCharacters = async () => {
  const res = await apiClient.get<GetCharaktersResults>('people')
  return res.data
}

const getChatacter = async (id: string) => {
  const res = await apiClient.get<Character>(`people/${id}/`)
  return res.data
}

export const CharaktersServices = {
  getCharacters,
  getChatacter,
}
