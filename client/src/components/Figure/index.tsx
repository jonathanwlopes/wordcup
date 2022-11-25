import * as S from './styles'

interface FigureProps {
  name: string
  photo: string
  position: string
}

const Figure = ({ name, photo, position }: FigureProps) => {
  return (
    <S.Area>
      {photo && (
        <S.Image
          src={`${process.env.NEXT_PUBLIC_API_URL}${photo}`}
          alt={name}
        />
      )}

      {!photo && <S.Empty />}
      <S.Content>
        <S.Name>{name}</S.Name>
        <S.Position>{position}</S.Position>
      </S.Content>
    </S.Area>
  )
}

export default Figure
