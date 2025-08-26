import React, { Fragment } from 'react'
import BlockQuote from '../../components/BlockQuote';
import LogoHolder from '../../components/LogoHolder';
import frankImage from '../../assets/images/frank.jpg'; 
const OverviewPage = (props) => {
  const {width, height, borderTopLeftRadius, borderBottomLeftRadius} = props;
  const styles  = { 
    background: "white",
    width: width ? width : "100%", 
    padding: "2rem 3rem 4rem 3rem", // 👈 extra bottom padding
    borderTopLeftRadius: borderTopLeftRadius ? borderTopLeftRadius : "1rem",
    borderBottomLeftRadius: borderBottomLeftRadius ? borderBottomLeftRadius : "1rem",
    borderRight: "0.5rem solid black"
  };
  

  // const styleImage = {
  //   borderRadius: "50%",
  //   height: "200px",
  //   width: "200px"
  // }

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
        link='Hire me'
        goTo='#contact'
        />
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