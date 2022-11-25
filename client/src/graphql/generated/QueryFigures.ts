/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PaginationArg } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryFigures
// ====================================================

export interface QueryFigures_figures_data_attributes_player_data_attributes_nation_data_attributes {
  __typename: "Nation";
  name: string;
}

export interface QueryFigures_figures_data_attributes_player_data_attributes_nation_data {
  __typename: "NationEntity";
  attributes: QueryFigures_figures_data_attributes_player_data_attributes_nation_data_attributes | null;
}

export interface QueryFigures_figures_data_attributes_player_data_attributes_nation {
  __typename: "NationEntityResponse";
  data: QueryFigures_figures_data_attributes_player_data_attributes_nation_data | null;
}

export interface QueryFigures_figures_data_attributes_player_data_attributes_photo_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface QueryFigures_figures_data_attributes_player_data_attributes_photo_data {
  __typename: "UploadFileEntity";
  attributes: QueryFigures_figures_data_attributes_player_data_attributes_photo_data_attributes | null;
}

export interface QueryFigures_figures_data_attributes_player_data_attributes_photo {
  __typename: "UploadFileRelationResponseCollection";
  data: QueryFigures_figures_data_attributes_player_data_attributes_photo_data[];
}

export interface QueryFigures_figures_data_attributes_player_data_attributes_position_data_attributes {
  __typename: "Position";
  name: string;
}

export interface QueryFigures_figures_data_attributes_player_data_attributes_position_data {
  __typename: "PositionEntity";
  attributes: QueryFigures_figures_data_attributes_player_data_attributes_position_data_attributes | null;
}

export interface QueryFigures_figures_data_attributes_player_data_attributes_position {
  __typename: "PositionEntityResponse";
  data: QueryFigures_figures_data_attributes_player_data_attributes_position_data | null;
}

export interface QueryFigures_figures_data_attributes_player_data_attributes {
  __typename: "Player";
  name: string;
  nation: QueryFigures_figures_data_attributes_player_data_attributes_nation | null;
  photo: QueryFigures_figures_data_attributes_player_data_attributes_photo;
  position: QueryFigures_figures_data_attributes_player_data_attributes_position | null;
}

export interface QueryFigures_figures_data_attributes_player_data {
  __typename: "PlayerEntity";
  attributes: QueryFigures_figures_data_attributes_player_data_attributes | null;
}

export interface QueryFigures_figures_data_attributes_player {
  __typename: "PlayerEntityResponse";
  data: QueryFigures_figures_data_attributes_player_data | null;
}

export interface QueryFigures_figures_data_attributes {
  __typename: "Figure";
  cpf: any;
  player: QueryFigures_figures_data_attributes_player | null;
}

export interface QueryFigures_figures_data {
  __typename: "FigureEntity";
  id: string | null;
  attributes: QueryFigures_figures_data_attributes | null;
}

export interface QueryFigures_figures {
  __typename: "FigureEntityResponseCollection";
  data: QueryFigures_figures_data[];
}

export interface QueryFigures {
  figures: QueryFigures_figures | null;
}

export interface QueryFiguresVariables {
  pagination?: PaginationArg | null;
}
