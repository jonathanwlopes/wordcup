import { gql } from '@apollo/client'

export const MUTATION_UPDATE_FIGURES = gql`
  mutation Mutation_Update_Figures($id: ID!, $data: AlbumInput!) {
    updateAlbum(id: $id, data: $data) {
      data {
        id
      }
    }
  }
`
