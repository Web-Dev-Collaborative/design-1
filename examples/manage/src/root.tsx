import {studioTheme, ThemeProvider} from '@sanity/ui'
import React, {useMemo, useState} from 'react'
import {App, AppContext, GlobalStyle} from './app'
import {LocationProvider} from './lib/location'
import {themes} from '$themes'

export function Root() {
  const [scheme, setScheme] = useState<'light' | 'dark'>('light')
  const [theme, setTheme] = useState<string>(themes[0].name)
  const app = useMemo(() => ({scheme, setScheme, setTheme, theme, themes}), [scheme, theme])

  return (
    <LocationProvider>
      <AppContext.Provider value={app}>
        <ThemeProvider
          scheme={scheme}
          theme={themes.find((t) => t.name === theme)?.theme || studioTheme}
        >
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </AppContext.Provider>
    </LocationProvider>
  )
}
