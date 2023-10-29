import { Backdrop, CircularProgress } from '@mui/material'

export const FullPageLoader = () => {
  return (
    <Backdrop open={true} sx={{ backgroundColor: 'inherit' }}>
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}
