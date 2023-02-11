import NextCors from 'nextjs-cors'

async function handler(req: any, res: any) {
  await NextCors(req, res, {
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200,
  })

  res.json({ message: 'Hello NextJs Cors!' })
}
