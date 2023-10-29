import { Box, Typography } from '@mui/material'

export default function IndexPage() {
  return (
    <Box
      component="main"
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h1">Next.js 12 Starter</Typography>
    </Box>
  )
}
