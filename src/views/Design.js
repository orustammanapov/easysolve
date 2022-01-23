import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import ModalImage from '../components/sections/ModalImage';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import Image from '../components/elements/Image';

const Design = () => {

  const images = {
    exterior: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],
    interior: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],
  };

  return (
    <>
      <FeaturesSplit folder="design" images={images} invertMobile topDivider imageFill className="illustration-section-02" />
    </>
  );
}

export default Design;