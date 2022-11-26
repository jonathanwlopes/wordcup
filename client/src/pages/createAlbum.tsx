import { useMutation } from '@apollo/client'
import { MUTATION_CREATE_ALBUM } from 'graphql/mutations/createAlbum'
import { GetServerSidePropsContext } from 'next'
import { getSession, useSession } from 'next-auth/react'
import { Base } from 'templates/Base'
import { initializeApollo } from 'utils/apollo'
import protectedRoutes from 'utils/protected-routes'

export default function FigurePage() {
  const [createAlbum, { error }] = useMutation(MUTATION_CREATE_ALBUM, {
    onCompleted: () => {
      console.log('completado...')
    }
  })
  const session = useSession()
  console.log(session)
  const handleClick = async () => {
    createAlbum({
      variables: {
        data: {
          figures: [16],
          users: session?.data?.id
        }
      }
    })
  }

  console.log(error)
  return (
    <Base>
      <button onClick={handleClick}>Criar album</button>
    </Base>
  )
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
