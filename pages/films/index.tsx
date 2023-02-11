import React from 'react'
import Link from 'next/link'
import { useMovies, getUrlID } from '../../actions/actions'
import { MoviesServices } from '../../services/MovieServices'
import { QueryClient } from '@tanstack/react-query'
import { dehydrate } from '@tanstack/query-core'
import Head from 'next/head'

export async function getServerSideProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['Movies'], MoviesServices.getMoves)
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

const Films = () => {
  const { isLoading, data, isError } = useMovies()
  if (isLoading) {
    return (
      <div className="h-screen w-screen  bg-white p-2 font-poppins text-2xl font-bold  text-black  dark:bg-black  dark:text-white">
        Loading...
      </div>
    )
  }
  if (isError) {
    return (
      <div className=" h-screen w-screen bg-white  p-2 font-poppins text-2xl font-bold text-black  dark:bg-black  dark:text-white">
        Error
      </div>
    )
  }

  return (
    <div className=" h-screen w-screen bg-white p-2  dark:bg-black">
      <Head>
        <title>Films</title>
        <meta name="description" content="All charakters" />
      </Head>
      <h2>
        <Link
          className="font-poppins text-xs text-blue-500  underline"
          href="/"
        >
          Powrót
        </Link>
      </h2>
      <h1 className="font-poppins text-2xl  font-bold  text-black  dark:text-white">
        Films:
      </h1>
      <ul>
        {data?.results &&
          data?.results?.map((movie) => {
            return (
              <li key={movie.episode_id}>
                <Link
                  href={`/films/${getUrlID(movie.url)}`}
                  className="text-l font-poppins text-black  hover:underline dark:text-white"
                >
                  -{movie.title}
                </Link>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default Films
