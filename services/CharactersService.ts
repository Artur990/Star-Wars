import { apiClient } from "../libs/axios";
import { Character, GetCharaktersResults } from "../styles/types";

const getCharacters = async () => {
  const res = await apiClient.get<GetCharaktersResults>("people");
  return res.data;
};
type Chara = {
  name: string;
  birth_year: string;
  eye_color: string;
};

const getChatacter = async (id: string) => {
  const res = await apiClient.get<Character>(`people/${id}/`);
  return res.data;
};

export const CharaktersServices = {
  getCharacters,
  getChatacter,
};