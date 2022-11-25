import * as S from './styles'

interface FigureProps {
  name: string
  photo?: string
  birth_date: string
  height: string
  weight: string
  nation: string
  position: string
  cpf: number
}

const Figure = ({
  name,
  photo,
  birth_date,
  height,
  weight,
  nation,
  position,
  cpf
}: FigureProps) => (
  <S.Wrapper>
    <S.Image src={photo} alt={name} />
    <S.Caption>
      <h2>{name}</h2>
      <p>{weight}kg</p>
      <p>{height}m</p>
      <p>{position}</p>
      <p>{nation}</p>
      <p>{birth_date}</p>
      <p>{cpf}</p>
    </S.Caption>
  </S.Wrapper>
)

export default Figure
