import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import SuccessStories from '../SuccessStories/SuccessStories';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <SuccessStories></SuccessStories>
    </div>
  );
};

export default Home;