import {Box, Label, Stack, Text} from '@sanity/ui'
import Link from 'next/link'
import {useRouter} from 'next/router'
import React from 'react'
import styled from 'styled-components'
import {atomRoutes, componentRoutes, hookRoutes, utilRoutes} from '~/routes'

const Root = styled(Box)`
  overflow: auto;
  height: 100vh;
  position: sticky;
  top: 0;
`

function NavLink(props: {children: React.ReactNode; href: string}) {
  const router = useRouter()

  if (props.href === router.asPath) {
    return <>{props.children}</>
  }

  return (
    <Link href={props.href}>
      <a>{props.children}</a>
    </Link>
  )
}

function ResourcesPageHeaderLink({children, href}: {children: React.ReactNode; href: string}) {
  return (
    <Text as="li" size={[2, 2, 3]}>
      <NavLink href={href}>{children}</NavLink>
    </Text>
  )
}

export function ResourcesPageHeader() {
  return (
    <Root data-name="ResourcesPageHeader" forwardedAs="header">
      <Box as="nav" padding={[3, 4, 5]}>
        <Stack space={[5, 5, 6]}>
          <Stack space={[3, 3, 4]}>
            <Stack as="ul" space={[3, 3, 4]}>
              <ResourcesPageHeaderLink href="/resources">Introduction</ResourcesPageHeaderLink>
              <ResourcesPageHeaderLink href="/resources/colors">Colors</ResourcesPageHeaderLink>
              <ResourcesPageHeaderLink href="/resources/icons">Icons</ResourcesPageHeaderLink>
              <ResourcesPageHeaderLink href="/resources/logo">Logo</ResourcesPageHeaderLink>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Root>
  )
}