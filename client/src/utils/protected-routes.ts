import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/react'

async function protectedRoutes(ctx: GetServerSidePropsContext) {
  const session = await getSession(ctx)

  if (!session) {
    ctx.res.writeHead(302, {
      Location: `/signin?callbackUrl=${ctx.resolvedUrl}`
    })
    ctx.res.end()
  }

  return session
}

export default protectedRoutes
