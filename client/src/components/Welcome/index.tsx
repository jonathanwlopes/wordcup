import { useRouter } from 'next/router'
import * as S from './styles'

type WelcomeProps = {
  title: string
  subTitle: string
  img: string
  alternativeText: string
  buttonLabel: string
  buttonUrl: string
}

export const Welcome = ({
  title,
  subTitle,
  img,
  alternativeText,
  buttonLabel,
  buttonUrl
}: WelcomeProps) => {
  const { push } = useRouter()

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subTitle}</S.SubTitle>
      <S.Img src={img} alt={alternativeText} />
      <S.Button onClick={() => push(buttonUrl)}>{buttonLabel}</S.Button>
    </S.Container>
  )
}
