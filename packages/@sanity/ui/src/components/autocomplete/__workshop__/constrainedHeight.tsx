import {
  Autocomplete,
  BoundaryElementProvider,
  Box,
  Card,
  LayerProvider,
  Stack,
  Text,
} from '@sanity/ui'
import React, {useCallback, useState} from 'react'
import countries from '../__fixtures__/countries'
import {ExampleOption} from './types'

export default function ConstrainedHeightStory() {
  const [boundaryElement, setBoundaryElement] = useState<HTMLDivElement | null>(null)

  return (
    <Card height="fill" tone="transparent">
      <Card
        ref={setBoundaryElement}
        style={{position: 'absolute', top: 50, right: 50, bottom: 50, left: 50}}
      >
        <Box height="fill" overflow="auto" padding={[3, 4, 5]} sizing="border">
          <Stack space={5}>
            <BoundaryElementProvider element={boundaryElement}>
              <ConstrainedHeightExampleField id="example-1" label="Example 1" />
              <ConstrainedHeightExampleField id="example-2" label="Example 2" />
              <ConstrainedHeightExampleField id="example-3" label="Example 3" />
              <ConstrainedHeightExampleField id="example-4" label="Example 4" />
              <ConstrainedHeightExampleField id="example-5" label="Example 5" />
              <ConstrainedHeightExampleField id="example-6" label="Example 6" />
              <ConstrainedHeightExampleField id="example-7" label="Example 7" />
              <ConstrainedHeightExampleField id="example-8" label="Example 8" />
              <ConstrainedHeightExampleField id="example-9" label="Example 9" />
            </BoundaryElementProvider>
          </Stack>
        </Box>
      </Card>
    </Card>
  )
}

function ConstrainedHeightExampleField({id, label}: {id: string; label: string}) {
  const [value, setValue] = useState('')

  const renderOption = useCallback((option: ExampleOption) => {
    return (
      <Card
        as="a"
        data-qa={`option-${option.value}`}
        href="#"
        key={option.value}
        onClick={(event) => event.preventDefault()}
        padding={3}
      >
        <Text textOverflow="ellipsis">{option.title}</Text>
      </Card>
    )
  }, [])

  const renderValue = useCallback((currentValue: string, option?: ExampleOption) => {
    return option ? option.title : currentValue
  }, [])

  const filterOption = useCallback((query: string, option: ExampleOption) => {
    return option.title.toLowerCase().indexOf(query.toLowerCase()) > -1
  }, [])

  const options = countries.map((item) => ({value: item.code, title: item.name}))

  return (
    <Stack space={3}>
      <Text size={1} weight="medium">
        {label}
      </Text>
      <LayerProvider zOffset={100}>
        <Autocomplete
          filterOption={filterOption}
          id={id}
          onChange={setValue}
          openButton
          options={options}
          radius={1}
          renderOption={renderOption}
          renderValue={renderValue}
          value={value}
        />
      </LayerProvider>
    </Stack>
  )
}
