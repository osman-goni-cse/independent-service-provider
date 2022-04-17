import React from 'react';
import image from '../../../images/NotFound.jpg';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className='imgbox'>
      <img className='center-fit' src={image} alt="Not Found img" />
    </div>
  );
};

export default NotFound;