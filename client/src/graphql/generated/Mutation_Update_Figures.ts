/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AlbumInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: Mutation_Update_Figures
// ====================================================

export interface Mutation_Update_Figures_updateAlbum_data {
  __typename: "AlbumEntity";
  id: string | null;
}

export interface Mutation_Update_Figures_updateAlbum {
  __typename: "AlbumEntityResponse";
  data: Mutation_Update_Figures_updateAlbum_data | null;
}

export interface Mutation_Update_Figures {
  updateAlbum: Mutation_Update_Figures_updateAlbum | null;
}

export interface Mutation_Update_FiguresVariables {
  id: string;
  data: AlbumInput;
}
