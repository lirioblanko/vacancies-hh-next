import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import React from "react";
import Head from 'next/head'
import {
    QueryClient,
    QueryClientProvider
} from 'react-query'

function MyApp({ Component, pageProps }: AppProps) {

const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false
            }
        }
    }
)

  return (
      <QueryClientProvider client={queryClient}>
        <Head>
          <title>List of vacancies</title>
          <link key={1} rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
        </Head>
        <Component {...pageProps} />
      </QueryClientProvider>
  )
}

export default MyApp
