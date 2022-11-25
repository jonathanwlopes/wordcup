import { GetServerSidePropsContext } from 'next'
import { signOut, useSession } from 'next-auth/react'
import { Base } from 'templates/Base'
import protectedRoutes from 'utils/protected-routes'

export default function FigurePage() {
  const { data: session } = useSession()

  return (
    <Base>
      <button onClick={() => signOut()}>Sair</button>
      <div>FigurePage</div>
      <p>User: {session?.user?.name}</p>
    </Base>
  )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await protectedRoutes(ctx)

  return {
    props: { session }
  }
}
