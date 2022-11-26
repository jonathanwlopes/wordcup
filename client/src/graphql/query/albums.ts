import { gql } from '@apollo/client'

export const QUERY_ALBUMS = gql`
  query Query_Albums($filters: AlbumFiltersInput) {
    albums(filters: $filters) {
      data {
        attributes {
          nation {
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
                players {
                  data {
                    attributes {
                      name
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
          figures {
            data {
              attributes {
                player {
                  data {
                    attributes {
                      name
                      photo {
                        data {
                          attributes {
                            url
                            alternativeText
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
            }
          }
        }
      }
    }
  }
`
