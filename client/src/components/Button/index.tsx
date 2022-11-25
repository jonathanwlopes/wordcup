import { ReactNode, ButtonHTMLAttributes } from 'react'
import * as S from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const Button = ({ children, ...rest }: ButtonProps) => (
  <S.Button {...rest}>{children}</S.Button>
)

export default Button
