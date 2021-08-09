import {Workshop, WorkshopLocation} from '@sanity/ui-workshop'
import Head from 'next/head'
import {useRouter} from 'next/router'
import React, {useCallback, useMemo} from 'react'
import {scopes} from 'workshop/scopes'
import {AppLayout, SEO, useApp} from '$components/app'
import {features, workshop} from '$config'
import {loadGlobalPageData} from '$lib/page'
import {isRecord} from '$lib/types'

export async function getServerSideProps(opts: {preview?: boolean; query: Record<string, string>}) {
  const {preview = features.preview, query} = opts
  const pageData = await loadGlobalPageData({preview})

  return {
    props: {
      ...pageData,
      title: query.title || '',
      description: query.description || '',
      preview,
    },
  }
}

function WorkshopPage() {
  const {colorScheme, data, setColorScheme} = useApp()
  const target = isRecord(data) && isRecord(data.target) && data.target
  const seo: Record<string, any> | null = isRecord(target) ? (target.seo as any) : null
  const {push: pushLocation, query, replace: replaceLocation} = useRouter()
  const location: WorkshopLocation = useMemo(
    () => ({path: query.path ? String(query.path) || '/' : '/'}),
    [query]
  )

  const handleLocationPush = useCallback(
    (loc: WorkshopLocation) => {
      pushLocation({pathname: '/workshop', query: {path: loc.path}})
    },
    [pushLocation]
  )

  const handleLocationReplace = useCallback(
    (loc: WorkshopLocation) => {
      replaceLocation({pathname: '/workshop', query: {path: loc.path}})
    },
    [replaceLocation]
  )

  return (
    <>
      <Head>
        <title>Workshop – Sanity UI</title>
      </Head>

      <SEO seo={seo} title={isRecord(target) && target.title} />

      <AppLayout>
        <Workshop
          {...workshop}
          location={location}
          onLocationPush={handleLocationPush}
          onLocationReplace={handleLocationReplace}
          scheme={colorScheme}
          scopes={scopes}
          setScheme={setColorScheme}
        />
      </AppLayout>
    </>
  )
}

export default WorkshopPage
