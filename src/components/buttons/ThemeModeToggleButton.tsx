import { useThemeContext } from '@/styles/theme/context/MuiThemeContext'

import { Brightness4, Brightness7 } from '@mui/icons-material'
import { IconButton } from '@mui/material'

export const ToggleThemeModeButton = () => {
  const { mode, toggleThemeMode } = useThemeContext()

  return (
    <IconButton onClick={toggleThemeMode}>
      {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  )
}
