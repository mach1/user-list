import React from 'react'
import { ThemeProvider } from '@emotion/react'
import styled from '@emotion/styled'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { offsetLimitPagination } from '@apollo/client/utilities'

import AccountUsers from './AccountUsers/AccountUsers'
import Globals from './ui/Globals'
import theme from './ui/theme'

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        users: offsetLimitPagination(['filter']),
      },
    },
  },
})

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache,
})

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Globals />
        <Root>
          <AccountUsers />
        </Root>
      </ThemeProvider>
    </ApolloProvider>
  )
}

const Root = styled.main`
  background-color: ${({ theme }) => theme.colors.gray20};
  display: flex;
  justify-content: center;
  min-height: 100vh;
`

export default App
