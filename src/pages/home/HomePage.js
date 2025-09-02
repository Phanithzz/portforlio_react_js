import React from 'react'
import BlockQuote from '../../components/BlockQuote'
import SectionPaper from '../../components/SectionPaper'
import frankImage from '../../assets/images/frank.jpg'; 
const HomePage = () => {
  return (
    <SectionPaper
    isHomePage={true}
    srcImg={frankImage}
    />
  )
}

export default HomePage