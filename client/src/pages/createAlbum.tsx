import { useMutation } from '@apollo/client'
import { MUTATION_CREATE_ALBUM } from 'graphql/mutations/createAlbum'
import { useSession } from 'next-auth/react'
import { Base } from 'templates/Base'

export default function FigurePage() {
  const { data: session } = useSession()

  const [createAlbum, { error }] = useMutation(MUTATION_CREATE_ALBUM)

  console.log(session)

  const handleClick = () => {
    createAlbum({
      variables: {
        data: {
          figures: [],
          user: 0
        }
      }
    })
  }
  return (
    <Base>
      <button onClick={handleClick}>Criar album</button>
    </Base>
  )
}
