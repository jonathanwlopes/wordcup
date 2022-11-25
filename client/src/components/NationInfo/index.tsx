import * as S from './styles'

interface NationProps {
  nation: string
}

const NationInfo = ({ nation }: NationProps) => (
  <S.Wrapper>
    <h1>{nation}</h1>
  </S.Wrapper>
)

export default NationInfo
