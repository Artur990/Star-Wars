import { CommentPost, Comments } from '../types/types'
import { apiComments } from '../libs/axios'

const getComments = async () => {
  const res = await apiComments.get<Comments>('')
  return res.data
}
const postComments = async (id: string, obj: CommentPost) => {
  const res = await apiComments.post<Comments>(id, obj)
  return res.data
}

export const CommentsServie = {
  getComments,
  postComments,
}
