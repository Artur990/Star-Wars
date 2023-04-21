import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
import NextCors from 'nextjs-cors'

interface Episode {
  episode_id: number
  name: {
    id: number | string
    comment: string
  }[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Episode>
) {
  await NextCors(req, res, {
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200,
  })

  const filePath = path.join(process.cwd(), 'data', './films.json')

  try {
    const filmsOptionsRaw: string = fs.readFileSync(filePath, 'utf8')

    if (!filmsOptionsRaw) {
      throw new Error('No data available')
    }

    const filmsOptions = JSON.parse(filmsOptionsRaw)

    res.status(200).json(filmsOptions)
  } catch (err) {
    console.error(`Error reading file: ${err}`)
    // res.status(500).send('Server error')
  }
}
