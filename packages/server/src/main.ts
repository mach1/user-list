import { ApolloServer } from 'apollo-server'

import { typeDefs, resolvers } from './resolver'
import { UsersProvider } from './provider'

export interface Context {
  dataSources: {
    usersProvider: UsersProvider
  };
}

const dataSources = (): Context['dataSources'] => {
  return {
    usersProvider: new UsersProvider()
  };
};

const server = new ApolloServer({ typeDefs, resolvers, dataSources })

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})