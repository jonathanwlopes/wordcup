import { gql } from '@apollo/client'

export const QUERY_FIGURES = gql`
  fragment FigureFragment on Figure {
    cpf
  }

  query QueryFigures($pagination: PaginationArg) {
    figures(pagination: $pagination) {
      data {
        attributes {
          ...FigureFragment
        }
      }
    }
  }
`
