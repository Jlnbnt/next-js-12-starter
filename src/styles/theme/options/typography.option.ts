import {
  TypographyOptions,
  TypographyStyleOptions,
} from '@mui/material/styles/createTypography'

import { colors } from './colors.option'

/**
 * Add CustomVariants to declare them as part of the default MUI Typography's variants
 */
export interface CustomTypographyVariantOptions {
  bold: TypographyStyleOptions
}

export interface CustomTypographyOptions {
  // Showed (CommonCustomColors are also shown)
  h1: true
  h2: true
  h3: true
  h4: true
  h5: true
  h6: true
  caption: true
  bold: true
  // Hidden
  body1: false
  body2: false
  button: false
  inherit: false
  overline: false
  subtitle1: false
  subtitle2: false
}

/**
 * Add CustomVariants to declare them as part of the default MUI components colors
 */
const customTypographyVariants: TypographyOptions = {
  bold: { fontWeight: 900 },
}

/**
 * Default Variants
 */
export const typographyConfig: TypographyOptions = {
  h1: { fontSize: '2rem' },
  h2: { fontSize: '1.8rem' },
  h3: { fontSize: '1.6rem' },
  h4: { fontSize: '1.4rem' },
  h5: { fontSize: '1.2rem' },
  h6: { fontSize: '1rem' },
  caption: { color: colors.lightGray },
  ...customTypographyVariants,
}
