import * as S from './styles'

interface FigureProps {
  name: string
  photo: string
  position: string
}

const Figure = ({ name, photo, position }: FigureProps) => (
  <S.Area>
    <S.Image src={photo} alt={name} />
    <S.Content>
      <S.Name>{name}</S.Name>
      <S.Position>{position}</S.Position>
    </S.Content>
  </S.Area>
)

export default Figure
