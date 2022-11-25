import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { Session } from 'next-auth'
import { useMemo } from 'react'

let apolloClient: ApolloClient<NormalizedCacheObject>

type ISession = Session & {
  accessToken?: string
}

function createApolloClient(session?: ISession | null) {
  const httpLink = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_API_URL}graphql`
  })

  const authLink = setContext((_, { headers }) => {
    // const accessToken = session?.accessToken || clientSession.accessToken || ''
    const authorization = session?.accessToken
      ? `Bearer ${session?.accessToken}`
      : ''

    return { headers: { ...headers, authorization } }
  })

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  })
}

export function initializeApollo(
  initialState = null,
  session?: Session | null
) {
  const apolloClientGlobal = apolloClient ?? createApolloClient(session)

  if (initialState) {
    apolloClientGlobal.cache.restore(initialState)
  }

  if (typeof window === 'undefined') return apolloClientGlobal
  apolloClient = apolloClient ?? apolloClientGlobal

  return apolloClient
}

export function useApollo(initialState = null, session?: Session) {
  const instanceApollo = useMemo(
    () => initializeApollo(initialState, session),
    [initialState, session]
  )

  return instanceApollo
}
