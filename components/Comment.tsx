import React from 'react'
import { IComentProps } from '../types/types'
import { useId } from 'react'
const Comment = ({ name }: IComentProps) => {
  const id = useId()
  return (
    <>
      {name.map((e) => {
        return (
          <div
            key={id}
            className="Dark:bg-slate-300 m-1 h-14 w-3/4  rounded-xl bg-slate-500 p-2 font-poppins  text-xl  text-black dark:text-white "
          >
            {e?.comment}
          </div>
        )
      })}
    </>
  )
}

export default Comment
