import React from 'react'
import { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { QueryClient, dehydrate } from '@tanstack/react-query'

import { useCharacter } from '../../hook/hooks'
import Film from '../../components/Film/Film'
import { CharactersServices } from '../../services/CharactersService'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const queryClient = new QueryClient()
  const { id } = ctx.query as { id: string }
  await queryClient.prefetchQuery(['Movies'], () =>
    CharactersServices.getCharacter(id)
  )
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

const Character: NextPage = () => {
  const router = useRouter()
  const id = router.query.id as string
  const { data, isLoading, isError } = useCharacter(id)
  if (isLoading) {
    return (
      <div className="h-screen w-screen  bg-white p-2 font-poppins text-2xl font-bold  text-black  dark:bg-black  dark:text-white">
        Loading...
      </div>
    )
  }
  if (isError) {
    return (
      <div className="h-screen w-screen   bg-white p-2 font-poppins text-2xl font-bold  text-black  dark:bg-black  dark:text-white">
        Error
      </div>
    )
  }
  return (
    <div className="h-screen w-screen  bg-white p-2 dark:bg-black">
      <h2>
        <Link
          className="font-poppins text-xs text-blue-500 underline "
          href="/"
        >
          Back
        </Link>
      </h2>
      <h1 className="border-l-black text-center font-poppins text-2xl  text-black  dark:text-white">
        {data?.name}
      </h1>
      <h1 className="m-2 font-poppins text-3xl  text-black  dark:text-white">
        Birth Year: {data?.birth_year}
      </h1>
      <h1 className=" m-2 text-3xl text-black  dark:text-white">
        Height: {data?.height}
      </h1>
      <h1 className=" m-2 text-3xl text-black  dark:text-white">
        Skin Color: {data?.skin_color}
      </h1>
      <ul>
        <h2 className="m-2 mt-10 font-poppins  text-2xl text-black  dark:text-white">
          Films list:
        </h2>
        {data?.films.map((e) => {
          const characterUrlParts = e.split('/').filter(Boolean)
          const characterId = characterUrlParts[characterUrlParts.length - 1]
          return (
            <li
              key={characterId}
              className="m-1 h-8 w-48 rounded-lg bg-cyan-400 p-1 text-blue-50"
            >
              <Link
                href={`/films/${characterId}`}
                className=" font-poppins text-black  dark:text-white"
              >
                <Film key={characterId} id={characterId} />
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Character
