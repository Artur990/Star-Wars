import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useCharacter, useCharacters } from "../../actions/actions";
import Film from "../../components/Film/Film";
import { CharaktersServices } from "../../services/CharactersService";
import { Character } from "../../styles/types";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query as { id: string };
  const data = await CharaktersServices.getChatacter(id);
  // 1/edit/asd => [1,edit,asd]
  return { props: { data } };
};

const Character: NextPage<{ data: Character }> = ({ data }) => {
  const router = useRouter();
  const id = router.query.id as string;
  const character = useCharacter(id);
  if (character.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>
        <Link className="text-xs" href="/">
          Powrót
        </Link>
      </h2>
      <h1 className="text-2xl font-bold">
        {character?.data?.name ?? data.name}
      </h1>

      <h1> Birth Year:{character?.data?.birth_year}</h1>
      {/* <li>Eye Color: {character.data?.eye_color}</li> */}
      <ul>
        <h2>Films list:</h2>
        {character.data?.films.map((e) => {
          const characterUrlParts = e.split("/").filter(Boolean);
          const characterId = characterUrlParts[characterUrlParts.length - 1];
          console.log(characterId + "sd");
          return (
            <li key={characterId}>
              <Link href={`/films/${characterId}`}>
                {/* <a> */}
                <Film key={characterId} idd={characterId} />
                {/* </a> */}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Character;
