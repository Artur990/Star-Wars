import { CommentsServie } from './../services/CommentServer'
import type { Comments, CommentPost } from '../types/types'
import { MoviesServices } from '../services/MovieServices'
import { CharaktersServices } from '../services/CharactersService'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
const regex = /(\d+)\/$/
export const getUrlID = (link: string) => {
  const match = link.match(regex)
  return match && match[1]
}

export const useMovies = () => {
  return useQuery(['Movies'], () => MoviesServices.getMoves())
}

export const useMovie = (id: string) => {
  return useQuery(['Movie', id], () => MoviesServices.getMove(id))
}

export const useCharacters = () => {
  return useQuery(['Charakters'], () => CharaktersServices.getCharacters())
}

export const useCharacter = (id: string) => {
  return useQuery(['Charakter', id], () => CharaktersServices.getChatacter(id))
}

export const useGetComments = (id: string) => {
  const query = useQuery<Comments>(['Comments'], () =>
    CommentsServie.getComments()
  )

  if (query.data) {
    query?.data.filter((e) => e.episode_id === Number(id))
  }
  const newComent = query.data?.filter((e) => e.episode_id === Number(id))

  return { query, newComent }
}

export const usePostComments = (id: string) => {
  const queryClient = useQueryClient()

  return useMutation(
    (newTodo: CommentPost) => CommentsServie.postComments(id, newTodo),
    {
      onSuccess: () => {
        toast.success('Your comment has been added')
        queryClient.invalidateQueries(['Comments'])
      },
      onError: () => {
        toast.error('Something went wrong')
      },
    }
  )
}
