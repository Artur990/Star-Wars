// import React from "react";

// const index = () => {
//   return (
//     <div>
//       <h1 className="text-5xl">Films:</h1>
//       <ul>
//         <li>
//           <a>A new Hope (1997)</a>
//         </li>
//         <li>
//           <a>The Empire Strike (1997)</a>
//         </li>
//         <li>
//           <a>A new Hope (1997)</a>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default index;

import type { NextPage } from "next";
import Link from "next/link";
// import styles from "../../styles/Layout.module.css";
import {
  useMovies,
  getUrlID,
  useCharacters,
  useCharacter,
} from "../../actions/actions";
import { MoviesServices } from "../../services/MovieServices";
import { QueryClient } from "@tanstack/react-query";
import { dehydrate } from "@tanstack/query-core";
import Head from "next/head";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["Movies"], MoviesServices.getMoves);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const Movies = () => {
  const movies = useMovies();
  console.log(movies);
  if (movies.isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Head>
        <title>Films</title>
        <meta name="description" content="All charakters" />
      </Head>
      <h2>
        <Link className="text-xs text-blue-500 underline" href="/">
          Powrót
        </Link>
      </h2>
      <h1 className="text-2xl font-bold">Films:</h1>
      <ul>
        {movies.data?.results &&
          movies?.data?.results?.map((movie) => {
            return (
              <li key={movie.episode_id}>
                <Link href={`/films/${getUrlID(movie.url)}`}>
                  -{movie.title}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Movies;
