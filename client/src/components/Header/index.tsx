import { signOut, useSession } from 'next-auth/react'
import * as S from './styles'

type HeaderProps = {
  logo: string
}
const Header = ({ logo }: HeaderProps) => {
  const session = useSession()

  return (
    <S.Wrapper>
      <S.Center>
        <S.Logo src={logo} alt="Logo Hackathon" />
        <S.Navigation>
          <S.Welcome>Olá, {session.data?.user?.name}!</S.Welcome>
          <S.ListMenu>
            <S.ItemMenu>
              <S.IconHome />
              <S.TextMenu>Home</S.TextMenu>
            </S.ItemMenu>
            <S.ItemMenu>
              <S.IconSettings />
              <S.TextMenu>Configurações</S.TextMenu>
            </S.ItemMenu>
            <S.ItemMenu>
              <S.IconQuit />
              <S.Signout onClick={() => signOut()}>Sair</S.Signout>
            </S.ItemMenu>
          </S.ListMenu>
        </S.Navigation>
      </S.Center>
    </S.Wrapper>
  )
}

export default Header
