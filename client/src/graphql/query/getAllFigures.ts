import { gql } from '@apollo/client'

export const QUERY_GET_ALL_FIGURES = gql`
  query Query_Get_All_Figures($pagination: PaginationArg) {
    figures(pagination: $pagination) {
      data {
        id
        attributes {
          cpf
          player {
            data {
              attributes {
                name
                nation {
                  data {
                    attributes {
                      name
                    }
                  }
                }
                photo {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                position {
                  data {
                    attributes {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
