import { gql } from '@apollo/client'

export const MUTATION_CREATE_ALBUM = gql`
  mutation CREATE_ALBUM($data: AlbumInput!) {
    createAlbum(data: $data) {
      data {
        attributes {
          nation {
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
`
