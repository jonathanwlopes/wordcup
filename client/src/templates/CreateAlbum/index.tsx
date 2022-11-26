import { useMutation, useQuery } from '@apollo/client'
import { Welcome } from 'components/Welcome'
import { MUTATION_CREATE_ALBUM } from 'graphql/mutations/createAlbum'
import { QUERY_GET_ALL_FIGURES } from 'graphql/query/getAllFigures'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { Base } from 'templates/Base'
import { sortFigures } from 'utils/sortFigures'
import * as S from './styles'

export default function CreateAlbum() {
  const [createAlbum, { error }] = useMutation(MUTATION_CREATE_ALBUM, {
    onCompleted: () => {
      console.log('criando album...')
    }
  })
  const { data } = useQuery(QUERY_GET_ALL_FIGURES)
  const [success, setSuccess] = useState(false)

  const session = useSession()

  const handleClick = async () => {
    const welcomeFigures = sortFigures(data).map((figure) => Number(figure.id))

    createAlbum({
      variables: {
        data: {
          figures: welcomeFigures,
          user: session?.data?.id,
          nation: 'Brazil'
        }
      }
    })

    setSuccess(true)
  }

  if (error)
    return <h1>Ocorreu um erro, atualize a página e tente novamente!</h1>

  return (
    <Base>
      <S.Title>Crie seu álbum e ganhe no mínimo uma figurinha!</S.Title>
      <S.ButtonCreate onClick={handleClick}>
        {success ? 'Album criado com sucesso' : 'Criar album'}
      </S.ButtonCreate>

      {success && (
        <S.ContainerSuccess>
          <Welcome
            title="Boas vindas!"
            subTitle="Aqui está seu prêmio diário"
            img="/img/welcome.png"
            alternativeText="Prêmio pacote de figurinhas sortidas"
            buttonUrl="/acervo"
            buttonLabel="Abrir pacotes"
          />
        </S.ContainerSuccess>
      )}
    </Base>
  )
}
