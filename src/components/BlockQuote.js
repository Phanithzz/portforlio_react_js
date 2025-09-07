import { Button, Card, Box, CardContent, Link, Typography, useTheme } from '@mui/material';
import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import { handleNavClick } from '../utils/NavigateUtil';

const BlockQuote = (props) => {
    const {id, title, subTitle, content, linkText, width, goTo, fontSize, gap, paddings, height}=props;
    const {isDark} = useContext(ThemeContext);
    const theme = useTheme();
    const styles = {
      position: 'relative',
      background: isDark ? "#191919":"#eeeeee",
      width: width ?? "100%",
      padding: paddings ? paddings :"0rem 0.1rem",
      borderRadius: "0rem",
      color: isDark ? "#eeeeee" : "#777777",
      
      '&::before': {
        content: '""',
        position: 'absolute',
        left: 0,
        top: 0,
        width: '3px',
        height: height ?? '100%',
        backgroundColor: '#3452ff',
        borderRadius: '1px',
      }
    };
    
  return (
    <Card
      sx={{
        display: 'flex',
        alignItems: 'center', 
        background: isDark ? "#191919" : "#eeeeee",
        width: width ?? "100%",
        padding: paddings ?? "0.5rem",
        borderRadius: "0rem",
        color: isDark ? "#eeeeee" : "#777777",
      }}
    >
      {/* Left border */}
      <Box
        sx={{
          width: '0.5rem',
          height: height ?? '100%', 
          backgroundColor: '#3452ff',
          borderRadius: '1px',
        }}
      />
      
      {/* Content */}
      <CardContent sx={{ paddingLeft: '1rem' }}>
        <Typography variant='h6' sx={{ color: isDark ? theme.palette.primary.main : theme.palette.primary.dark }}>
          {subTitle ?? ""}
        </Typography>
        <Typography variant='subtitle1' sx={{ 
          color: isDark ? 'white' : theme.palette.primary.darker,
          fontSize: fontSize ?? '18px' }}>
          {title ?? ""}
        </Typography>
        <Typography variant='subtitle'>
          {content ?? ""}
        </Typography>
        <Button
          component='a'
          onClick={(e) => { handleNavClick(goTo, e) }}
          sx={{
            padding: '0.5rem',
            display: 'block',
            color: isDark ? theme.palette.primary.blue : '#191919',
            textDecoration: 'underline',
            '&:hover': { color: theme.palette.primary.blue, textDecoration: 'underline' },
          }}
        >
          {linkText ?? ""}
        </Button>
      </CardContent>
    </Card>

  )
}

export default BlockQuote