import { gql } from '@apollo/client'

export const QUERY_FIGURES_BY_USER = gql`
  query Query_Figures_By_User($filters: FigureFiltersInput) {
    figures(filters: $filters) {
      data {
        id
        attributes {
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
