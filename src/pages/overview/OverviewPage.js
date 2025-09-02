import React, { Fragment, useContext } from 'react'
import BlockQuote from '../../components/BlockQuote';
import LogoHolder from '../../components/LogoHolder';
import frankImage from '../../assets/images/frank.jpg'; 
import { ThemeContext } from '../../contexts/ThemeContext';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useTheme } from '@mui/material';

const OverviewPage = (props) => {
  const {width, height} = props;

  const {isDark} = useContext(ThemeContext);
  const theme = useTheme();
  const location = <LocationOnIcon sx={{color: theme.palette.primary.blue}} />

  const styles  = { 
    background: isDark ? "#191919" : "white",
    width: width ? width : "100%", 
    color: isDark ? "white" : "#191919",
    padding: "2rem 3rem 4rem 3rem", 
    borderRight: isDark ?  "0.6rem solid grey" : "0.6rem solid black",
  };
  
  return (
    <div style={styles} className='d-flex flex-column justify-content-evenly align-items-start gap-4 appear-down'>
        <img src={frankImage} alt="Frank" className='global-img img-fluid' />

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
        <div className='d-flex flex-row h-100 w-100 gap-1 justify-content-between'>
          <LogoHolder   logo={location} />
          <LogoHolder  text="Sangkat Russei Keo, Phnom Penh" />
        </div>
        <Fragment>
          <LogoHolder />
        </Fragment>

    </div>
  )
}

export default OverviewPage