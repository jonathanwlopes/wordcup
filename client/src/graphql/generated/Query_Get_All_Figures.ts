/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PaginationArg } from "./globalTypes";

// ====================================================
// GraphQL query operation: Query_Get_All_Figures
// ====================================================

export interface Query_Get_All_Figures_figures_data_attributes_player_data_attributes_nation_data_attributes {
  __typename: "Nation";
  name: string;
}

export interface Query_Get_All_Figures_figures_data_attributes_player_data_attributes_nation_data {
  __typename: "NationEntity";
  attributes: Query_Get_All_Figures_figures_data_attributes_player_data_attributes_nation_data_attributes | null;
}

export interface Query_Get_All_Figures_figures_data_attributes_player_data_attributes_nation {
  __typename: "NationEntityResponse";
  data: Query_Get_All_Figures_figures_data_attributes_player_data_attributes_nation_data | null;
}

export interface Query_Get_All_Figures_figures_data_attributes_player_data_attributes_photo_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface Query_Get_All_Figures_figures_data_attributes_player_data_attributes_photo_data {
  __typename: "UploadFileEntity";
  attributes: Query_Get_All_Figures_figures_data_attributes_player_data_attributes_photo_data_attributes | null;
}

export interface Query_Get_All_Figures_figures_data_attributes_player_data_attributes_photo {
  __typename: "UploadFileRelationResponseCollection";
  data: Query_Get_All_Figures_figures_data_attributes_player_data_attributes_photo_data[];
}

export interface Query_Get_All_Figures_figures_data_attributes_player_data_attributes_position_data_attributes {
  __typename: "Position";
  name: string;
}

export interface Query_Get_All_Figures_figures_data_attributes_player_data_attributes_position_data {
  __typename: "PositionEntity";
  attributes: Query_Get_All_Figures_figures_data_attributes_player_data_attributes_position_data_attributes | null;
}

export interface Query_Get_All_Figures_figures_data_attributes_player_data_attributes_position {
  __typename: "PositionEntityResponse";
  data: Query_Get_All_Figures_figures_data_attributes_player_data_attributes_position_data | null;
}

export interface Query_Get_All_Figures_figures_data_attributes_player_data_attributes {
  __typename: "Player";
  name: string;
  nation: Query_Get_All_Figures_figures_data_attributes_player_data_attributes_nation | null;
  photo: Query_Get_All_Figures_figures_data_attributes_player_data_attributes_photo;
  position: Query_Get_All_Figures_figures_data_attributes_player_data_attributes_position | null;
}

export interface Query_Get_All_Figures_figures_data_attributes_player_data {
  __typename: "PlayerEntity";
  attributes: Query_Get_All_Figures_figures_data_attributes_player_data_attributes | null;
}

export interface Query_Get_All_Figures_figures_data_attributes_player {
  __typename: "PlayerEntityResponse";
  data: Query_Get_All_Figures_figures_data_attributes_player_data | null;
}

export interface Query_Get_All_Figures_figures_data_attributes {
  __typename: "Figure";
  cpf: any;
  player: Query_Get_All_Figures_figures_data_attributes_player | null;
}

export interface Query_Get_All_Figures_figures_data {
  __typename: "FigureEntity";
  id: string | null;
  attributes: Query_Get_All_Figures_figures_data_attributes | null;
}

export interface Query_Get_All_Figures_figures {
  __typename: "FigureEntityResponseCollection";
  data: Query_Get_All_Figures_figures_data[];
}

export interface Query_Get_All_Figures {
  figures: Query_Get_All_Figures_figures | null;
}

export interface Query_Get_All_FiguresVariables {
  pagination?: PaginationArg | null;
}
