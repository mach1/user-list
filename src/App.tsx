import React from 'react'
import { ThemeProvider } from '@emotion/react'
import styled from '@emotion/styled'
import AccountUsers from './AccountUsers/AccountUsers'
import Globals from './ui/Globals'

const theme = {
  colors: {
    primaryBackground: '#EDF2F7',
    border: '#e2e8f0',
    primaryText: '#1A202C',
    secondaryText: '#A0AEC0',
    primary: '#475DE5',
    secondary: '#fff',
  },
  spacing: {
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  fontSize: {
    sm: 12,
    md: 14,
    lg: 16,
    xl: 18,
  },
  borderRadius: {
    sm: 4,
    md: 8,
  },
}

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
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  display: flex;
  justify-content: center;
`

export default App
