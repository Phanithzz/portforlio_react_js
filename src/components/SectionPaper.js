  import { Box, Grid2, Link, Paper, Typography } from '@mui/material'
  import React, { useEffect, useRef, useState } from 'react'

  const SectionPaper = (props) => {
    const { id, isHomePage, srcImg, title, content, goTo, link, gridSize } = props;

    const words = ['Phanith', ' a developer', ' a coder'];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
      const currentWord = words[currentWordIndex];
      const timeout = setTimeout(() => {
        if (!isDeleting) {
          if (currentText.length < currentWord.length) {
            setCurrentText(currentWord.slice(0, currentText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          }
        }
      }, isDeleting ? 50 : 100);

      return () => clearTimeout(timeout);
    }, [currentText, isDeleting, currentWordIndex, words]);

    const style = {
      padding: '2rem 1rem',
      marginBottom: "1rem",
      scrollMarginTop: '60px'
    };

    const styleHomePage = {
      padding: '8rem 5rem',
      minHeight: '100vh', // keep homepage fullscreen
      marginBottom: "1rem",
      scrollMarginTop: '60px'
    };


    return (
      <Box sx={{ flexGrow: 1 }}>
        {isHomePage ? (
          <Paper className='appear-up'  id={id ?? ""} square={false} variant="elevation" sx={styleHomePage}>
            <Grid2 container spacing={2} alignItems="center" justifyContent="start">
              <Grid2 alignContent='center'>
                <img src={srcImg ? srcImg : ''} className="global-img img-fluid" alt="" />
              </Grid2>
              <Grid2>
                <Typography variant="h5" color="grey">
                  Hello I'm
                </Typography>
                <Typography variant="h2">{currentText}</Typography>
              </Grid2>
            </Grid2>
          </Paper>
        ) : (
          <Paper id={id ?? ""} sx={{ ...style }}  >
            
            <Grid2 className="d-flex flex-column" container spacing={2}>
              <Typography variant="h5">{title ?? ''}</Typography>
              <Grid2 size={gridSize ?? 6}>
                <Typography>{content ?? ''}</Typography>
              </Grid2>
              <Grid2 size={gridSize ?? 6}>
                <Link href={goTo ?? '#'} underline="hover">
                  {link ?? ''}
                </Link>
              </Grid2>
            </Grid2>
          </Paper>
        )}
      </Box>
    );
  };

  export default SectionPaper;
