import React, { Fragment } from 'react'
import SectionPaper from '../../components/SectionPaper'
import LogoHolder from '../../components/LogoHolder';

const AboutPage = () => {
  const content = `
  I'm a full stack developer with over 1 year experience. I'm from Srey Santhor, Kompong Cham Province.
  I code and create web elements for amazing people around the world.
  I like working with new people. New people are new experiences.
  `;

  const texts = [
    "Name: Proeung Chanphanith", "Birthday: December 13, 2004", "Languages: Khmer, English","Nationality: Khmer", 
    "Address: Phnom Pehn, Cambodia", "Phone: (+855) 966 373 640", "Email: proeungchanphanith@gmail.com"
  ];
  
  return (
    <Fragment>
      <SectionPaper
        title="BIOGRAPHY"
        content={content}
        multiText={texts}
      />
    </Fragment>
  );
};


export default AboutPage