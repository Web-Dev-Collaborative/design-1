import {Box, Text, TextInput} from '@sanity/ui'
import React from 'react'
import {NumberPropSchema} from '../types'
import {useScope} from '../useScope'

export function NumberProp(props: {schema: NumberPropSchema; value?: string}) {
  const {schema, value = ''} = props
  const {setPropValue} = useScope()

  return (
    <Box padding={3}>
      <Text size={1} weight="semibold">
        {schema.name}
      </Text>
      <Box marginTop={2}>
        <TextInput
          fontSize={1}
          onChange={(event) => setPropValue(schema.name, Number(event.currentTarget.value))}
          padding={2}
          value={value}
        />
      </Box>
    </Box>
  )
}
