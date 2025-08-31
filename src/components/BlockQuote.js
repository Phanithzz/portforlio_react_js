import { Button, Card, CardActionArea, CardContent, Link, Typography, useTheme } from '@mui/material';
import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import { handleNavClick } from '../utils/NavigateUtil';

const BlockQuote = (props) => {
    const {id, title, content, linkText, width, goTo}=props;
    const {isDark} = useContext(ThemeContext);
    const theme = useTheme();
    const styles = {
      borderLeft: "3px solid #3452ff",
      background: isDark ? "#191919":"#eeeeee",
      width: width ?? "50%",
      padding: "0rem 0.1rem",
      borderRadius: "0rem",
      color: isDark ? "#eeeeee" : "#777777"
    }
  return (
    <Card id = {id ?? ""} sx={styles} raised={false} >
      <CardActionArea>
      <CardContent className='d-flex flex-column justify-content-center gap-1'>
        <Typography variant='h2'>
          {title ?? ""}
        </Typography>
        <Typography variant='subtitle'>
            {content ?? ""}
        </Typography>
        <Button
        component='a'
        onClick={(e)=> {handleNavClick(goTo,e)}}
        sx={{ color: isDark ? '#ffffff' : '#191919', textDecoration: 'underline','&:hover': {
          color: theme.palette.primary.blue,
        } }}
        >
            {linkText ?? ""}
        </Button>
      </CardContent>
      </CardActionArea>

    </Card>
  )
}

export default BlockQuote