import { PaletteMode } from '@mui/material'

/**
 * Retrieve the default user's themeMode.
 */
export const getInitialThemeMode = (): PaletteMode => {
  if (typeof window !== 'undefined') {
    const storedThemeMode = localStorage.getItem('themeMode') as PaletteMode

    return storedThemeMode || 'light'
  }

  return 'light'
}
