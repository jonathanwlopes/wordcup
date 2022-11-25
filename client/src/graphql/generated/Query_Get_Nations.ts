/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { NationFiltersInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: Query_Get_Nations
// ====================================================

export interface Query_Get_Nations_nations_data_attributes {
  __typename: "Nation";
  name: string;
}

export interface Query_Get_Nations_nations_data {
  __typename: "NationEntity";
  attributes: Query_Get_Nations_nations_data_attributes | null;
}

export interface Query_Get_Nations_nations {
  __typename: "NationEntityResponseCollection";
  data: Query_Get_Nations_nations_data[];
}

export interface Query_Get_Nations {
  nations: Query_Get_Nations_nations | null;
}

export interface Query_Get_NationsVariables {
  filters?: NationFiltersInput | null;
}
