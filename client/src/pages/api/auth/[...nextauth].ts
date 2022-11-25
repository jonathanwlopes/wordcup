import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import axios from 'axios'

const options = {
  pages: {
    signIn: '/sign-in'
  },

  providers: [
    CredentialsProvider({
      name: 'Signin',
      credentials: {},
      async authorize({ email, password }: any) {
        const { data } = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/auth/local`,
          {
            identifier: email,
            password
          }
        )

        if (data.user) {
          return { ...data.user, jwt: data.jwt }
        } else {
          return null
        }
      }
    })
  ],

  callbacks: {
    jwt: async ({ token, user }: any) => {
      if (user) {
        token.id = user.id
        token.email = user.email
        token.name = user.username as string
        token.jwt = user.jwt
      }

      return Promise.resolve(token)
    },

    session: async ({ session, token }: any) => {
      session.accessToken = token.jwt
      session.id = token.id

      return Promise.resolve(session)
    }
  }
}

const Auth = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options)

export default Auth
