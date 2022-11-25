import React, { useState } from 'react'
import { useMutation } from '@apollo/client'

import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes'
import { MUTATION_REGISTER } from 'graphql/mutations/register'

import * as S from './styles'
import { signIn } from 'next-auth/react'

import Button from '../Button'

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
      <S.Form onSubmit={handleSubmit}>
        <S.Line>
          <S.InputArea>
            <S.Label htmlFor="name">Nome completo*</S.Label>
            <S.Input
              type="text"
              name="name"
              id="name"
              onChange={(entry) => handleInput('name', entry.target.value)}
            />
          </S.InputArea>

          <S.InputArea>
            <S.Label htmlFor="email">E-mail*</S.Label>
            <S.Input
              type="email"
              name="email"
              id="email"
              onChange={(entry) => handleInput('email', entry.target.value)}
            />
          </S.InputArea>
        </S.Line>

        <S.Line>
          <S.InputArea>
            <S.Label htmlFor="username">Nome de usuário*</S.Label>
            <S.Input
              type="text"
              name="username"
              id="username"
              onChange={(entry) => handleInput('username', entry.target.value)}
            />
          </S.InputArea>

          <S.InputArea>
            <S.Label htmlFor="localization">Localização</S.Label>
            <S.Input
              type="text"
              name="localization"
              id="localization"
              onChange={(entry) =>
                handleInput('localization', entry.target.value)
              }
            />
          </S.InputArea>
        </S.Line>

        <S.Line>
          <S.InputArea>
            <S.Label htmlFor="password">Senha*</S.Label>
            <S.Input
              type="password"
              name="password"
              id="password"
              onChange={(entry) => handleInput('password', entry.target.value)}
            />
          </S.InputArea>

          <S.InputArea>
            <S.Label htmlFor="confirmPassword">Confirmar senha*</S.Label>
            <S.Input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              onChange={(entry) =>
                handleInput('confirmPassword', entry.target.value)
              }
            />
          </S.InputArea>
        </S.Line>

        <Button style={{ margin: '45px auto 0 auto' }} type="submit">
          Cadastrar
        </Button>
      </S.Form>
    </S.Wrapper>
  )
}

export default FromSignUp
