import { ApolloServer, gql } from 'apollo-server'
import userData from './data/users.json'

const typeDefs = gql`
  enum Role {
    ACCOUNT_MANAGER
    ADMIN
    AGENT
    EXTERNAL_REVIEWER
  }

  type User {
    id: ID!
    name: String!
    email: String!
    avatar: String!
    role: Role!
  }

  type Query {
    getUsers: [User!]!
  }
`

const resolvers = {
  Query: {
    getUsers: () => userData.users.slice(0, 50)
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})