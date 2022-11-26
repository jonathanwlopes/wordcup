import { GetServerSidePropsContext } from 'next'
import CreateAlbum from 'templates/CreateAlbum'
import { initializeApollo } from 'utils/apollo'
import protectedRoutes from 'utils/protected-routes'

export default function CreateAlbumPage() {
  return <CreateAlbum />
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await protectedRoutes(ctx)
  const apolloClient = initializeApollo(null, session)

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      session
    }
  }
}
