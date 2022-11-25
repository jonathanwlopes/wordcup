/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryPlayers
// ====================================================

export interface QueryPlayers_players_data_attributes {
  __typename: "Player";
  name: string;
}

export interface QueryPlayers_players_data {
  __typename: "PlayerEntity";
  attributes: QueryPlayers_players_data_attributes | null;
}

export interface QueryPlayers_players {
  __typename: "PlayerEntityResponseCollection";
  data: QueryPlayers_players_data[];
}

export interface QueryPlayers {
  players: QueryPlayers_players | null;
}
