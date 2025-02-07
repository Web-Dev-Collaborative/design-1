import {
  BoundaryElementProvider,
  Flex,
  PortalProvider,
  studioTheme,
  ThemeProvider,
  usePrefersDark,
} from '@sanity/ui'
import {AxeResults} from 'axe-core'
import React, {useCallback, useEffect, useMemo, useReducer, useState} from 'react'
import {propsReducer} from '../props/reducer'
import {PropSchema, WorkshopLocation, WorkshopScope} from '../types'
import {useFrame} from './useFrame'
import {WorkshopNavbar} from './workshopNavbar'
import {WorkshopProvider} from './workshopProvider'
import {WorkshopStoryCanvas} from './workshopStoryCanvas'
import {WorkshopStoryInspector} from './workshopStoryInspector'
import {WorkshopStoryNav} from './workshopStoryNav'

export interface WorkshopProps {
  collections?: {name: string; title: string}[]
  frameUrl: string
  location: WorkshopLocation
  onLocationPush: (loc: WorkshopLocation) => void
  onLocationReplace: (loc: WorkshopLocation) => void
  scopes: WorkshopScope[]
  title: string
}

function _sortScopes(a: WorkshopScope, b: WorkshopScope) {
  if (a.name < b.name) return -1
  if (a.name > b.name) return 1

  return 0
}

export function Workshop(_props: WorkshopProps): React.ReactElement {
  const {
    collections,
    frameUrl,
    location,
    onLocationPush,
    onLocationReplace,
    scopes: scopesProp,
    title,
  } = _props
  const {postMessage, ready, ref: frameRef, subscribe} = useFrame()
  const [props, dispatch] = useReducer(propsReducer, [])
  const [axeResults, setAxeResults] = useState<AxeResults | null>(null)
  const [viewport, setViewport] = useState<number | 'auto'>('auto')
  const [zoom, setZoom] = useState(1)
  const prefersDark = usePrefersDark()
  const [scheme, setScheme] = useState<'light' | 'dark'>(prefersDark ? 'dark' : 'light')
  const [boundaryElement, setBoundaryElement] = useState<HTMLDivElement | null>(null)
  const [portalElement, setPortalElement] = useState<HTMLDivElement | null>(null)
  const scopes = useMemo(() => scopesProp.sort(_sortScopes), [scopesProp])

  const registerProp = useCallback((PropSchema: PropSchema) => {
    dispatch({type: 'registerProp', PropSchema})
  }, [])

  const unregisterProp = useCallback((PropName: string) => {
    dispatch({type: 'unregisterProp', PropName})
  }, [])

  const setPropValue = useCallback(
    (PropName: string, value: any) => {
      dispatch({type: 'setPropValue', PropName, value})
      postMessage({type: 'workshop/setPropValue', PropName, value})
    },
    [postMessage]
  )

  const _handleMsg = useCallback(
    (msg: Record<string, unknown>) => {
      if (typeof msg.type === 'string' && msg.type.startsWith('workshop/')) {
        if (msg.type === 'workshop/frame/axe/results') {
          setAxeResults(msg.results as any)
        }

        if (msg.type === 'workshop/frame/registerProp') {
          registerProp(msg.PropSchema as any)
        }

        if (msg.type === 'workshop/frame/setPropValue') {
          setPropValue(msg.PropName as string, msg.value)
        }

        if (msg.type === 'workshop/frame/unregisterProp') {
          unregisterProp(msg.PropName as any)
        }
      }
    },
    [registerProp, setPropValue, unregisterProp]
  )

  useEffect(() => {
    postMessage({type: 'workshop/setLocation', path: location.path, scheme, zoom})
  }, [location.path, postMessage, scheme, zoom])

  useEffect(() => {
    return subscribe((msg) => {
      if (typeof msg.type === 'string' && msg.type === 'queue') {
        const queue: any = msg.queue

        for (const _msg of queue) {
          _handleMsg(_msg)
        }
      } else {
        _handleMsg(msg)
      }
    })
  }, [_handleMsg, subscribe])

  return (
    <BoundaryElementProvider element={boundaryElement}>
      <PortalProvider element={portalElement}>
        <ThemeProvider scheme={scheme} theme={studioTheme}>
          <WorkshopProvider
            frameUrl={frameUrl}
            location={location}
            onLocationPush={onLocationPush}
            onLocationReplace={onLocationReplace}
            scopes={scopes}
            props={props}
            registerProp={registerProp}
            setPropValue={setPropValue}
            title={title}
            unregisterProp={unregisterProp}
          >
            <Flex direction="column" height="fill" ref={setBoundaryElement}>
              <WorkshopNavbar
                scheme={scheme}
                setScheme={setScheme}
                setViewport={setViewport}
                setZoom={setZoom}
                viewport={viewport}
                zoom={zoom}
              />
              <Flex flex={1}>
                <WorkshopStoryNav collections={collections} />
                <WorkshopStoryCanvas
                  frameRef={frameRef}
                  ready={ready}
                  scheme={scheme}
                  viewport={viewport}
                />
                <WorkshopStoryInspector axeResults={axeResults} />
              </Flex>
            </Flex>
            <div data-portal="" ref={setPortalElement} />
          </WorkshopProvider>
        </ThemeProvider>
      </PortalProvider>
    </BoundaryElementProvider>
  )
}
