import {Icon, UsersIcon} from '@sanity/icons'
import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  Select,
  Switch,
  Text,
} from '@sanity/ui'
import React from 'react'
import {useLocation} from '../../../lib/location'
import {useApp} from '../../hooks'
import {Search} from './search'

export function Navbar() {
  const {scheme, setScheme, setTheme, theme, themes} = useApp()
  const {handleLinkClick} = useLocation()

  return (
    <Card shadow={1} style={{position: 'sticky', zIndex: 2, top: 0}}>
      <Container width={3}>
        <Box paddingX={2} paddingY={4}>
          <Flex align="center">
            <Box padding={3}>
              <Button
                as="a"
                href="/"
                mode="bleed"
                onClick={handleLinkClick}
                text={<strong>Manage</strong>}
              />
            </Box>
            <Box flex={1}>
              <MenuButton
                button={
                  <Button icon={UsersIcon} iconRight="chevron-down" mode="ghost" text="Sanity.io" />
                }
                id="select-org"
                menu={
                  <Menu>
                    <MenuItem icon={UsersIcon} iconRight="checkmark" text="Sanity.io" />
                    <MenuItem icon={UsersIcon} text="GROQ" />
                    <MenuItem icon={UsersIcon} text="Portable Text" />
                  </Menu>
                }
              />
            </Box>
            <Box paddingX={2}>
              <Search />
            </Box>
            <Box paddingX={3} paddingY={2}>
              <Flex align="center">
                <Text>
                  <Icon symbol="sun" />
                </Text>
                <Box paddingX={3} style={{lineHeight: 0}}>
                  <Switch
                    checked={scheme === 'dark'}
                    onChange={(event) => setScheme(event.currentTarget.checked ? 'dark' : 'light')}
                  />
                </Box>
                <Text>
                  <Icon symbol="moon" />
                </Text>
              </Flex>
            </Box>
            <Box paddingX={2}>
              <Select onChange={(evt) => setTheme(evt.currentTarget.value)} value={theme}>
                {themes.map((t) => (
                  <option key={t.name} value={t.name}>
                    {t.name}
                  </option>
                ))}
              </Select>
            </Box>
            <Box paddingLeft={2}>
              <MenuButton
                button={<Avatar as="button" color="magenta" size={1} />}
                id="user-menu"
                menu={
                  <Menu>
                    <MenuItem text="Sign out" />
                  </Menu>
                }
              />
            </Box>
          </Flex>
        </Box>
      </Container>
    </Card>
  )
}
