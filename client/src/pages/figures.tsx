import { useState, useEffect } from 'react'
import { GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'
import { Base } from 'templates/Base'
import protectedRoutes from 'utils/protected-routes'
import { QUERY_ALBUMS } from 'graphql/query/albums'
import { initializeApollo } from 'utils/apollo'

import Figure from '../components/Figure'
import FigureBlank from '../components/FigureBlank'
import NationInfo from '../components/NationInfo'
import Button from '../components/Button'

export default function FigurePage({ data }: any) {
  const [figures, setFigures] = useState(
    data.albums.data[0].attributes.figures.data
  )

  console.log(figures)

  const [figurePerPage, setFigurePerPage] = useState(13)
  const [currentPage, setCurrentPage] = useState(0)
  const [nation, setNation] = useState(
    data.albums.data[0].attributes.nation.data.attributes.name
  )
  const [albums, setAlbums] = useState(data.albums.data)

  const hasFigures = []
  albums[0].attributes.figures.data.filter(function (element) {
    if (figures.includes(element)) {
      hasFigures.push(element)
    }
  })

  const pages = Math.ceil(figures.length / figurePerPage)
  const startIndex = currentPage * figurePerPage
  const endIndex = startIndex + figurePerPage
  const currentFigure = figures.slice(startIndex, endIndex)

  const figureHasPhoto = []
  const figureHasNoPhoto = []

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
      <NationInfo nation={nation} data={albums} />

      {/* <select
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
      </select> */}

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap',
          width: '1100px',
          margin: '0 auto 60px auto'
        }}
      >
        {albums[0].attributes.nation.data.attributes.players.data.map(
          (player: any) => {
            const name = hasFigures.find(
              (figure: any) =>
                figure.attributes.player.data.attributes.name ===
                player.attributes.name
            )

            if (name) {
              figureHasPhoto.push(name)
            } else {
              figureHasNoPhoto.push(player)
            }
          }
        )}

        {figureHasPhoto.map((figure: any) => (
          <Figure
            key={figure.attributes.player.data.attributes.cpf}
            name={figure.attributes.player.data.attributes.name}
            photo={`${figure.attributes.player.data.attributes.photo.data[0].attributes.url}`}
            position={
              figure.attributes.player.data.attributes.position.data.attributes
                .name
            }
          />
        ))}

        {figureHasNoPhoto.map((player: any, index) => (
          <FigureBlank
            key={index}
            name={player.attributes.name}
            position={player.attributes.position.data.attributes.name}
          />
        ))}
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
