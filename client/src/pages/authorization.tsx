import { QueryProfileMe } from 'graphql/generated/QueryProfileMe'
import { QUERY_PROFILE_ME } from 'graphql/query/profile'
import { GetServerSidePropsContext } from 'next'
import { Base } from 'templates/Base'
import { initializeApollo } from 'utils/apollo'
import protectedRoutes from 'utils/protected-routes'

type AuthorizationProps = {
  username: string
  email: string
}
export default function Authorization({ email, username }: AuthorizationProps) {
  return (
    <Base>
      <h1>Authorization</h1>
      <p>{username}</p>
      <p>{email}</p>
    </Base>
  )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await protectedRoutes(ctx)

  const apolloClient = initializeApollo(null, session)

  const { data } = await apolloClient.query<QueryProfileMe>({
    query: QUERY_PROFILE_ME
  })

  return {
    props: { session, username: data.me?.username, email: data.me?.email }
  }
}
