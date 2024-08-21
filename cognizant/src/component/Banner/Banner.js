import React, { useState, useEffect } from "react";
import "../container.css";
import "./style/Banner.css";
import logo from "../../image/logo.png";
import logo2 from "../../image/background-dep-don-gian.jpg";
import logo3 from "../../image/logo.png";
import BannerMidle from "./BannerMidle";
import FooterTop from "../Footer/FooterTop";
 

const contentArray = [
  {
    text: "In power5 the greatest solution for you",
    description:
      "At Power5, our vision is to redefine the way technology enhances everyday life, creating a smarter, more interconnected world. We believe that innovation should not only be about advancing technology, but also about empowering people and communities to achieve their full potential.",
    image: logo,
  },
  {
    text: "Next solution for you",
    description:
      "Discover how our latest technology solutions are changing the way businesses operate and thrive in a digital world.",
    image: logo2,
  },
  {
    text: "Another great solution",
    description:
      "Explore the innovative ways we are leveraging technology to drive growth and transformation across industries.",
    image: logo3,
  },
];

const Banner = () => {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false); // Ẩn nội dung hiện tại
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % contentArray.length);
        setIsVisible(true); // Hiện nội dung mới
      }, 1000); // Thời gian ẩn và hiện (phải khớp với transition trong CSS)
    }, 8000); // Chuyển đổi nội dung sau mỗi 8 giây

    return () => clearInterval(interval); // Dọn dẹp interval khi component unmount
  }, []);

  const { text, description, image } = contentArray[index];

  return (
    <div>
      <div className="container">
        <div className="landing-container">
          <div className={`left-section ${isVisible ? "show" : ""}`}>
            <h2>{text}</h2>
            <p>{description}</p>
            <button className="cta-button">
              <i className="fas fa-play">Get Started</i>
            </button>
            <div className="bottom-navigation">
              <ul>
                <li>Careers</li>
                <li>News</li>
                <li>Events</li>
                <li>Investor</li>
              </ul>
            </div>
          </div>
          <div className="right-section">
            <img
              src={image}
              alt="Technology Concept"
              className={isVisible ? "show" : ""}
            />
          </div>
        </div>
        <div className="description-banner">
          Cognizant helps companies modernize technology, reimagine processes
          and transform experiences so they stay ahead in a fast-changing world.
        </div>
      </div>
      <BannerMidle />
      <FooterTop />
      {/* <Footer /> */}
    </div>
  );
};

export default Banner;
