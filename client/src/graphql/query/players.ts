import { gql } from '@apollo/client'

export const QUERY_PLAYERS = gql`
  query QueryPlayers {
    players {
      data {
        attributes {
          name
        }
      }
    }
  }
`
