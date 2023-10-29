import Link from 'next/link'
import { ReactNode, useEffect, useState } from 'react'

import { MuiThemeProvider } from '@/styles/theme/context/MuiThemeContext'

import {
  Checklist,
  Home,
  Logout,
  Menu,
  Settings,
  Star,
  Support,
} from '@mui/icons-material'
import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material'

import { ToggleThemeModeButton } from '../buttons/ThemeModeToggleButton'
import { FullPageLoader } from '../loaders/FullPageLoader'

const LINKS = [
  { text: 'Home', href: '/homepage', icon: Home },
  { text: 'Starred', href: '/', icon: Star },
  { text: 'Tasks', href: '/', icon: Checklist },
]

const PLACEHOLDER_LINKS = [
  { text: 'Settings', icon: Settings },
  { text: 'Support', icon: Support },
  { text: 'Logout', icon: Logout },
]

interface LayoutProps {
  children: ReactNode
}
export const Layout = ({ children }: LayoutProps) => {
  const [isAppMounted, setIsAppMounted] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const handleOnDrawerClose = () => {
    setIsDrawerOpen(false)
  }

  useEffect(() => {
    setIsAppMounted(true)
  }, [])

  return (
    <>
      {!isAppMounted ? (
        <FullPageLoader />
      ) : (
        <MuiThemeProvider>
          <AppBar>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
              <IconButton onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
                <Menu />
              </IconButton>

              <ToggleThemeModeButton />
            </Toolbar>
          </AppBar>

          <Drawer open={isDrawerOpen} onClose={handleOnDrawerClose}>
            <Divider />
            <List>
              {LINKS.map(({ text, href, icon: Icon }) => (
                <Link key={href} href={href} passHref>
                  <ListItem disablePadding onClick={handleOnDrawerClose}>
                    <ListItemButton href={href}>
                      <ListItemIcon>
                        <Icon />
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                </Link>
              ))}
            </List>
            <Divider sx={{ mt: 'auto' }} />
            <List>
              {PLACEHOLDER_LINKS.map(({ text, icon: Icon }) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Icon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>

          {children}
        </MuiThemeProvider>
      )}
    </>
  )
}
