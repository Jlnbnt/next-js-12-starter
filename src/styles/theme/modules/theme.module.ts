/* eslint-disable @typescript-eslint/no-empty-interface */
import { CustomBreakpointOptions } from '../options/breakpoints.option'
import {
  CustomComponentColors,
  CustomPaletteColorOptions,
} from '../options/palette.option'
import {
  CustomTypographyOptions,
  CustomTypographyVariantOptions,
} from '../options/typography.option'

/**
 * Allow configuration using `createTheme`
 */
declare module '@mui/material/styles' {
  /**
   * Add the customColors to the default MUI Palette
   */
  interface PaletteOptions extends CustomPaletteColorOptions {}

  /**
   * Add the customColors as a customVariant to the default Typography component's variants
   */
  interface TypographyVariantsOptions extends CustomTypographyVariantOptions {}
}

declare module '@mui/material' {
  /**
   * Add the customBreakpoints to the default MUI Breakpoints
   */
  interface BreakpointOverrides extends CustomBreakpointOptions {}

  /**
   * Add the customColors to the Icons Components
   */
  interface SvgIconPropsColorOverrides extends CustomComponentColors {}

  /**
   * Add the customColors to the Button Component
   */
  interface ButtonPropsColorOverrides extends CustomComponentColors {}

  /**
   * Add the customColors to the TextField Component
   */
  interface TextFieldPropsColorOverrides extends CustomComponentColors {}

  /**
   * Add the customColors to the TextField Component
   */
  interface TextFieldPropsColorOverrides extends CustomComponentColors {}

  /**
   * Add the customColors to the IconButton Component
   */
  interface IconButtonPropsColorOverrides extends CustomComponentColors {}

  /**
   * Add the customColors as a customVariant to the Typography Component
   */
  interface TypographyPropsVariantOverrides extends CustomTypographyOptions {}
}
