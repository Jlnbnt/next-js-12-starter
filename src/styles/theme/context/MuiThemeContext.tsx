import React, { FC, PropsWithChildren, createContext, useContext } from 'react'

import { VoidReturn } from '@/types/VoidReturn.type'

import { CssBaseline, PaletteMode, Theme } from '@mui/material'

import { ThemeProvider, createTheme } from '@mui/material/styles'

import { useMuiTheme } from '../hooks/useMuiTheme.hook'

interface MuiThemeContextType {
  theme: Theme
  mode: PaletteMode
  toggleThemeMode: VoidReturn
}

const MuiThemeContext = createContext<MuiThemeContextType>({
  theme: createTheme(),
  mode: 'light',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleThemeMode: () => {},
})

export const MuiThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const value = useMuiTheme()

  return (
    <MuiThemeContext.Provider value={value}>
      <ThemeProvider theme={value.theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </MuiThemeContext.Provider>
  )
}

export const useThemeContext = () => {
  return useContext(MuiThemeContext)
}
