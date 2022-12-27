import type { Movie, Character } from "../styles/types";
import { MoviesServices } from "../services/MovieServices";
import { CharaktersServices } from "../services/CharactersService";
import { useQuery } from "@tanstack/react-query";

const regex = /(\d+)\/$/;
export const getUrlID = (link: string) => {
  const match = link.match(regex);
  return match && match[1];
};

export const useMovies = () => {
  const query = useQuery(["Movies"], () => MoviesServices.getMoves());
  return query;
};

export const useMovie = (id: string) => {
  const query = useQuery(["Movie", id], () => MoviesServices.getMove(id));
  return query;
};

export const useCharacters = () => {
  const query = useQuery(["Charakters"], () =>
    CharaktersServices.getCharacters()
  );
  query.data;
  return query;
};

export const useCharacter = (id: string) => {
  const query = useQuery(["Charakter", id], () =>
    CharaktersServices.getChatacter(id)
  );
  return query;
};
