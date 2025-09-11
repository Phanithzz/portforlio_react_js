  import { Box, Typography, useTheme } from '@mui/material'
  import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';

  const LogoHolder = (props) => {
  const {aLogo, href, text, logo, paddings, display} = props;
  const theme = useTheme();
  const {isDark} = useContext(ThemeContext);

  
    return (
      <Box
        sx={{
          display: display,
          textAlign: 'center',
          borderRadius: 1,
          padding: paddings ?? '0.3rem',
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
        {text && <Typography sx={{textAlign: 'start', }} gutterBottom>{text}</Typography>}
        {aLogo && (
          <a href={href} target='_blank' rel="noreferrer" >
            {aLogo}
          </a>
        )}
      </Box>
    )
  }

  export default LogoHolder