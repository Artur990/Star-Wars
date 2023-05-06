import fs from 'fs'
import path from 'path'
import { NextApiRequest, NextApiResponse } from 'next'

const filePath = path.join(process.cwd(), 'data', 'films.json')

const readData = () => {
  const fileData = fs.readFileSync(filePath, 'utf-8')
  return JSON.parse(fileData)
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== 'GET') {
      res.setHeader('Allow', 'GET')
      res.status(405).json({ message: `Method ${req.method} is not allowed.` })
      return
    }

    const data = readData()
    res.status(200).json(data)
  } catch (error) {
    console.error('Error while reading data:', error)
    res.status(500).json({ message: 'An internal server error occurred.' })
  }
}
