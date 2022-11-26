import { gql } from '@apollo/client'

export const QUERY_ALBUM_BY_USER = gql`
  query Query_Album_By_User($filters: AlbumFiltersInput) {
    albums(filters: $filters) {
      data {
        id
        attributes {
          figures {
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
      }
    }
  }
`
