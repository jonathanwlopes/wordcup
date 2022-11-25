import { signIn } from 'next-auth/react'
import React, { useState } from 'react'
import { useRouter } from 'next/router'

import * as S from './styles'

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
    <S.Wrapper>
      <form onSubmit={handleSubmit}>
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

        {!loading && <button type="submit">Entrar</button>}
        {loading && <span>Carregando...</span>}
      </form>
    </S.Wrapper>
  )
}

export default FormSignIn
