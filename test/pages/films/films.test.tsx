import { rest } from 'msw'
import React from 'react'
import { server } from '../../../setupTests'
import { renderWithClient } from '../mocks/utils'
import Films from '../../../pages/films'

describe('query component films', () => {
  test('successful query component', async () => {
    const result = renderWithClient(<Films />)

    expect(await result.findByText(/A New Hope/i)).toBeInTheDocument()
  })

  test('failure query component', async () => {
    server.use(
      rest.get('*', (req, res, ctx) => {
        return res(ctx.status(500))
      })
    )
    const result = renderWithClient(<Films />)

    expect(await result.findByText(/Error/i)).toBeInTheDocument()
  })
})
