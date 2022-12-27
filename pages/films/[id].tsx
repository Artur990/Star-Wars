import type { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MoviesServices } from "../../services/MovieServices";
import { getUrlID, useMovie } from "../../actions/actions";

import Charakter from "../../components/charakter/Charakter";
import { QueryClient } from "@tanstack/react-query";
import { dehydrate } from "@tanstack/query-core";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const queryClient = new QueryClient();
  const { id } = ctx.query as { id: string };
  await queryClient.prefetchQuery(["Movies"], () => MoviesServices.getMove(id));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const Movie: NextPage = () => {
  const router = useRouter();
  const id = router.query.id as string;
  const movie = useMovie(id);

  return (
    <div>
      <h3>Film: {movie?.data?.title}</h3>
      <p>{movie?.data?.opening_crawl}</p>
      <ul>
        <h2>character list:</h2>
        {movie?.data?.characters.map((e, index) => {
          const characterUrlParts = e.split("/").filter(Boolean);
          const characterId = characterUrlParts[characterUrlParts.length - 1];
          console.log(characterId + "sd");
          return (
            <li key={characterId}>
              <Link href={`/characters/${characterId}`}>
                <Charakter key={characterId} idd={characterId} />
              </Link>
            </li>
          );
        })}
      </ul>
      <ul>
        <h2>review</h2>
        {/* {data?.map((e) => (
          <li>{e}</li>
        ))} */}
      </ul>
      <h2>Create </h2>
      {/* <form onSubmit={handler}>
        <input {...register("exampleRequired", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form> */}
    </div>
  );

  return null;
};

export default Movie;
