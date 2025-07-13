import { Box, ThemeProvider } from '@mui/material'
import React from 'react'

const LogoHolder = (props) => {
    const {width, height} = props;

  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: '#eeeeee',
            dark: '#dddddd',
          },
        },
      }}
    >
      <Box
        sx={{
          width: width ? width : 100,
          height: height ? height : 100,
          borderRadius: 1,
          bgcolor: 'primary.main',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
      />
    </ThemeProvider>
  )
}

export default LogoHolder