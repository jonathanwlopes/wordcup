import { useQuery } from '@apollo/client'
import { QUERY_FIGURES } from 'graphql/query/figures'
import { useEffect, useState } from 'react'

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(0)
  const [figures, setFigures] = useState([]) as any

  const { data, fetchMore } = useQuery(QUERY_FIGURES, {
    variables: {
      pagination: {
        limit: 2
      }
    }
  })

  useEffect(() => {
    setFigures(data?.figures.data)
  }, [data])

  const handleShowMore = (value: any) => {
    console.log({ value })
    fetchMore({
      variables: {
        pagination: {
          limit: 2,
          start: currentPage
        }
      }
    }).then((r) => {
      setFigures((s: any) => [...r.data.figures.data])
      setCurrentPage(value)
    })
  }

  return (
    <>
      <h1>Paginação</h1>
      {Array.from(Array(5), (item, idx) => (
        <button
          key={idx}
          value={idx}
          onClick={(e) =>
            handleShowMore(Number((e.target as HTMLInputElement).value))
          }
        >
          {idx}
        </button>
      ))}
      <button onClick={() => handleShowMore(currentPage + 2)}>Show More</button>
      <h1>Items</h1>
      {figures &&
        figures.map((item, idx) => <p key={idx}>{item.attributes.cpf}</p>)}
    </>
  )
}
