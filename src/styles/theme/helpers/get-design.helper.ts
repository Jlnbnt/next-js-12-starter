import { PaletteMode } from '@mui/material'

import { breakpointsConfig } from '../options/breakpoints.option'
import { componentsConfig } from '../options/components.option'
import {
  darkPaletteConfig,
  lightPaletteConfig,
} from '../options/palette.option'
import { typographyConfig } from '../options/typography.option'

/**
 * Retrieve the theme properties depending on the mode
 */
export const getDesign = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light' ? lightPaletteConfig : darkPaletteConfig),
  },
  breakpoints: breakpointsConfig,
  typography: typographyConfig,
  components: componentsConfig,
})
