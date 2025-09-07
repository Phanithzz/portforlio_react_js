import React, { Fragment, useContext } from 'react'
import BlockQuote from '../../components/BlockQuote';
import LogoHolder from '../../components/LogoHolder';
import myImage from '../../assets/images/My_Picture_Square.png'; 
import { ThemeContext } from '../../contexts/ThemeContext';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { Box, Grid2, useTheme } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const OverviewPage = (props) => {
  const {width, height} = props;

  const {isDark} = useContext(ThemeContext);
  const theme = useTheme();
  const location = <LocationOnIcon sx={{color: theme.palette.primary.blue}} />;
  const phone = <LocalPhoneIcon sx={{color: theme.palette.primary.blue}}  />;
  const email = <EmailIcon sx={{color: theme.palette.primary.blue}} />;
  const git = <GitHubIcon sx={{color: isDark ? 'white' : theme.palette.primary.dark}} />;
  const linkedIn = <LinkedInIcon sx={{color: isDark ? 'white' : theme.palette.primary.dark}}/>;

  const styles  = { 
    background: isDark ? "#191919" : "white",
    width: width ? width : "100%", 
    height: "100%",
    height: "100%",
    color: isDark ? "white" : "#191919",
    padding: "2rem 3rem 4rem 3rem", 
    borderRight: isDark ?  "0.6rem solid grey" : "0.6rem solid black",
  };
  
  return (
    <div style={styles} className='d-flex flex-column justify-content-evenly align-items-start gap-3 appear-down'>
        <img src={myImage} alt="img" className='global-img img-fluid' />

        <h2 className='name-section'> 
          <span >Proeung</span> 
          &nbsp;Chanphanith
        </h2>

        <BlockQuote
        content="Passionate full-stack developer, skilled in building robust backend systems and engaging frontend experiences."
        width='100%'
        linkText='Hire me'
        goTo='#contact'
        />
        <>
          <Grid2
          container
          spacing={2}
          width='100%'
          >
            <Grid2
            size={2}
            >
              <LogoHolder logo={location} />
            </Grid2>
            <Grid2 size={10}>
              <LogoHolder text="Sangkat Russei Keo, Phnom Penh" />
            </Grid2>
          </Grid2>

          <Grid2
          container
          spacing={2}
          width='100%'
          >
            <Grid2
            size={2}
            >
              <LogoHolder logo={phone} />
            </Grid2>
            <Grid2 size={10}>
              <LogoHolder text="(+855) 966 373 640" />
            </Grid2>
          </Grid2>

          <Grid2
          container
          spacing={2}
          width='100%'
          >
            <Grid2
            size={2}
            >
              <LogoHolder logo={email} />
            </Grid2>
            <Grid2 size={10}>
              <LogoHolder text="proeungchanphanith@gmail.com" />
            </Grid2>
          </Grid2>
        </>
        
         
 
        <div className='d-flex flex-row gap-2 '>
          <LogoHolder paddings='1rem' aLogo={git} href='https://github.com/Phanithzz'/>
          <LogoHolder paddings='1rem' aLogo={linkedIn} href='https://www.linkedin.com/in/proeung-chanphanith'/>
        </div>

    </div>
  )
}

export default OverviewPage