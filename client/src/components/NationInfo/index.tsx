import { useRouter } from 'next/router'
import * as S from './styles'

interface NationProps {
  nation: string
  data: []
}

const NationInfo = ({ nation, data }: NationProps) => {
  const router = useRouter()

  return (
    <S.Wrapper
      bg={
        `${process.env.NEXT_PUBLIC_API_URL}${data[0].attributes.nation.data.attributes.bg.data[0].attributes.url}` ||
        ''
      }
    >
      <S.AreaNation>
        <S.Flag></S.Flag>
        <S.Nation>{nation}</S.Nation>
      </S.AreaNation>

      <S.Button onClick={() => router.push(`/acervo`)}>
        Ver minhas figurinhas
      </S.Button>
    </S.Wrapper>
  )
}

export default NationInfo
