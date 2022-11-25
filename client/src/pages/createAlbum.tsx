import { useSession } from 'next-auth/react'
import { Base } from 'templates/Base'

export default function FigurePage() {
  const { data: session } = useSession()

  console.log(session)

  return (
    <Base>
      <h1>Create Album</h1>
    </Base>
  )
}
