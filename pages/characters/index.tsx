import Link from 'next/link'
import React from 'react'
import Head from 'next/head'
import { QueryClient, dehydrate } from '@tanstack/react-query'

import { getUrlID, useCharacters } from '../../actions/actions'
import { CharaktersServices } from '../../services/CharactersService'

export async function getServerSideProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(
    ['Charakters'],
    CharaktersServices.getCharacters
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

const Characters = () => {
  const { data, isLoading, isError } = useCharacters()

  if (isLoading) {
    return (
      <div className="h-screen w-screen  bg-white p-2 font-poppins text-2xl font-bold  text-black  dark:bg-black  dark:text-white">
        Loading...
      </div>
    )
  }
  if (isError) {
    return (
      <div className="h-screen w-screen  bg-white p-2 font-poppins text-2xl font-bold  text-black  dark:bg-black  dark:text-white">
        Error
      </div>
    )
  }
  return (
    <div className="h-screen w-screen  bg-white p-2 dark:bg-black">
      <Head>
        <title>Charakters</title>
        <meta name="description" content="All charakters" />
      </Head>
      <h2>
        <Link
          className="font-poppins text-xs  text-blue-500 underline "
          href="/"
        >
          Powrót
        </Link>
      </h2>
      <h1 className="font-poppins text-2xl  font-bold  text-black  dark:text-white">
        Characters:
      </h1>
      <ul>
        {data?.results &&
          data.results.map((movie, i) => {
            return (
              <li key={i}>
                <Link
                  href={`/characters/${getUrlID(movie.url)}`}
                  className="text-l h-screen  w-screen font-poppins  text-black hover:underline dark:text-white"
                >
                  -{movie.name}
                </Link>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default Characters
