import Footer from '../../components/Footer'

export type BaseTemplateProps = {
  children: React.ReactNode
}

export const Base = ({ children }: BaseTemplateProps) => {
  return (
    <div>
      <header>Header</header>
      {children}
      <Footer />
    </div>
  )
}
