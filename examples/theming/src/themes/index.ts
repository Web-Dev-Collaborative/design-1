import {RootTheme, studioTheme} from '@sanity/ui'
import {vercelTheme} from './vercel'

export const themes: {name: string; theme: RootTheme}[] = [
  {
    name: 'studio',
    theme: studioTheme,
  },
  {
    name: 'vercel',
    theme: vercelTheme,
  },
]
