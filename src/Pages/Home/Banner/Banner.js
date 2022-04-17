import React from 'react';
import banner1 from '../../../images/banner/banner.jpg';
import './Banner.css'

const Banner = () => {
  return (
    <div>
      <img className='w-100' src={banner1} alt="" />
    </div>
  );
};

export default Banner;