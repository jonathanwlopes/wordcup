/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface AlbumFiltersInput {
  id?: IDFilterInput | null;
  figures?: FigureFiltersInput | null;
  user?: UsersPermissionsUserFiltersInput | null;
  nation?: NationFiltersInput | null;
  createdAt?: DateTimeFilterInput | null;
  updatedAt?: DateTimeFilterInput | null;
  and?: (AlbumFiltersInput | null)[] | null;
  or?: (AlbumFiltersInput | null)[] | null;
  not?: AlbumFiltersInput | null;
}

export interface AlbumInput {
  figures?: (string | null)[] | null;
  user?: string | null;
  nation?: string | null;
}

export interface BooleanFilterInput {
  and?: (boolean | null)[] | null;
  or?: (boolean | null)[] | null;
  not?: BooleanFilterInput | null;
  eq?: boolean | null;
  eqi?: boolean | null;
  ne?: boolean | null;
  startsWith?: boolean | null;
  endsWith?: boolean | null;
  contains?: boolean | null;
  notContains?: boolean | null;
  containsi?: boolean | null;
  notContainsi?: boolean | null;
  gt?: boolean | null;
  gte?: boolean | null;
  lt?: boolean | null;
  lte?: boolean | null;
  null?: boolean | null;
  notNull?: boolean | null;
  in?: (boolean | null)[] | null;
  notIn?: (boolean | null)[] | null;
  between?: (boolean | null)[] | null;
}

export interface DateFilterInput {
  and?: (any | null)[] | null;
  or?: (any | null)[] | null;
  not?: DateFilterInput | null;
  eq?: any | null;
  eqi?: any | null;
  ne?: any | null;
  startsWith?: any | null;
  endsWith?: any | null;
  contains?: any | null;
  notContains?: any | null;
  containsi?: any | null;
  notContainsi?: any | null;
  gt?: any | null;
  gte?: any | null;
  lt?: any | null;
  lte?: any | null;
  null?: boolean | null;
  notNull?: boolean | null;
  in?: (any | null)[] | null;
  notIn?: (any | null)[] | null;
  between?: (any | null)[] | null;
}

export interface DateTimeFilterInput {
  and?: (any | null)[] | null;
  or?: (any | null)[] | null;
  not?: DateTimeFilterInput | null;
  eq?: any | null;
  eqi?: any | null;
  ne?: any | null;
  startsWith?: any | null;
  endsWith?: any | null;
  contains?: any | null;
  notContains?: any | null;
  containsi?: any | null;
  notContainsi?: any | null;
  gt?: any | null;
  gte?: any | null;
  lt?: any | null;
  lte?: any | null;
  null?: boolean | null;
  notNull?: boolean | null;
  in?: (any | null)[] | null;
  notIn?: (any | null)[] | null;
  between?: (any | null)[] | null;
}

export interface FigureFiltersInput {
  id?: IDFilterInput | null;
  player?: PlayerFiltersInput | null;
  cpf?: LongFilterInput | null;
  users?: UsersPermissionsUserFiltersInput | null;
  createdAt?: DateTimeFilterInput | null;
  updatedAt?: DateTimeFilterInput | null;
  publishedAt?: DateTimeFilterInput | null;
  and?: (FigureFiltersInput | null)[] | null;
  or?: (FigureFiltersInput | null)[] | null;
  not?: FigureFiltersInput | null;
}

export interface IDFilterInput {
  and?: (string | null)[] | null;
  or?: (string | null)[] | null;
  not?: IDFilterInput | null;
  eq?: string | null;
  eqi?: string | null;
  ne?: string | null;
  startsWith?: string | null;
  endsWith?: string | null;
  contains?: string | null;
  notContains?: string | null;
  containsi?: string | null;
  notContainsi?: string | null;
  gt?: string | null;
  gte?: string | null;
  lt?: string | null;
  lte?: string | null;
  null?: boolean | null;
  notNull?: boolean | null;
  in?: (string | null)[] | null;
  notIn?: (string | null)[] | null;
  between?: (string | null)[] | null;
}

export interface LongFilterInput {
  and?: (any | null)[] | null;
  or?: (any | null)[] | null;
  not?: LongFilterInput | null;
  eq?: any | null;
  eqi?: any | null;
  ne?: any | null;
  startsWith?: any | null;
  endsWith?: any | null;
  contains?: any | null;
  notContains?: any | null;
  containsi?: any | null;
  notContainsi?: any | null;
  gt?: any | null;
  gte?: any | null;
  lt?: any | null;
  lte?: any | null;
  null?: boolean | null;
  notNull?: boolean | null;
  in?: (any | null)[] | null;
  notIn?: (any | null)[] | null;
  between?: (any | null)[] | null;
}

