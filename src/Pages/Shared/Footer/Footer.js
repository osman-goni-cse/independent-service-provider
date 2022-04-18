import React from "react";
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const date = today.getFullYear();

  return (
    <div className="mt-3">
      
      <footer id="last-part">
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
