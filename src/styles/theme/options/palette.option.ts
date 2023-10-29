import { PaletteColorOptions, PaletteOptions } from '@mui/material'

import { colors } from './colors.option'

/*
 * Add CustomColors to declare them as part of the default MUI Palette
 */
export interface CustomPaletteColorOptions {
  white: PaletteColorOptions
  black: PaletteColorOptions
  pink: PaletteColorOptions
  skyBlue: PaletteColorOptions
  mintGreen: PaletteColorOptions
  peach: PaletteColorOptions
  lilac: PaletteColorOptions
  lemonYellow: PaletteColorOptions
  lightGray: PaletteColorOptions
  turquoise: PaletteColorOptions
  beige: PaletteColorOptions
}

/**
 * Add CustomColors to declare them as part of the default MUI components colors
 */
export interface CustomComponentColors {
  white: true
  black: true
  pink: true
  skyBlue: true
  mintGreen: true
  peach: true
  lilac: true
  lemonYellow: true
  lightGray: true
  turquoise: true
  beige: true
}

/**
 * CustomColors Palette ( common to both light & dark mode)
 */
export const customPaletteConfig: PaletteOptions = {
  white: {
    main: colors.white,
  },
  black: {
    main: colors.black,
  },
  pink: {
    main: colors.pink,
  },
  skyBlue: {
    main: colors.skyBlue,
  },
  mintGreen: {
    main: colors.mintGreen,
  },
  peach: {
    main: colors.peach,
  },
  lilac: {
    main: colors.lilac,
  },
  lemonYellow: {
    main: colors.lemonYellow,
  },
  lightGray: {
    main: colors.lightGray,
  },
  turquoise: {
    main: colors.turquoise,
  },
  beige: {
    main: colors.beige,
  },
}

/**
 * LightMode Palette
 */
export const lightPaletteConfig: PaletteOptions = {
  primary: {
    main: '#FFFFFF', // White for primary
  },
  secondary: {
    main: '#F5F5F5', // Light gray for secondary
  },
  error: {
    main: '#FFCDD2', // Light pink for error
  },
  success: {
    main: '#C8E6C9', // Light green for success
  },
  info: {
    main: '#BBDEFB', // Light blue for info
  },
  warning: {
    main: '#FFF9C4', // Light yellow for warning
  },
  background: {
    default: '#F5F5F5', // A slightly darker gray for the default background
  },
  divider: '#E0E0E0', // Light gray for dividers
  /* Custom Colors */
  ...customPaletteConfig,
}

/** DarkMode Palette */
export const darkPaletteConfig: PaletteOptions = {
  primary: {
    main: '#FFFFFF', // White for primary
  },
  secondary: {
    main: '#333333', // Dark gray for secondary
  },
  error: {
    main: '#FF0000', // Red for error
  },
  success: {
    main: '#00FF00', // Green for success
  },
  info: {
    main: '#0000FF', // Blue for info
  },
  warning: {
    main: '#FFD700', // Gold for warning
  },
  background: {
    default: '#121212', // Dark background
  },
  divider: '#424242', // Dark gray for dividers
  /* Custom Colors */
  ...customPaletteConfig,
}
