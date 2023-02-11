import { rest } from 'msw'
import React from 'react'
import { server } from '../../../setupTests'
import { renderWithClient } from '../../pages/utils/utils'
import Films from '../../../pages/films'

describe('query component', () => {
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
