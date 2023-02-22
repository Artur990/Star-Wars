import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

import photo from '../public/dev-ed-wave.png'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Star Wars</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex  h-screen w-screen justify-center bg-white align-middle dark:bg-black">
        <div
          className="relative mx-auto mt-10 h-56 w-56 overflow-hidden rounded-full border-black
            bg-gradient-to-r from-cyan-500 to-teal-500
           sm:h-96 sm:w-96
          "
        >
          <Image src={photo} alt="" layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  )
}
