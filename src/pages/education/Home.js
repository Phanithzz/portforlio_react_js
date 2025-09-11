import React from 'react'
import SectionPaper from '../../components/SectionPaper'
import BlockQuote from '../../components/BlockQuote'

const HomeEducation = () => {
  return (
    <SectionPaper
    title='Education'
    >
        <BlockQuote 
        subTitle='Norton University (2022 - Present)'
        title='Software Development'
        fontSize='1.6rem'
        paddings='1rem'
        height='2rem'
        gap='1rem'
        content="Pursuing a Bachelor's degree in Software Development with a focus on web technologies, databases, and software engineering principles. Learning to design, develop, and deploy applications using modern frameworks and tools."
        />

        <br></br>
        <BlockQuote 
        subTitle='Srey Santhor High School (2018 - 2022)'
        title='High School Diploma'
        fontSize='1.6rem'
        paddings='1rem'
        height='2rem'
        gap='1rem'
        content="Completed high school studies and built a strong foundation in analytical thinking, teamwork, and technology interests."

        />
    </SectionPaper>
  )
}

export default HomeEducation