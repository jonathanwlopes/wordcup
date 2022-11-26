import FormSignIn from 'components/FormSignIn'
import { QUERY_PLAYERS } from 'graphql/query/players'
import { initializeApollo } from 'utils/apollo'

export default function Home() {
  return <FormSignIn />
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({
    query: QUERY_PLAYERS
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      data
    }
  }
}
