import Footer from 'components/Footer'
import FromSignUp from 'components/FromSignUp'
import { QUERY_PLAYERS } from 'graphql/query/players'
import { initializeApollo } from 'utils/apollo'

export default function Home() {
  return (
    <>
      <h1
        style={{ marginTop: '71px', display: 'flex', justifyContent: 'center' }}
      >
        Cadastre-se para começar a montar seu álbum
      </h1>
      <FromSignUp />

      <Footer />
    </>
  )
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
