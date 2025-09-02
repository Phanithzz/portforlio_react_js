  import { Box, ThemeProvider, Typography, useTheme } from '@mui/material'
  import React, { Fragment, useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';

  const LogoHolder = (props) => {
  const {width, height, text, logo, paddings} = props;
  const theme = useTheme();
  const {isDark} = useContext(ThemeContext);

    return (
      <Box
        sx={{
          textAlign: 'center',
          // width: width || '100%',
          // height: height || '100%',
          borderRadius: 1,
          padding: paddings ?? '0.5rem',
          backgroundColor: isDark 
            ? theme.palette.primary.dark 
            : theme.palette.primary.main,
          '&:hover': {
            backgroundColor: isDark 
              ? theme.palette.primary.darker 
              : theme.palette.primary.darkGrey,
          },
        }}
      >
        {logo && logo}
        {text && <Typography>{text}</Typography>}
      </Box>
    )
  }

  export default LogoHolder