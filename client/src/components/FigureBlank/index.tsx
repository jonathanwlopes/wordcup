import * as S from './styles'

interface FigureBlank {
  name: string
  position: string
}

const FigureBlank = ({ name, position }: FigureBlank) => (
  <S.Area>
    <S.Wrapper></S.Wrapper>
    <S.Content>
      <S.Name>{name}</S.Name>
      <S.Position>{position}</S.Position>
    </S.Content>
  </S.Area>
)

export default FigureBlank
