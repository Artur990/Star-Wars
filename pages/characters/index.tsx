import type { NextPage } from "next";
import Link from "next/link";
import React, { useEffect } from "react";
import { getUrlID, useCharacters } from "../../actions/actions";
import { CharaktersServices } from "../../services/CharactersService";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import Head from "next/head";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    ["Charakters"],
    CharaktersServices.getCharacters
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const Characters: NextPage = () => {
  const query = useCharacters();
  if (query.isLoading) {
    return <div>Loading..</div>;
  }
  return (
    <div>
      <Head>
        <title>Charakters</title>
        <meta name="description" content="All charakters" />
      </Head>
      <h2>
        <Link className="text-xs text-blue-500 underline" href="/">
          Powrót
        </Link>
      </h2>
      <h1 className="text-2xl font-bold">Characters:</h1>
      <ul>
        {query.data?.results &&
          query.data.results.map((movie, i) => {
            return (
              <li key={i}>
                <Link
                  href={`/characters/${getUrlID(movie.url)}`}
                  className="text-l hover:underline"
                >
                  -{movie.name}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Characters;
