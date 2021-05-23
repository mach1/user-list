import { gql } from '@apollo/client'

export const GET_USERS = gql`
  query GetUsers($filter: String) {
    users(filter: $filter) {
      id
      name
      email
      avatar
      role
    }
  }
`
