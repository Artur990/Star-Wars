import React from "react";
import { useCharacter, useMovie } from "../../actions/actions";
const Film = ({ idd }: any) => {
  const movie = useMovie(idd);
  return <div>{movie?.data?.title}</div>;
};

export default Film;
