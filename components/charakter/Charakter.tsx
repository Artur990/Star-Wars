import Link from "next/link";
import React from "react";
import { useCharacter, useMovie } from "../../actions/actions";

const Charakter = ({ idd }: any) => {
  const character = useCharacter(idd);
  return <div>{character?.data?.name}</div>;
};

export default Charakter;
