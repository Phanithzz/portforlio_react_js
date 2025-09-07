import React from 'react'
import SectionPaper from '../../components/SectionPaper'
import BlockQuote from '../../components/BlockQuote'

const HomeExperience = () => {
  return (
    <SectionPaper 
    title='EXPERIENCE'
    >

      <BlockQuote 
      subTitle='MJQE (2024 - Today)'
      title='Full Stack Developer Intern'
      gap='1rem'
      fontSize='1.6rem'
      paddings='1rem'
      height='2rem'
      content='
      responsible for designing, developing, and maintaining 
      both front-end and back-end components of web applications. Collaborates with cross-functional teams
       to deliver responsive, scalable, and user-friendly software solutions using modern frameworks and technologies. '
      />

      <br/>

      <BlockQuote 
      subTitle='PC Computer (2023 - 2024)'
      title='IT Support'
      gap='1rem'
      fontSize='1.6rem'
      paddings='1rem'
      height='2rem'
      content='
      Provided technical support for hardware/software issues,
      Maintained and troubleshooted network systems,	Assisted staff with IT solutions and upgrades.
      '
      />
    </SectionPaper>
  )
}

export default HomeExperience