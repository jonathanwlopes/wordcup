import { gql } from '@apollo/client'

export const QUERY_GET_NATIONS = gql`
  query Query_Get_Nations($filters: NationFiltersInput) {
    nations(filters: $filters) {
      data {
        attributes {
          bg {
            data {
              attributes {
                url
              }
            }
          }
          name
        }
      }
    }
  }
`
