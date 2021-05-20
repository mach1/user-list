import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primaryBackground: string
      border: string
      primaryText: string
      secondaryText: string
      primary: string
      secondary: string
    }
    spacing: {
      sm: number
      md: number
      lg: number
      xl: number
    }
    fontSize: {
      sm: number
      md: number
      lg: number
      xl: number
    }
    borderRadius: {
      sm: number
      md: number
    }
  }
}
