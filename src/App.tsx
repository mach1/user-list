import React from 'react'
import { ThemeProvider } from '@emotion/react'
import styled from '@emotion/styled'
import AccountUsers from './AccountUsers/AccountUsers'
import Globals from './ui/Globals'
import theme from './ui/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Globals />
      <Root>
        <AccountUsers />
      </Root>
    </ThemeProvider>
  )
}

const Root = styled.main`
  background-color: ${({ theme }) => theme.colors.gray20};
  display: flex;
  justify-content: center;
`

export default App
