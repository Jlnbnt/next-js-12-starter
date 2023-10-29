import { ThemeOptions } from '@mui/material/styles'

import { APP_BAR_HEIGHT, WIDE_DRAWER_WIDTH } from './constants.option'

export const componentsConfig: ThemeOptions['components'] = {
  MuiAppBar: {
    styleOverrides: {
      root: {
        height: APP_BAR_HEIGHT,
        zIndex: 2000,
        position: 'fixed',
      },
    },
    defaultProps: {
      position: 'static',
      color: 'default',
    },
  },
  MuiDrawer: {
    styleOverrides: {
      paper: {
        width: WIDE_DRAWER_WIDTH,
        top: APP_BAR_HEIGHT,
        height: 'auto',
        bottom: 0,
      },
    },
  },
}
