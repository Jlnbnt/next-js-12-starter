import { BreakpointsOptions } from '@mui/material'

/**
 * Add CustomBreakpoints to declare them as part of the default MUI breakpoints
 */
export interface CustomBreakpointOptions {
  mobile: true
  tablet: true
  laptop: true
  md: false
  xs: false
  sm: false
  lg: false
  xl: false
}

/**
 * Default Breakpoints
 */
export const breakpointsConfig: BreakpointsOptions = {
  values: { mobile: 0, tablet: 1024, laptop: 1440 },
}
