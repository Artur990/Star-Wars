export interface IGetMoviesResults {
  results: IMovie[]
  isSuccess: any
  isError: any
}
export interface IGetCharaktersResults {
  results: ICharacter[]
}

export interface IMovie {
  title: string
  episode_id: number
  opening_crawl: string
  characters: string[]
  url: string
}

export interface ICharacter {
  name: string
  height: number
  skin_color: string
  birth_year: string
  films: string[]
  url: string
}

export type TComments = {
  episode_id: number
  name: {
    id: number
    comment: string
  }[]
}[]
export interface ICommentPost {
  id: Date
  comment: string
}
export interface IComentProps {
  name: { id: number; comment: string }[]
}
