import { QueryProfileMe } from 'graphql/generated/QueryProfileMe'
import { QUERY_ALBUM_BY_USER } from 'graphql/query/getAlbumByUser'
import { QUERY_PROFILE_ME } from 'graphql/query/profile'
import { GetServerSidePropsContext } from 'next'
import { Collection } from 'templates/Collection'
import { initializeApollo } from 'utils/apollo'
import protectedRoutes from 'utils/protected-routes'

export default function CollectionPage(props) {
  return <Collection {...props} />
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await protectedRoutes(ctx)

  const apolloClient = initializeApollo(null, session)

  const { data } = await apolloClient.query<QueryProfileMe>({
    query: QUERY_PROFILE_ME
  })

  const { data: albums } = await apolloClient.query({
    query: QUERY_ALBUM_BY_USER,
    variables: {
      filters: {
        user: {
          email: {
            eq: session?.user?.email
          }
        }
      }
    }
  })

  return {
    props: {
      session,
      username: data.me?.username,
      email: data.me?.email,
      albums
    }
  }
}
