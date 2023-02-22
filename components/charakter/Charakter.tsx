import React from 'react'
import { useCharacter } from '../../hook/hooks'

const Charakter = ({ id }: { id: string }) => {
  const character = useCharacter(id)
  return <div>{character?.data?.name}</div>
}

export default Charakter
