import React from 'react';
import './Footer.css'

const Footer = () => {
  const today = new Date();
  const date = today.getFullYear();

  return (
    <div>
      {/* <p className='text-center'>Copyright &copy;{date} All rights reserved by Md. Osman Goni</p> */}

      <footer id="last-part" class="container">
    <ul>
      <li>
        <h3>Be Healthy, Be Fit</h3>
      </li>
      <li>
        <small>Copyright &copy; {date} Be Healthy</small>
      </li>
      <li>
        <small>All rights reserved</small>
      </li>
      
    </ul>
  </footer>
    </div>
  );
};

export default Footer;