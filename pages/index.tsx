import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

function Home() {
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
          className="relative mx-auto mt-10 flex h-64 w-64 justify-center overflow-hidden
            rounded-full border-black bg-gradient-to-r
           from-cyan-500 to-teal-500 align-middle sm:h-96 sm:w-96
          "
        >
          {/* <Image
            src="/dev-ed-wave.png"
            width={250}
            height={250}
            alt="photo"
            // layout="fill"
            // objectFit="cover"
          /> */}
        </div>
      </div>
    </div>
  )
}
export default Home
