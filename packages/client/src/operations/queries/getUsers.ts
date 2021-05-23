import { gql } from '@apollo/client'

export const GET_USERS = gql`
  query GetUsers($filter: String, $offset: Int, $limit: Int) {
    users(filter: $filter, offset: $offset, limit: $limit) {
      id
      name
      email
      avatar
      role
    }
  }
`
