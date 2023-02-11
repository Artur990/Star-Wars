import React from 'react'
import type { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { dehydrate } from '@tanstack/query-core'
import { QueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'

import { MoviesServices } from '../../services/MovieServices'
import {
  useMovie,
  useGetComments,
  usePostComments,
} from '../../actions/actions'
import Charakter from '../../components/charakter/Charakter'
import Comment from '../../components/Comment'
import { CommentsServie } from '../../services/CommentServer'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const queryClient = new QueryClient()
  const { id } = ctx.query as { id: string }
  await queryClient.prefetchQuery(['Movies'], () => MoviesServices.getMove(id))
  await queryClient.prefetchQuery(['Comments'], () =>
    CommentsServie.getComments()
  )
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

const Movie: NextPage = () => {
  const router = useRouter()
  const id = router.query.id as string
  const { data, isLoading, isError } = useMovie(id)
  const { newComent } = useGetComments(id)
  const mutation = usePostComments(id)

  const handlerSubmit = (e: any) => {
    e.preventDefault()
    if (e.target.elements.searchTerm.value === '') {
      toast.error('The message is empty')
      return
    }
    mutation.mutate({
      id: new Date(),
      comment: e.target.elements.searchTerm.value as string,
    })
    e.target.elements.searchTerm.value = ''
  }

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
    <div className="w-screen bg-white  p-2 dark:bg-black ">
      <h1 className=" border-l-black text-center font-poppins text-3xl  text-black  dark:text-white">
        {data?.title}
      </h1>

      <p className="m-2  font-poppins text-xl  text-black  dark:text-white">
        {data?.opening_crawl}
      </p>
      <ul>
        <h2 className="m-2  font-poppins text-2xl  text-black  dark:text-white">
          character list:
        </h2>
        {data?.characters.map((e) => {
          const characterUrlParts = e.split('/').filter(Boolean)
          const characterId = characterUrlParts[characterUrlParts.length - 1]
          return (
            <li
              key={characterId}
              className="m-1 h-8 w-48  rounded-lg bg-cyan-400 p-1 font-poppins text-blue-50"
            >
              <Link
                href={`/characters/${characterId}`}
                className=" text-black  dark:text-white"
              >
                <Charakter key={characterId} id={characterId} />
              </Link>
            </li>
          )
        })}
      </ul>
      <section>
        <h1 className="text-center font-poppins text-2xl  font-bold  text-black  dark:text-white">
          Review:
        </h1>
        <form onSubmit={handlerSubmit}>
          <div className="flex justify-center">
            <textarea
              className="dark:text-blac h-36   w-2/4  rounded-lg  bg-slate-800  font-poppins   text-white  opacity-75 hover:opacity-100 dark:bg-slate-300"
              name="searchTerm"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className=" md-8  mt-5 h-10 w-32 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 px-3   py-1  text-center font-poppins text-xl text-black dark:text-white "
            >
              Add
            </button>
          </div>
        </form>
        <div className="border-b-1 mx-auto mt-5 mb-5 w-4/5 border border-black " />
        <div className=" flex flex-wrap justify-center   ">
          {newComent?.map((e) => {
            return <Comment key={e.episode_id} {...e} />
          })}
        </div>
      </section>
    </div>
  )
}

export default Movie
