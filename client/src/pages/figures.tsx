import { useState, useEffect } from 'react'
import { GetServerSidePropsContext } from 'next'
import { signOut } from 'next-auth/react'
import { Base } from 'templates/Base'
import protectedRoutes from 'utils/protected-routes'
import { QUERY_ALBUMS } from 'graphql/query/albums'
import { initializeApollo } from 'utils/apollo'

import Figure from '../components/Figure'

export default function FigurePage({ data }: any) {
  const [figures, setFigures] = useState(
    data.albums.data[0].attributes.figures.data
  )
  const [figurePerPage, setFigurePerPage] = useState(13)
  const [currentPage, setCurrentPage] = useState(0)
  const [nation, setNation] = useState('')
  const [albums, setAlbums] = useState(data.albums.data)

  const pages = Math.ceil(figures.length / figurePerPage)
  const startIndex = currentPage * figurePerPage
  const endIndex = startIndex + figurePerPage
  const currentFigure = figures.slice(startIndex, endIndex)

  console.log('albums', albums)

  useEffect(() => {
    if (nation) {
      data.albums.data.map((album: any) => {
        if (album.attributes.nation.data?.attributes?.name === nation) {
          setFigures(album.attributes.figures.data)
        }
      })
    }
  }, [nation])

  return (
    <Base>
      <button onClick={() => signOut()}>Sair</button>

      <select
        name="nation"
        id="nation"
        onChange={(e) => setNation(e.target.value)}
      >
        <option value="" disabled>
          Selecione um álbum
        </option>
        {albums.map((album: any) => {
          if (album.attributes.nation.data?.attributes?.name) {
            return (
              <option
                key={album.attributes.nation.data?.attributes?.name}
                value={album.attributes.nation.data?.attributes?.name}
              >
                {album.attributes.nation.data?.attributes?.name}
              </option>
            )
          }
        })}
      </select>

      <div
        style={{
          display: 'flex',
          gap: '10px',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {currentFigure.map((figure) => {
          return (
            <Figure
              key={figure.attributes.player.data.attributes.cpf}
              name={figure.attributes.player.data.attributes.name}
              photo={`https://eplus-worldcup.loca.lt/${figure.attributes.player.data.attributes.photo?.data[0]?.attributes?.url}`}
              birth_date={figure.attributes.player.data.attributes.birth_date}
              height={figure.attributes.player.data.attributes.heigth}
              weight={figure.attributes.player.data.attributes.weight}
              nation={
                figure.attributes.player.data.attributes.nation.data.attributes
                  .name
              }
              position={
                figure.attributes.player.data.attributes.position.data
                  .attributes.name
              }
              cpf={figure.attributes.player.data.attributes.cpf}
            />
          )
        })}
      </div>

      <div
        style={{
          display: 'flex',
          gap: '5px',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '10px'
        }}
      >
        {Array.from(Array(pages), (figure, index) => {
          return (
            <button
              style={{
                padding: '10px'
              }}
              key={index}
              value={index}
              onClick={(e) => setCurrentPage(Number(e.target.value))}
            >
              {index + 1}
            </button>
          )
        })}
      </div>
    </Base>
  )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await protectedRoutes(ctx)
  const apolloClient = initializeApollo(null, session)

  const { data } = await apolloClient.query({
    query: QUERY_ALBUMS,
    variables: {
      filters: {
        user: {
          id: {
            eq: session?.id
          }
        }
      }
    }
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      data,
      session
    }
  }
}
