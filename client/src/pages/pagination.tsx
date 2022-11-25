import { GetServerSidePropsContext } from 'next'
import { useState } from 'react'
import { QUERY_ALBUMS } from 'graphql/query/albums'
import { initializeApollo } from 'utils/apollo'
import protectedRoutes from 'utils/protected-routes'

import Figure from '../components/Figure'

export default function Test({ data }: any) {
  const [figures, setFigures] = useState(
    data.albums.data[0].attributes.figures.data
  )
  const [figurePerPage, setFigurePerPage] = useState(1)
  const [currentPage, setCurrentPage] = useState(0)

  const pages = Math.ceil(figures.length / figurePerPage)
  const startIndex = currentPage * figurePerPage
  const endIndex = startIndex + figurePerPage
  const currentFigure = figures.slice(startIndex, endIndex)

  console.log(data)

  return (
    <>
      <div>
        {Array.from(Array(pages), (figure, index) => {
          return (
            <button
              key={index}
              value={index}
              onClick={(e) => setCurrentPage(Number(e.target.value))}
            >
              {index + 1}
            </button>
          )
        })}
      </div>

      {currentFigure.map((figure) => {
        return (
          <Figure
            key={figure.attributes.player.data.attributes.cpf}
            name={figure.attributes.player.data.attributes.name}
            photo={`${process.env.NEXT_PUBLIC_API_URL}${figure.attributes.player.data.attributes.photo.data[0].attributes.url}`}
            alt={
              figure.attributes.player.data.attributes.photo.data[0].attributes
                .alternativeText || ''
            }
            birth_date={figure.attributes.player.data.attributes.birth_date}
            height={figure.attributes.player.data.attributes.heigth}
            weight={figure.attributes.player.data.attributes.weight}
            nation={
              figure.attributes.player.data.attributes.nation.data.attributes
                .name
            }
            position={
              figure.attributes.player.data.attributes.position.data.attributes
                .name
            }
            cpf={figure.attributes.player.data.attributes.cpf}
          />
        )
      })}
    </>
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
