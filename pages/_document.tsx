import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'
import useColorMode from '../hook/useColorMode'

export default function Document() {
  return (
    <Html lang="eu">
      <Head />
      <body className="dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
