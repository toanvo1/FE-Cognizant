import React, { useState } from "react";
import "./style/BannerMidle.css";
import mot from "../../image/image-1.png";
import hai from "../../image/imgae-2.png";
import ba from "../../image/imgae-3.png";
import bon from "../../image/image-4.png";
import nam from "../../image/image-5.png";
import sau from "../../image/image-6.png";
import bay from "../../image/image-7.png";
import tam from "../../image/image-8.png";
import chin from "../../image/image-9.png";
import BannerMidleBottom from "../Banner/BannerMidleBottom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";


const images = [
  { src: mot, alt: "Image 1", text: "Accounting" },
  { src: hai, alt: "Image 2", text: "Consulting" },
  { src: ba, alt: "Image 3", text: "Business Process" },
  { src: bon, alt: "Image 4", text: "Coworking Space" },
  { src: nam, alt: "Image 5", text: "Software Engineering" },
  { src: sau, alt: "Image 6", text: "Cloud Solutions" },
  { src: bay, alt: "Image 7", text: "Cybersecurity" },
  { src: tam, alt: "Image 8", text: "Infrastructures" },
  { src: chin, alt: "Image 9", text: "Web Design & Digital Marketing" },
];

const BannerMidle = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 8;

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - itemsToShow + images.length) % images.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsToShow) % images.length);
  };

  // Ensure correct display of 8 items in the slider
  const visibleItems = [
    ...images.slice(currentIndex, currentIndex + itemsToShow),
    ...images.slice(0, Math.max(0, currentIndex + itemsToShow - images.length)),
  ].slice(0, itemsToShow); // Ensure only showing the required number of items

  return (
    <div className="banner-midle">
      <div className="container">
        <div className="modal">
          <div className="banner-midle-content">
            <div>
              <h2 style={{ color: "white" }}>Our Services</h2>
            </div>
            <div className="slideShow-banner">
              <div className="text-content-header">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </div>
              <div className="icon-container-banner">
                <div className="box-icon" onClick={handlePrev}>
                  <FontAwesomeIcon icon={faArrowLeft} />
                </div>
                <div className="box-icon" onClick={handleNext}>
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
              </div>
            </div>

            <div className="banner-midle-content-image">
              {visibleItems.map((item, index) => (
                <div
                  key={index}
                  className={`loader-banner-image${
                    (index + currentIndex) % 2 === 0 ? "" : "-white"
                  }`}
                >
                  <div className="image-mot">
                    <img src={item.src} alt={item.alt} />
                  </div>

                  <div
                    className={
                      (index + currentIndex) % 2 === 0
                        ? "text-banner"
                        : "text-banner-black"
                    }
                  >
                    <p>{item.text}</p>
                  </div>
                  <div className="text-container">
                    <button className="cta-button-1">
                      <i className="fas fa-play">Learn more</i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-banner-content-1"></div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="modal-1">
            <div>
              <h2>Who we are?</h2>
            </div>
            <div className="text-modal-1">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit
              </p>
            </div>
          </div>
        </div>
      </div>
      <BannerMidleBottom />
    </div>
  );
};

export default BannerMidle;
