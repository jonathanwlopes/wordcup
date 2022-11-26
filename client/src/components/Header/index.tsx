import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import * as S from './styles'

type HeaderProps = {
  logo: string
}

const Header = ({ logo }: HeaderProps) => {
  const session = useSession()
  const { push } = useRouter()

  return (
    <S.Wrapper>
      <S.Center>
        <S.Logo src={logo} alt="Logo Hackathon" />
        <S.Navigation>
          {session.data?.user && (
            <S.Welcome>Olá, {session.data?.user?.name}!</S.Welcome>
          )}
          <S.ListMenu>
            <S.ItemMenu onClick={() => push('/figures')}>
              <S.IconHome />
              <S.TextMenu>Home</S.TextMenu>
            </S.ItemMenu>
            <S.ItemMenu onClick={() => push('/allFigures')}>
              <S.IconSettings />
              <S.TextMenu>Figurinhas</S.TextMenu>
            </S.ItemMenu>
            {session.data?.user && (
              <S.ItemMenu>
                <S.IconQuit />
                <S.Signout onClick={() => signOut()}>Sair</S.Signout>
              </S.ItemMenu>
            )}
          </S.ListMenu>
        </S.Navigation>
      </S.Center>
    </S.Wrapper>
  )
}

export default Header
