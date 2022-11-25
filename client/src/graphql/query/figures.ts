import { gql } from '@apollo/client'

export const QUERY_FIGURES = gql`
  fragment FigureFragment on Figure {
    cpf
    player {
      data {
        attributes {
          name
          photo {
            data {
              attributes {
                alternativeText
                url
              }
            }
          }
          birth_date
          heigth
          weight
          nation {
            data {
              attributes {
                name
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
          cpf
        }
      }
    }
  }

  query QueryFigures($pagination: PaginationArg, $filters: FigureFiltersInput) {
    figures(pagination: $pagination, filters: $filters) {
      data {
        attributes {
          ...FigureFragment
        }
      }
    }
  }
`
