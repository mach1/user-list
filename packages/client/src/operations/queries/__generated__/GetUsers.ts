/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Role } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetUsers
// ====================================================

export interface GetUsers_users {
  __typename: "User";
  id: number;
  name: string;
  email: string;
  avatar: string;
  role: Role;
}

export interface GetUsers {
  users: GetUsers_users[];
}

export interface GetUsersVariables {
  filter?: string | null;
  offset?: number | null;
  limit?: number | null;
  sortedBy?: string | null;
  sortOrder?: string | null;
}
