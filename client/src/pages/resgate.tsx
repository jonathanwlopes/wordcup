import { useQuery } from '@apollo/client'
import { QUERY_FIGURES } from 'graphql/query/figures'
import { GetServerSidePropsContext } from 'next'
import { useState } from 'react'
import protectedRoutes from 'utils/protected-routes'
import { sortFigures } from 'utils/sortFigures'

export default function Resgate() {
  const [winFigures, setWinFigures] = useState([])

  const { data } = useQuery(QUERY_FIGURES)

  return (
    <>
      <button onClick={() => sortFigures(data)}>Ganhar Figurinhas</button>
    </>
  )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await protectedRoutes(ctx)

  return {
    props: { session }
  }
}
