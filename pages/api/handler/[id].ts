import fs from 'fs'
import path from 'path'
import { NextApiRequest, NextApiResponse } from 'next'

const filePath = path.join(process.cwd(), 'data', 'films.json')

const readData = () => {
  const fileData = fs.readFileSync(filePath, 'utf-8')
  return JSON.parse(fileData)
}

const writeData = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8')
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST')
      res.status(405).json({ message: `Method ${req.method} is not allowed.` })
      return
    }

    const { query, body } = req
    const id = query.id

    if (!body.comment || !body.id) {
      res
        .status(400)
        .json({ message: 'Invalid request data. Comment and ID are required.' })
      return
    }

    const data = readData()

    const newData = data.map((item) => {
      if (item.episode_id === Number(id)) {
        return {
          ...item,
          name: [...item.name, { comment: body.comment, id: body.id }],
        }
      }
      return item
    })

    writeData(newData)

    res.status(200).json({ message: 'Your comment has been added.' })
  } catch (error) {
    console.error('Error while updating data:', error)
    res.status(500).json({ message: 'An internal server error occurred.' })
  }
}
