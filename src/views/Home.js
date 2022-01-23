import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import ModalImage from '../components/sections/ModalImage';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import Image from '../components/elements/Image';

const Home = () => {

  const images = {
    exterior: [1,2,3,4,5,6],
    kitchen: [1,2,3,4,5,6,7,8],
    living_room: [1,2,3],
  };

  return (
    <>
      {/* <Hero className="illustration-section-01" /> */}
      {/* <ModalImage className="illustration-section-01" /> */}
      {/* <FeaturesTiles /> */}
      <FeaturesSplit folder="work" images={images} invertMobile topDivider imageFill className="illustration-section-02" />
      {/* <Testimonial topDivider /> */}
      {/* <Image
        src={require('./../assets/images/exterior_1.jpeg')}
      alt="Features tile icon 01" /> */}
      {/* <Cta split /> */}
    </>
  );
}

export default Home;