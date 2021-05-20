import React from 'react'
import { ThemeProvider } from '@emotion/react'
import styled from '@emotion/styled'

const theme = {
  colors: {
    background: '#E5E5E5',
  },
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Root></Root>
    </ThemeProvider>
  )
}

const Root = styled.main`
  background-color: ${({ theme }) => theme.colors.background};
`

export default App
