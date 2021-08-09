import {studioTheme, ThemeColorSchemeKey, ThemeProvider} from '@sanity/ui'
import {WorkshopFrame} from '@sanity/ui-workshop'
import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import Refractor from 'react-refractor'
import javascript from 'refractor/lang/javascript'
import json from 'refractor/lang/json'
import jsx from 'refractor/lang/jsx'
import typescript from 'refractor/lang/typescript'
import {scopes} from '$workshop'

Refractor.registerLanguage(javascript)
Refractor.registerLanguage(json)
Refractor.registerLanguage(jsx)
Refractor.registerLanguage(typescript)

ReactDOM.render(<Root />, document.getElementById('root'))

function Root() {
  const [scheme, setScheme] = useState<ThemeColorSchemeKey>('light')

  return (
    <ThemeProvider scheme={scheme} theme={studioTheme}>
      <WorkshopFrame frameUrl="/frame/" setScheme={setScheme} scopes={scopes} title="Sanity UI" />,
    </ThemeProvider>
  )
}
