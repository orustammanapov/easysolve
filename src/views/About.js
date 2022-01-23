import React from 'react';
import SectionHeader from '../components/sections/partials/SectionHeader';

const Contact = () => {

  const sectionHeader = {
    title: 'About our company',
    paragraph: 'Here we explain what we do and how we do it.'
  };

  return (
    <>
      <div className='container' style={{ marginTop: "200px" }}>
        <SectionHeader data={sectionHeader} className="center-content" />
      </div>
    </>
  );
}

export default Contact;