import React from 'react'
import Layout from '../components/Layout'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
  dehydrate,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { FC, useState } from 'react'
import { Toaster } from 'react-hot-toast'

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient())
  const dehydratedState = dehydrate(queryClient)
  return (
    <Layout>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Toaster />
          <Component {...pageProps} />

          <ReactQueryDevtools initialIsOpen={false} />
        </Hydrate>
      </QueryClientProvider>
    </Layout>
  )
}
export default App
