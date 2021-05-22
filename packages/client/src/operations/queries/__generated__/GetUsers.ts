/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Role } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetUsers
// ====================================================

export interface GetUsers_getUsers {
  __typename: "User";
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: Role;
}

export interface GetUsers {
  getUsers: GetUsers_getUsers[];
}
