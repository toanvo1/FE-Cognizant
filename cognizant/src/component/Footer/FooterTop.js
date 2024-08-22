import React from "react";
import "./Style/FooterTop.css";
import logo1 from "../../image/seb.png";
import logo2 from "../../image/edutek.png";
import logo3 from "../../image/tesse.png";

const FooterTop = () => {
  return (
    <div>
      <div className="footer-top-container">
        <div className="container">
          <div className="footer-top-content">
            <div class="footer-row">
              <div className="footer-top-left">
                <h2>TRUSTED BY THE BEST</h2>
                <p>Discover the clients we have worked with</p>
              </div>
              <div className="footer-top-right">
                <img src={logo1} className="footer-logo" alt="Waren Logo" />
                <img src={logo2} className="footer-logo" alt="Vadanha Logo" />
                <img src={logo3} className="footer-logo" alt="The Hive Logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
