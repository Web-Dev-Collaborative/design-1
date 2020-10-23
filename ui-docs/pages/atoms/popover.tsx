import {AppLayout, CodeBlock} from '~/components'
import {Button, Card, Heading, Popover, Stack, Text, useClickOutside} from '@sanity/ui'
import Head from 'next/head'
import React, {useState} from 'react'

function PopoverPage() {
  const [open, setOpen] = useState(false)
  const [popoverElement, popoverRef] = useState(null)
  const [popoverButtonElement, popoverButtonRef] = useState(null)

  useClickOutside(() => setOpen(false), [popoverElement, popoverButtonElement])

  return (
    <>
      <Head>
        <title>Popover – Sanity UI</title>
      </Head>

      <AppLayout>
        <Stack space={[4, 4, 5, 6]}>
          <Heading as="h1" size={[2, 2, 3, 4]}>
            Popover
          </Heading>

          <Card padding={[3, 3, 4, 5]} radius={2} tone="transparent" style={{textAlign: 'center'}}>
            <Popover
              content={<Text size={[2, 2, 3, 4]}>Hello, world</Text>}
              padding={4}
              ref={popoverRef}
              open={open}
            >
              <Button
                onClick={() => setOpen(!open)}
                padding={[3, 3, 4]}
                ref={popoverButtonRef}
                size={[2, 2, 3, 4]}
              >
                Toggle popover
              </Button>
            </Popover>
          </Card>

          <CodeBlock>{`<Popover
  content={<Text>Hello, world</Text>}
  padding={4}
  open={open}
>
  <Button
    onClick={() => setOpen(!open)}
  >Toggle popover</Button>
</Popover>`}</CodeBlock>
        </Stack>
      </AppLayout>
    </>
  )
}

export default PopoverPage