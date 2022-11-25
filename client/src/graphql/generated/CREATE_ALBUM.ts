/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AlbumInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CREATE_ALBUM
// ====================================================

export interface CREATE_ALBUM_createAlbum_data_attributes_nation_data_attributes {
  __typename: "Nation";
  name: string;
}

export interface CREATE_ALBUM_createAlbum_data_attributes_nation_data {
  __typename: "NationEntity";
  attributes: CREATE_ALBUM_createAlbum_data_attributes_nation_data_attributes | null;
}

export interface CREATE_ALBUM_createAlbum_data_attributes_nation {
  __typename: "NationEntityResponse";
  data: CREATE_ALBUM_createAlbum_data_attributes_nation_data | null;
}

export interface CREATE_ALBUM_createAlbum_data_attributes {
  __typename: "Album";
  nation: CREATE_ALBUM_createAlbum_data_attributes_nation | null;
}

export interface CREATE_ALBUM_createAlbum_data {
  __typename: "AlbumEntity";
  attributes: CREATE_ALBUM_createAlbum_data_attributes | null;
}

export interface CREATE_ALBUM_createAlbum {
  __typename: "AlbumEntityResponse";
  data: CREATE_ALBUM_createAlbum_data | null;
}

export interface CREATE_ALBUM {
  createAlbum: CREATE_ALBUM_createAlbum | null;
}

export interface CREATE_ALBUMVariables {
  data: AlbumInput;
}
