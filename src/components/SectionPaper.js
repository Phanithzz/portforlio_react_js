import { Box, Button, Grid2, Link, Paper, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import { TypeAnimation } from 'react-type-animation';
import { handleNavClick } from '../utils/NavigateUtil';

const SectionPaper = (props) => {
  const { isHomePage, srcImg, title, content, goTo, link, gridSize } = props;
  const {isDark} = useContext(ThemeContext);

  const style = {
    padding: '1.5rem 2rem',
    marginBottom: "1rem",
    scrollMarginTop: '60px',
    backgroundColor: isDark ? '#191919' : 'white',
    color: isDark ? 'white' : '#191919',
    
  };

  const styleHomePage = {
    padding: '8rem 5rem',
    minHeight: '100vh', 
    marginBottom: "1rem",
    scrollMarginTop: '60px',
    backgroundColor: isDark ? '#191919' : 'white',
    color: isDark ? 'white' : '#191919'
  };

  return (
    <Box  sx={{ flexGrow: 1 }}>
      {isHomePage ? (
        <Paper className='appear-up' square={false} variant="elevation" sx={styleHomePage}>
          <Grid2 container gap={5} spacing={2} alignItems="center" justifyContent="start"  sx={{ pt: 10 }}>
            <Grid2 alignContent='center'>
              <img src={srcImg ? srcImg : ''} style={{width: '300px'}} className="img-fluid" alt="" />
            </Grid2>
            <Grid2>
              <Typography variant="h4" color={isDark ? '#eeeeee' : '#191919'}>
                Hello! I'm a
              </Typography>
              <TypeAnimation 
                sequence={[
                  "Developer",
                  1100,
                  "Designer", 
                  1100,
                  "Freelancer",
                  1100,
                ]}
                speed={50}
                repeat={Infinity}
                style={{ fontSize: '3em', fontWeight: 'bolder' }}
              />
            </Grid2>
          </Grid2>
        </Paper>
      ) : (
        <Paper sx={{ ...style }}  >
          <Grid2 className="d-flex flex-column" container spacing={2}>
          <Grid2>
      <Box
        component="span"
        sx={{
          fontSize: '1.25rem',        // same as h6
          fontWeight: 'bold',
          borderBottom: '2px solid #3452ff',
          display: 'inline-block',     // shrink to text width
          lineHeight: 2,               // avoid extra spacing
          // paddingBottom: '5px',
        }}
      >
        {title ?? '' }
      </Box>
    </Grid2>

            <Grid2 size={gridSize ?? 12}>
              <Typography>{content ?? ''}</Typography>
            </Grid2>
            <Grid2 size={gridSize ?? 12}>
              <Button
              component='a'
              onClick={(e)=>{handleNavClick(goTo,e)}}
              >
                {link ?? ''}
              </Button>
              
            </Grid2>
          </Grid2>
        </Paper>
      )}
    </Box>
  );
};

export default SectionPaper;
