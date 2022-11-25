import Header from 'components/Header'
import Footer from 'components/Footer'

export type BaseTemplateProps = {
  children: React.ReactNode
}

export const Base = ({ children }: BaseTemplateProps) => {
  return (
    <div>
      <Header logo="/img/logo.png" />
      {children}
      <Footer />
    </div>
  )
}
