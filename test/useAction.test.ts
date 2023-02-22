import { renderHook, waitFor } from '@testing-library/react'
import { createWrapper } from './pages/utils/utils'
import { dataFilms } from './pages/utils/dataFilms'
import { rest } from 'msw'
import { server } from '../setupTests'
import {
  useCharacter,
  useCharacters,
  useMovie,
  useMovies,
} from '../actions/actions'
import { dataCharacters } from './pages/utils/dataCharacters'

describe('query hook movies', () => {
  test('successful query hook movies', async () => {
    const { result } = renderHook(() => useMovies(), {
      wrapper: createWrapper(),
    })
    await waitFor(() => expect(result.current.isSuccess).toBe(true))
    expect(result.current.data).toStrictEqual(dataFilms)
  })

  test('failure query hook', async () => {
    server.use(
      rest.get('*', (req, res, ctx) => {
        return res(ctx.status(500))
      })
    )
    const { result } = renderHook(() => useMovies(), {
      wrapper: createWrapper(),
    })
    await waitFor(() => expect(result.current.isError).toBe(true))
    expect(result.current.error).toBeDefined()
  })
})

describe('query hook movie', () => {
  test('successful query hook movie', async () => {
    const { result } = renderHook(() => useMovie('1'), {
      wrapper: createWrapper(),
    })
    await waitFor(() => expect(result.current.isSuccess).toBe(true))
    expect(result.current.data).toStrictEqual('')
  })

  test('failure query hook movie', async () => {
    server.use(
      rest.get('*', (req, res, ctx) => {
        return res(ctx.status(500))
      })
    )
    const { result } = renderHook(() => useMovie('1'), {
      wrapper: createWrapper(),
    })
    await waitFor(() => expect(result.current.isError).toBe(true))
    expect(result.current.error).toBeDefined()
  })
})

describe('query hook charakter', () => {
  test('successful query hook charakter', async () => {
    const { result } = renderHook(() => useCharacter('1'), {
      wrapper: createWrapper(),
    })
    await waitFor(() => expect(result.current.isSuccess).toBe(true))
    expect(result.current.data).toStrictEqual('')
  })

  test('failure query hook charakter', async () => {
    server.use(
      rest.get('*', (req, res, ctx) => {
        return res(ctx.status(500))
      })
    )
    const { result } = renderHook(() => useCharacter('1'), {
      wrapper: createWrapper(),
    })
    await waitFor(() => expect(result.current.isError).toBe(true))
    expect(result.current.error).toBeDefined()
  })
})

describe('query hook charakters', () => {
  test('successful query hook charakter', async () => {
    const { result } = renderHook(() => useCharacters(), {
      wrapper: createWrapper(),
    })
    await waitFor(() => expect(result.current.isSuccess).toBe(true))
 
    expect(result.current.data).toStrictEqual(dataCharacters)
  })

  test('failure query hook charakter', async () => {
    server.use(
      rest.get('*', (req, res, ctx) => {
        return res(ctx.status(500))
      })
    )
    const { result } = renderHook(() => useCharacters(), {
      wrapper: createWrapper(),
    })
    await waitFor(() => expect(result.current.isError).toBe(true))
    expect(result.current.error).toBeDefined()
  })
})
