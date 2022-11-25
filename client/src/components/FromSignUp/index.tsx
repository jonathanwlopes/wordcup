import React, { useState } from 'react'
import { useMutation } from '@apollo/client'

import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes'
import { MUTATION_REGISTER } from 'graphql/mutations/register'

import * as S from './styles'
import { signIn } from 'next-auth/react'

const FromSignUp = () => {
  const [createUser, { error }] = useMutation(MUTATION_REGISTER, {
    onError: (err) => console.log(err),
    onCompleted: () => {
      !error &&
        signIn('credentials', {
          email: values.email,
          password: values.password,
          callbackUrl: '/figures'
        })
    }
  })

  const [values, setValues] = useState<UsersPermissionsRegisterInput>({
    username: '',
    email: '',
    password: ''
  })

  const handleInput = (field: string, value: string) =>
    setValues((prevState) => ({ ...prevState, [field]: value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    createUser({
      variables: {
        input: {
          username: values.username,
          email: values.email,
          password: values.password
        }
      }
    })
  }

  return (
    <S.Wrapper>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={(entry) => handleInput('username', entry.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={(entry) => handleInput('email', entry.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={(entry) => handleInput('password', entry.target.value)}
        />

        <button type="submit">Enviar</button>
      </form>
    </S.Wrapper>
  )
}

export default FromSignUp
