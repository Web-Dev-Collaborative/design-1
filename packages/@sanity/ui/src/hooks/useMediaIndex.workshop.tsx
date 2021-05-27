import {Card, Stack, Text, useMediaIndex} from '@sanity/ui'
import {defineScope} from '@sanity/ui-workshop'
import React from 'react'

export default defineScope('hooks/use-media-index', 'useMediaIndex', [
  {name: 'test', title: 'Test', component: TestStory},
])

function TestStory() {
  const mediaIndex = useMediaIndex()

  return (
    <Card padding={[3, 4, 5]}>
      <Stack space={2}>
        <Text weight="semibold">The current media index is {mediaIndex}.</Text>
        <Text muted>Try resizing the browser.</Text>
      </Stack>
    </Card>
  )
}
