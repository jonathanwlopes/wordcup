import { signIn } from 'next-auth/react'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import * as S from './styles'
import Link from 'next/link'

const FormSignIn = () => {
  const [loading, setLoading] = useState(false)
  const routes = useRouter()
  const { push, query } = routes
  const [values, setValues] = useState({})

  const handleInput = (field: string, value: string) =>
    setValues((prevState) => ({ ...prevState, [field]: value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: `${window.location.origin}${query?.callbackUrl || ''}`
    })

    if (result?.url) {
      return push(result?.url)
    }

    setLoading(false)
  }

  return (
    <S.Container>
      <S.FormWrapper>
        <S.Logo src="/img/logo.png" alt="Copa Hackathon Logo" />
        <form onSubmit={handleSubmit}>
          <S.InputsWrapper>
            <S.InputWrapper>
              <S.PersonLabel htmlFor="email">Login</S.PersonLabel>
              <S.Input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                onChange={(entry) => handleInput('email', entry.target.value)}
              />
            </S.InputWrapper>
            <S.InputWrapper>
              <S.PasswordLabel htmlFor="password">Senha</S.PasswordLabel>
              <S.Input
                id="password"
                type="password"
                name="password"
                placeholder="Senha"
                onChange={(entry) =>
                  handleInput('password', entry.target.value)
                }
              />
            </S.InputWrapper>
          </S.InputsWrapper>

          {!loading && (
            <S.SubmitButton type="submit">
              <S.LoginSVG src="/img/login.svg" alt="Login Icon" />
              <span>Entrar</span>
            </S.SubmitButton>
          )}

          {loading && <span>Carregando...</span>}
        </form>

        <S.Signup>
          Começando agora? <Link href="/">Cadastre-se</Link>.
        </S.Signup>
        <S.LogoAgency src="/img/logo-agencia.png" alt="Agência eplus" />
      </S.FormWrapper>
    </S.Container>
  )
}

export default FormSignIn
