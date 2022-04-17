import React from 'react';

const Footer = () => {
  const today = new Date();
  const date = today.getFullYear();

  return (
    <div>
      <p className='text-center'>Copyright &copy;{date} All rights reserved by Md. Osman Goni</p>
    </div>
  );
};

export default Footer;