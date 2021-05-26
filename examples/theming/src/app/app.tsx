import {
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  Heading,
  Stack,
  Switch,
  Text,
  TextInput,
} from '@sanity/ui'
import React from 'react'

export function App() {
  return (
    <Card padding={[3, 4, 5]} style={{minHeight: '100%'}}>
      <Container width={3}>
        <Box marginY={5}>
          <Text size={1} weight="semibold">
            Header
          </Text>
          <Stack marginTop={3} space={3}>
            <Card border>
              <Heading size={4}>Heading 4</Heading>
            </Card>
            <Card border>
              <Heading size={3}>Heading 3</Heading>
            </Card>
            <Card border>
              <Heading>Heading 2</Heading>
            </Card>
            <Card border>
              <Heading size={1}>Heading 1</Heading>
            </Card>
            <Card border>
              <Heading size={0}>Heading 0</Heading>
            </Card>
          </Stack>
        </Box>

        <Box marginY={5}>
          <Text size={1} weight="semibold">
            Text
          </Text>
          <Stack marginTop={3} space={3}>
            <Card border>
              <Text size={5}>Text 5</Text>
            </Card>
            <Card border>
              <Text size={4}>Text 4</Text>
            </Card>
            <Card border>
              <Text size={3}>Text 3</Text>
            </Card>
            <Card border>
              <Text>Text 2</Text>
            </Card>
            <Card border>
              <Text size={1}>Text 1</Text>
            </Card>
            <Card border>
              <Text size={0}>Text 0</Text>
            </Card>
          </Stack>
        </Box>

        <Box marginY={5}>
          <Text size={1} weight="semibold">
            Card
          </Text>
          <Stack marginTop={3} space={3}>
            <Card border padding={2}>
              <Text>Default</Text>
            </Card>
            <Card border padding={2} tone="primary">
              <Text>Primary</Text>
            </Card>
            <Card border padding={2} tone="positive">
              <Text>Positive</Text>
            </Card>
            <Card border padding={2} tone="caution">
              <Text>Caution</Text>
            </Card>
            <Card border padding={2} tone="critical">
              <Text>Critical</Text>
            </Card>
          </Stack>
        </Box>

        <Box marginY={5}>
          <Text size={1} weight="semibold">
            Button
          </Text>
          <Stack marginTop={3} space={3}>
            <Button text="Default" />
            <Button text="Primary" tone="primary" />
            <Button text="Positive" tone="positive" />
            <Button text="Caution" tone="caution" />
            <Button text="Critical" tone="critical" />
          </Stack>
        </Box>

        <Box marginY={5}>
          <Text size={1} weight="semibold">
            Input
          </Text>
          <Stack marginTop={3} space={3}>
            <Box>
              <Switch />
            </Box>
            <Box>
              <Checkbox />
            </Box>
            <Box>
              <TextInput placeholder="Placeholder" />
            </Box>
          </Stack>
        </Box>
      </Container>
    </Card>
  )
}
