  import { Box, ThemeProvider, useTheme } from '@mui/material'
  import React from 'react'

  const LogoHolder = (props) => {
      const {width, height} = props;
  const theme = useTheme();

    return (
    
        <Box
          sx={{
            width: width ? width : 100,
            height: height ? height : 100,
            borderRadius: 1,
            backgroundColor: theme.palette.primary.main,
            '&:hover': {
              background: theme.palette.primary.dark,
            },
          }}
        />

    )
  }

  export default LogoHolder