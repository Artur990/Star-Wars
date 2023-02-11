import React from 'react'
import { rest } from 'msw'
import { server } from '../../../setupTests'
import Characters from '../../../pages/characters'
import { renderWithClient } from '../../pages/utils/utils'

describe('query component', () => {
  test('successful query component', async () => {
    const result = renderWithClient(<Characters />)

    expect(await result.findByText(/Luke Skywalker/i)).toBeInTheDocument()
  })

  test('failure query component', async () => {
    server.use(
      rest.get('*', (req, res, ctx) => {
        return res(ctx.status(500))
      })
    )
    const result = renderWithClient(<Characters />)

    expect(await result.findByText(/Error/i)).toBeInTheDocument()
  })
})
