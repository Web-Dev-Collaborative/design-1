import {RootTheme} from '@sanity/ui'
import {createContext} from 'react'

export interface AppContextValue {
  scheme: 'dark' | 'light'
  setScheme: (scheme: 'dark' | 'light') => void
  setTheme: (name: string) => void
  theme: string
  themes: {name: string; theme: RootTheme}[]
}

export const AppContext = createContext<AppContextValue | null>(null)
