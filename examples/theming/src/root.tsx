import {Theme, ThemeColorProvider, ThemeProvider, usePrefersDark} from '@sanity/ui'
import React from 'react'
import {createGlobalStyle, css} from 'styled-components'
import {App} from './app'
import {themes} from './themes'

const GlobalStyle = createGlobalStyle((props: {theme: Theme}) => {
  const {theme} = props
  const {base} = theme.sanity.color

  return css`
    html,
    body,
    #root {
      height: 100%;
    }

    body {
      -webkit-font-smoothing: antialiased;
      background-color: ${base.bg};
      color: ${base.fg};
      margin: 0;
    }
  `
})

export function Root() {
  const prefersDark = usePrefersDark()
  const scheme = prefersDark ? 'dark' : 'light'
  const theme = themes[0]

  return (
    <ThemeProvider theme={theme.theme} scheme={scheme} tone="transparent">
      <ThemeColorProvider tone="transparent">
        <GlobalStyle />
      </ThemeColorProvider>
      <App />
    </ThemeProvider>
  )
}
