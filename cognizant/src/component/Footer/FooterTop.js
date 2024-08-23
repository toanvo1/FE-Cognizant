import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Style/FooterTop.css"; // Ensure this import path is correct

import logo1 from "../../image/KredivoGroup.png";
import logo2 from "../../image/henkel.png";
import logo3 from "../../image/AllxOne.png";
import logo4 from "../../image/seb.png";
import logo5 from "../../image/edutek.png";
import logo6 from "../../image/tesse.png";

const FooterTop = () => {
  const settings = {
    infinite: true, // Ensure infinite looping of slides
    speed: 10000, // Slower transition speed (10 seconds) for smooth scrolling
    slidesToShow: 3, // Display 3 logos at a time
    slidesToScroll: 1, // Scroll 1 logo at a time
    autoplay: true, // Enable automatic scrolling
    autoplaySpeed: 10, // Set autoplay speed to 0 for continuous scrolling
    cssEase: "linear", // Linear transition for a consistent scrolling effect
    pauseOnHover: false, // Prevent pause on hover
    arrows: false, // Hide navigation arrows
    dots: false // Hide navigation dots
  };
  
  return (
    <div className="footer-top-container">
      <div className="container">
        <div className="footer-top-content">
          <div className="footer-row1">
            <div className="footer-top-left">
              <h2>TRUSTED BY THE BEST</h2>
              <p>Discover the clients we have worked with</p>
            </div>
            <div className="footer-top-right">
              <Slider {...settings} className="footer-slider">
                <div>
                  <img src={logo1} className="footer-Logo" alt="Kredivo Group Logo" />
                </div>
                <div>
                  <img src={logo2} className="footer-Logo" alt="Henkel Logo" />
                </div>
                <div>
                  <img src={logo3} className="footer-Logo" alt="AllxOne Logo" />
                </div>
                <div>
                  <img src={logo4} className="footer-Logo" alt="SEB Logo" />
                </div>
                <div>
                  <img src={logo5} className="footer-Logo" alt="Edutek Logo" />
                </div>
                <div>
                  <img src={logo6} className="footer-Logo" alt="Tesse Logo" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
