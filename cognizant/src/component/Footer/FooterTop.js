import React from 'react';
import './Style/FooterTop.css';
import logo1 from "../../image/logo-thehive.png";
import logo2 from "../../image/logo-vadanha.png";
import logo3 from "../../image/logo-waren.png";

const FooterTop = () => {
  return (
    <div className="footer-top-container">
      <div className="footer-top-content">
      <div class="footer-row">
        <div className="footer-top-left">
          <h2>POWER 5 CLIENTS</h2>
          <p>EXPLORE SOME OF POWER 5’S CLIENTS</p>
        </div>
        <div className="footer-top-right">
          <img src={logo3} className="footer-logo" alt="Waren Logo" />
          <img src={logo2} className="footer-logo" alt="Vadanha Logo" />
          <img src={logo1} className="footer-logo" alt="The Hive Logo" />
        </div>
        </div>
       
      </div>
    </div>
  );
}

export default FooterTop;
