import { gql } from 'apollo-server'
import { Resolvers } from './generated/graphql'

export const typeDefs = gql`
  enum Role {
    ACCOUNT_MANAGER
    ADMIN
    AGENT
    EXTERNAL_REVIEWER
  }

  type User {
    id: Int!
    name: String!
    email: String!
    avatar: String!
    role: Role!
  }

  type Query {
    users(offset: Int, limit: Int, filter: String, sortedBy: String, sortOrder: String): [User!]!
  }
`
export const resolvers: Resolvers = {
  Query: {
    users: (parent, args, ctx) => ctx.dataSources.usersProvider.getUsers(args)
  }
};