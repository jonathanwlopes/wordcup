import { gql } from '@apollo/client'

export const QUERY_FIGURES = gql`
  query QueryFigures($pagination: PaginationArg) {
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
