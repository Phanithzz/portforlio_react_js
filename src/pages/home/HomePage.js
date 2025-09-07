import React from 'react'
import SectionPaper from '../../components/SectionPaper'
import myImage from '../../assets/images/style_pf.png'; 
const HomePage = () => {
  return (
    <SectionPaper
    isHomePage={true}
    srcImg={myImage}
    />
  )
}

export default HomePage