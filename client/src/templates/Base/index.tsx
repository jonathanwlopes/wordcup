import Header from 'components/Header'

export type BaseTemplateProps = {
  children: React.ReactNode
}

export const Base = ({ children }: BaseTemplateProps) => {
  return (
    <div>
      <Header logo="/img/logo.png" />
      {children}
      <footer>Footer</footer>
    </div>
  )
}
