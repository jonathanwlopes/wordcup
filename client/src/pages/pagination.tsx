import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { QUERY_GET_ALL_FIGURES } from 'graphql/query/getAllFigures'

import Figure from '../components/Figure'
import { Base } from 'templates/Base'

export default function AllFigures() {
  const { data } = useQuery(QUERY_GET_ALL_FIGURES)

  const [figures, setFigures] = useState(data?.figures.data)
  const [figurePerPage, setFigurePerPage] = useState(1)
  const [currentPage, setCurrentPage] = useState(0)

  const pages = Math.ceil(figures?.length / figurePerPage)
  const startIndex = currentPage * figurePerPage
  const endIndex = startIndex + figurePerPage
  const currentFigure = figures?.slice(startIndex, endIndex)

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

      <div>
        {pages &&
          Array.from(Array(pages), (figure, index) => {
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

      {currentFigure?.map((figure) => {
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
    </Base>
  )
}
