import React from 'react'
import SectionPaper from '../../components/SectionPaper'

const AboutPage = () => {
  const content = `
  I'm a full stack developer with over 1 year experience. I'm from Srey Santhor, Kompong Cham Province.
  I code and create web elements for amazing people around the world.
  I like working with new people. New people are new experiences.
  `;

  return (
    <SectionPaper
      title="BIOGRAPHY"
      content={content}
    />
  );
};


export default AboutPage