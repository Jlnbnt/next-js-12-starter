import { useEffect, useMemo, useState } from 'react'

import { PaletteMode } from '@mui/material'

import { createTheme } from '@mui/material/styles'

import { getDesign } from '../helpers/get-design.helper'
import { getInitialThemeMode } from '../helpers/get-initial-theme-mode.helper'

export const useMuiTheme = () => {
  const [mode, setMode] = useState<PaletteMode>(getInitialThemeMode())

  const toggleThemeMode = () =>
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))

  useEffect(() => {
    localStorage.setItem('themeMode', mode)
  }, [mode])

  const theme = useMemo(() => createTheme(getDesign(mode)), [mode])

  return {
    theme,
    mode,
    toggleThemeMode,
  }
}
