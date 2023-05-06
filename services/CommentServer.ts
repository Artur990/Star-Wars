import { ICommentPost, TComments } from '../types/types'
import { apiComments } from '../configs/axios'

const getComments = async () => {
  const res = await apiComments.get<TComments>('')
  return res.data
}
const postComments = async (id: string, name: ICommentPost) => {
  console.log(name)
  let namee = { id: new Date().getTime(), name: 'axios' }
  const res = await apiComments.post<TComments>(`/${id}`, name)
  return res.data
}

export const CommentsServie = {
  getComments,
  postComments,
}
