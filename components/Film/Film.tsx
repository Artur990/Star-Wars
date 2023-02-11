import React from 'react'
import { useMovie } from '../../actions/actions'
const Film = ({ id }: { id: string }) => {
  const movie = useMovie(id)
  return <div>{movie?.data?.title}</div>
}

export default Film
