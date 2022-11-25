/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PaginationArg } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryFigures
// ====================================================

export interface QueryFigures_figures_data_attributes {
  __typename: "Figure";
  cpf: any;
}

export interface QueryFigures_figures_data {
  __typename: "FigureEntity";
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
