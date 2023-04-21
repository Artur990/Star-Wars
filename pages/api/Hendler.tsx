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

const Handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req

  if (method === 'GET') {
    const data = readData()
    res.status(200).json(data)
  } else if (method === 'POST') {
    const id = req.query.id
    console.log(id)
    const data = readData()

    const newData = data.map((item) => {
      if (item.episode_id === Number(id)) {
        return {
          ...item,
          name: [...item.name, body],
        }
      }
      return item
    })

    writeData(newData)
    res.status(200).json({ message: 'Data updated successfully.' })
  } else {
    res.setHeader('Allow', ['GET', 'POST'])
    res.status(405).json({ message: `Method ${method} Not Allowed` })
  }
}

export default Handler
