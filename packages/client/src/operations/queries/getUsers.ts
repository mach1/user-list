import { gql } from '@apollo/client'

export const GET_USERS = gql`
  query GetUsers($filter: String, $offset: Int, $limit: Int, $sortedBy: String, $sortOrder: String) {
    users(filter: $filter, offset: $offset, limit: $limit, sortedBy: $sortedBy, sortOrder: $sortOrder) {
      id
      name
      email
      avatar
      role
    }
  }
`
