import { ICharacter, IGetCharaktersResults } from '../types/types'
import { apiClient } from '../configs/axios'

const getCharacters = async () => {
  const res = await apiClient.get<IGetCharaktersResults>('people')
  return res.data
}

const getCharacter = async (id: string) => {
  const res = await apiClient.get<ICharacter>(`people/${id}/`)
  return res.data
}

export const CharactersServices = {
  getCharacters,
  getCharacter,
}
