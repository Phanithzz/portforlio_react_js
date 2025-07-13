import React, { Fragment } from 'react'
import BlockQuote from '../../components/BlockQuote';
import LogoHolder from '../../components/LogoHolder';

const OverviewPage = (props) => {
  const {width, height, borderTopLeftRadius, borderBottomLeftRadius} = props;
  const styles  = { 
    background: "white",
    width: width ? width : "50%", 
    height: height ? height : "100%",
    padding: "1rem",
    borderTopLeftRadius: borderTopLeftRadius ? borderTopLeftRadius : "1rem",
    borderBottomLeftRadius: borderBottomLeftRadius ? borderBottomLeftRadius : "1rem",
    borderRight: "0.5rem solid black"
    
  };


  return (
    <div style={styles} className='d-flex flex-column justify-content-evenly align-items-start gap-4'>
        <img src={`assets/images/frank.jpg`}/>

        <h2> 
          <span style={{color: "blue"}}>Proeung</span> 
          Chanphanith
        </h2>
        <BlockQuote />
        <Fragment >
          <LogoHolder width="2rem" height="2rem" />
        </Fragment>
        <Fragment>
          <LogoHolder />
        </Fragment>

    </div>
  )
}

export default OverviewPage