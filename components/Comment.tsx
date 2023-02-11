import React from 'react'
import { ComentProps } from '../types/types'

const Comment = ({ name }: ComentProps) => {
  return (
    <>
      {name.map((e) => {
        return (
          <div
            key={e.id}
            className="m-1 h-14 w-3/4 rounded-xl  bg-slate-300 p-2 font-poppins  text-xl  text-black dark:text-white "
          >
            {e.comment}
          </div>
        )
      })}
    </>
  )
}

export default Comment
