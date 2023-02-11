export interface GetMoviesResults {
  results: Movie[]
  isSuccess: any
  isError: any
}
export interface GetCharaktersResults {
  results: Character[]
}

export interface Movie {
  title: string
  episode_id: number
  opening_crawl: string
  characters: string[]
  url: string
}

export interface Character {
  name: string
  height: number
  skin_color: string
  birth_year: string
  films: string[]
  url: string
}

export interface Comments {
  episode_id: number
  name: {
    id: number
    comment: string
  }[]
}
export interface CommentPost {
  id: any
  comment: string
}
export interface ComentProps {
  name: { id: number; comment: string }[]
}
