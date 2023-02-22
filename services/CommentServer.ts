import { ICommentPost, TComments } from '../types/types'
import { apiComments } from '../configs/axios'

const getComments = async () => {
  const res = await apiComments.get<TComments>('')
  return res.data
}
const postComments = async (id: string, obj: ICommentPost) => {
  const res = await apiComments.post<TComments>(id, obj)
  return res.data
}

export const CommentsServie = {
  getComments,
  postComments,
}
