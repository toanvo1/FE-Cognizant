import React from "react";
import "./style/BannerMidleBottom.css";
import mot from "../../image/2.png";

const BannerMidleBottom = () => {
  return (
    <div className="banner-midle-bottom-background">
      <div className="container">
        <div className="banner-midle-bottom">
          <h1>In power5</h1>
          <p>
            At Power5, our vision is to redefine the way technology enhances
            everyday life, creating a smarter, more interconnected world.
          </p>
        </div>
        <div className="content-banner-midle-bottom">
          <div className="banner-midle-bottom-postion">
            <div className="image-container">
              <img src={mot} alt="Description" />
              <div className="overlay">
                Baking
                <div className="additional-text">
                  <p>In power5 we trust to be the</p>
                  <p>
                    At Power5, our vision is to redefine the way technology
                    enhances everyday life, creating a smarter, more
                    interconnected world.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="image-container">
              <img src={mot} alt="Description" />
              <div className="overlay">
                Baking
                <div className="additional-text">
                  <p>In power5 we trust to be the</p>
                  <p>
                    At Power5, our vision is to redefine the way technology
                    enhances everyday life, creating a smarter, more
                    interconnected world.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="banner-midle-bottom-postion">
            <div className="image-container">
              <img src={mot} alt="Description" />
              <div className="overlay">
                Baking
                <div className="additional-text">
                  <p>In power5 we trust to be the</p>
                  <p>
                    At Power5, our vision is to redefine the way technology
                    enhances everyday life, creating a smarter, more
                    interconnected world.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="image-container">
              <img src={mot} alt="Description" />
              <div className="overlay">
                Baking
                <div className="additional-text">
                  <p>In power5 we trust to be the</p>
                  <p>
                    At Power5, our vision is to redefine the way technology
                    enhances everyday life, creating a smarter, more
                    interconnected world.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerMidleBottom;
