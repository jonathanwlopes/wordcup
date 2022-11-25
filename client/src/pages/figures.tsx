import { useState, useEffect } from 'react'
import { GetServerSidePropsContext } from 'next'
import { signOut } from 'next-auth/react'
import { Base } from 'templates/Base'
import protectedRoutes from 'utils/protected-routes'
import { QUERY_ALBUMS } from 'graphql/query/albums'
import { initializeApollo } from 'utils/apollo'

import Figure from '../components/Figure'
import FigureBlank from '../components/FigureBlank'

export default function FigurePage({ data }: any) {
  const [figures, setFigures] = useState(
    data.albums.data[0].attributes.figures.data
  )
  const [figurePerPage, setFigurePerPage] = useState(13)
  const [currentPage, setCurrentPage] = useState(0)
  const [nation, setNation] = useState('')
  const [albums, setAlbums] = useState(data.albums.data)

  console.log('figure', figures)
  console.log('albums', albums)

  const acertos = []

  // filter if figure has in albums
  const filteredFigures = figures.filter((figure) => {
    const hasAlbum = albums.find((album) => {
      const hasFigure = album.attributes.figures.data.find((figureAlbum) => {
        figureAlbum.attributes.player.data.attributes.name ===
          figure.attributes.player.data.attributes.name
      })

      return hasFigure
    })
  })

  console.log('filteredFigures', filteredFigures)

  albums[0].attributes.nation.data.attributes.players.data.filter(function (
    element
  ) {
    if (figures.includes(element)) {
      // se for encontrado um valor nos dois arrays
      acertos.push(element)
    }
  })

  console.log('Figurinhas preenchidas: ', acertos)

  const pages = Math.ceil(figures.length / figurePerPage)
  const startIndex = currentPage * figurePerPage
  const endIndex = startIndex + figurePerPage
  const currentFigure = figures.slice(startIndex, endIndex)

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
          alignItems: 'center',
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap',
          width: '1100px',
          margin: '0 auto'
        }}
      >
        {albums[0].attributes.nation.data.attributes.players.data.map(
          (player: any) => {
            if (player.attributes.name) {
            }

            return (
              <FigureBlank
                key={player.attributes.name}
                name={player.attributes.name}
                position={player.attributes.position.data.attributes.name.replace(
                  '_',
                  ' '
                )}
              />
            )
          }
        )}
      </div>

      {/* <div
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
              photo={`${process.env.NEXT_PUBLIC_API_URL}${figure.attributes.player.data.attributes.photo?.data[0]?.attributes?.url}`}
              position={figure.attributes.player.data.attributes.position.data.attributes.name.replace(
                '_',
                ' '
              )}
            />
          )
        })}
      </div> */}

      {/* <div
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
      </div> */}
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
