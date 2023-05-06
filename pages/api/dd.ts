// import { NextApiRequest, NextApiResponse } from 'next'

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const { slug } = req.query

//   // Przykład: W zależności od wartości 'slug', możemy zwrócić różne dane.
//   switch (slug) {
//     case 'example1':
//       res.status(200).json({ message: 'Hello from example1' })
//       break
//     case 'example2':
//       res.status(200).json({ message: 'Hello from example2' })
//       break
//     default:
//       res.status(404).json({ message: 'Not foundp' })
//   }
// }
export default function Index(req: any, res: any) {
  // zmienna trzyamjaca dynamiczne id api requestu
  const { slug } = req.query
  // zwrócenie id w odpowiedzi
  res.send(`ID: ${slug}`)
  //   res.redirect("/api");
}
