import { useQuery } from '@apollo/client'
import { QUERY_GET_ALL_FIGURES } from 'graphql/query/getAllFigures'

import { Base } from 'templates/Base'

import Figure from 'components/Figure'

export default function AllFigures() {
  const { data } = useQuery(QUERY_GET_ALL_FIGURES)

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
          margin: '0 auto'
        }}
      >
        {data &&
          data.figures.data.map(
            (figure) => (
              console.log(figure),
              (
                <Figure
                  key={figure.attributes.cpf}
                  name={figure.attributes.player.data.attributes.name}
                  photo={
                    figure.attributes.player.data.attributes.photo?.data[0]
                      ?.attributes?.url
                  }
                  position={
                    figure.attributes.player.data.attributes.position.data
                      .attributes.name
                  }
                />
              )
            )
          )}
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
