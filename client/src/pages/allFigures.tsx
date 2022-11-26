import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { QUERY_GET_ALL_FIGURES } from 'graphql/query/getAllFigures'

import { Base } from 'templates/Base'

import Figure from 'components/Figure'

export default function AllFigures() {
  const { data } = useQuery(QUERY_GET_ALL_FIGURES)
  const [figures, setFigures] = useState(data.figures.data || [])
  const [figurePerPage, setFigurePerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(0)
  const pages = Math.ceil(figures.length / figurePerPage)
  const startIndex = currentPage * figurePerPage
  const endIndex = startIndex + figurePerPage
  const currentFigure = figures.slice(startIndex, endIndex)

  return (
    <Base>
      <h1
        style={{
          fontSize: '26px',
          textAlign: 'center',
          margin: '20px 0'
        }}
      >
        Todas as figurinhas - Copa Hackathon 2022
      </h1>

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
        {currentFigure?.map((figure) => (
          <Figure
            key={figure.attributes.cpf}
            name={figure.attributes.player.data.attributes.name}
            photo={
              figure.attributes.player.data.attributes.photo?.data[0]
                ?.attributes?.url
            }
            position={
              figure.attributes.player.data.attributes.position.data.attributes
                .name
            }
          />
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '5px'
        }}
      >
        {pages &&
          Array.from(Array(pages), (figure, index) => {
            return (
              <button
                style={{
                  padding: '10px 20px'
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

      {/* {data.figures.data[0].map((figure: any) => (
        <Figure
          key={figure.attributes.cpf}
          name={figure.attributes.player.data.attributes.name}
          photo={
            figure.attributes.player.data.attributes.photo.data[0].attributes
              .url
          }
          position={
            figure.attributes.player.data.attributes.position.data.attributes
              .name
          }
        />
      ))} */}
    </Base>
  )
}