export interface NationFiltersInput {
  id?: IDFilterInput | null;
  name?: StringFilterInput | null;
  slug?: StringFilterInput | null;
  continent?: StringFilterInput | null;
  players?: PlayerFiltersInput | null;
  createdAt?: DateTimeFilterInput | null;
  updatedAt?: DateTimeFilterInput | null;
  publishedAt?: DateTimeFilterInput | null;
  and?: (NationFiltersInput | null)[] | null;
  or?: (NationFiltersInput | null)[] | null;
  not?: NationFiltersInput | null;
}

export interface PaginationArg {
  page?: number | null;
  pageSize?: number | null;
  start?: number | null;
  limit?: number | null;
}

export interface PlayerFiltersInput {
  id?: IDFilterInput | null;
  name?: StringFilterInput | null;
  birth_date?: DateFilterInput | null;
  heigth?: StringFilterInput | null;
  weight?: StringFilterInput | null;
  nation?: NationFiltersInput | null;
  position?: PositionFiltersInput | null;
  cpf?: LongFilterInput | null;
  createdAt?: DateTimeFilterInput | null;
  updatedAt?: DateTimeFilterInput | null;
  publishedAt?: DateTimeFilterInput | null;
  and?: (PlayerFiltersInput | null)[] | null;
  or?: (PlayerFiltersInput | null)[] | null;
  not?: PlayerFiltersInput | null;
}

export interface PositionFiltersInput {
  id?: IDFilterInput | null;
  name?: StringFilterInput | null;
  createdAt?: DateTimeFilterInput | null;
  updatedAt?: DateTimeFilterInput | null;
  publishedAt?: DateTimeFilterInput | null;
  and?: (PositionFiltersInput | null)[] | null;
  or?: (PositionFiltersInput | null)[] | null;
  not?: PositionFiltersInput | null;
}

export interface StringFilterInput {
  and?: (string | null)[] | null;
  or?: (string | null)[] | null;
  not?: StringFilterInput | null;
  eq?: string | null;
  eqi?: string | null;
  ne?: string | null;
  startsWith?: string | null;
  endsWith?: string | null;
  contains?: string | null;
  notContains?: string | null;
  containsi?: string | null;
  notContainsi?: string | null;
  gt?: string | null;
  gte?: string | null;
  lt?: string | null;
  lte?: string | null;
  null?: boolean | null;
  notNull?: boolean | null;
  in?: (string | null)[] | null;
  notIn?: (string | null)[] | null;
  between?: (string | null)[] | null;
}

export interface UsersPermissionsPermissionFiltersInput {
  id?: IDFilterInput | null;
  action?: StringFilterInput | null;
  role?: UsersPermissionsRoleFiltersInput | null;
  createdAt?: DateTimeFilterInput | null;
  updatedAt?: DateTimeFilterInput | null;
  and?: (UsersPermissionsPermissionFiltersInput | null)[] | null;
  or?: (UsersPermissionsPermissionFiltersInput | null)[] | null;
  not?: UsersPermissionsPermissionFiltersInput | null;
}

export interface UsersPermissionsRegisterInput {
  username: string;
  email: string;
  password: string;
}

export interface UsersPermissionsRoleFiltersInput {
  id?: IDFilterInput | null;
  name?: StringFilterInput | null;
  description?: StringFilterInput | null;
  type?: StringFilterInput | null;
  permissions?: UsersPermissionsPermissionFiltersInput | null;
  users?: UsersPermissionsUserFiltersInput | null;
  createdAt?: DateTimeFilterInput | null;
  updatedAt?: DateTimeFilterInput | null;
  and?: (UsersPermissionsRoleFiltersInput | null)[] | null;
  or?: (UsersPermissionsRoleFiltersInput | null)[] | null;
  not?: UsersPermissionsRoleFiltersInput | null;
}

export interface UsersPermissionsUserFiltersInput {
  id?: IDFilterInput | null;
  username?: StringFilterInput | null;
  email?: StringFilterInput | null;
  provider?: StringFilterInput | null;
  password?: StringFilterInput | null;
  resetPasswordToken?: StringFilterInput | null;
  confirmationToken?: StringFilterInput | null;
  confirmed?: BooleanFilterInput | null;
  blocked?: BooleanFilterInput | null;
  role?: UsersPermissionsRoleFiltersInput | null;
  createdAt?: DateTimeFilterInput | null;
  updatedAt?: DateTimeFilterInput | null;
  and?: (UsersPermissionsUserFiltersInput | null)[] | null;
  or?: (UsersPermissionsUserFiltersInput | null)[] | null;
  not?: UsersPermissionsUserFiltersInput | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
