import React, { useState, useEffect } from "react";
import "../container.css";
import "./style/Banner.css";
import logo from "../../image/Graphics-1.png";
import logo2 from "../../image/Graphics-2.png";
import logo3 from "../../image/Graphics-3.png";
import logo4 from "../../image/Graphics-4.png";
import logo5 from "../../image/Graphics-5.png";
import vector from "../../image/Chevron.png";
import BannerMidle from "./BannerMidle";
import FooterTop from "../Footer/FooterTop";

const contentArray = [
  {
    text: "The Power to Innovate",
    description:
      "Achieve new levels of efficiency, scalability, and growth through customized technological solutions.",
    image: logo,
  },
  {
    text: "The Power to Cooperate",
    description:
      "Discover how our latest technology solutions are changing the way businesses operate and thrive in a digital world.",
    image: logo2,
  },
  {
    text: "The Power to Connect",
    description:
      "Explore the innovative ways we are leveraging technology to drive growth and transformation across industries.",
    image: logo3,
  },
  {
    text: "The Power to Collaborate",
    description:
      "Achieve new levels of efficiency, scalability, and growth through customized technological solutions.",
    image: logo4,
  },
  {
    text: "The Power to Advance",
    description:
      "Spend less time managing finances and more time growing business with expert accounting solutions.",
    image: logo5,
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
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ paddingTop: "32px" }}>
                  <img src={vector} alt="logo123" />
                </div>
                <div>
                  <ul>
                    <li>Careers</li>
                    <li>News</li>
                    <li>Events</li>
                    <li>Investor</li>
                  </ul>
                </div>
              </div>
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
          <div>
            Power 5 strives to help businesses{" "}
            <span style={{ color: "#E44D27" }}>maximize</span> their potential
            through
            <br />
            expert insights and cutting-edge technology,
          </div>
          <div>
            enabling them to{" "}
            <span style={{ color: "#E44D27" }}>facilitate</span> growth and{" "}
            <span style={{ color: "#E44D27" }}>adapt</span> to ever-changing
            market demands.
          </div>
        </div>
      </div>
      <BannerMidle />
      <FooterTop />
      {/* <Footer /> */}
    </div>
  );
};

export default Banner;
