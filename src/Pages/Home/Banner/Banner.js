import React from 'react';
import banner1 from '../../../images/banner/women_banner.jpg';
import './Banner.css'

const Banner = () => {
  return (
    <div className='mt-5'>
      <img className='w-100' src={banner1} alt="" />
    </div>
  );
};

export default Banner;