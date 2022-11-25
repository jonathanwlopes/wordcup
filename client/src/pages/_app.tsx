import Head from 'next/head'
import { AppProps } from 'next/dist/shared/lib/router/router'
import { SessionProvider as AuthProvider } from 'next-auth/react'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from 'utils/apollo'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const client = useApollo(pageProps.initialApolloState)

  return (
    <AuthProvider session={session}>
      <ApolloProvider client={client}>
        <Head>
          <title>World Cup</title>
          <link rel="shortcut icon" href="/img/icon-512.png" />
          <link rel="apple-touch-icon" href="/img/icon-512.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#06092B" />
          <meta
            name="description"
            content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
          />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </ApolloProvider>
    </AuthProvider>
  )
}

export default App
