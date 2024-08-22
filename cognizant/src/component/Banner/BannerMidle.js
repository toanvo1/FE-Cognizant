import React from "react";
import "./style/BannerMidle.css";
import mot from "../../image/1.png";
import hai from "../../image/image (2).png";
import BannerMidleBottom from "../Banner/BannerMidleBottom";
const BannerMidle = () => {
  return (
    <div className="banner-midle">
      <div className="container">
        <div class="modal">
          <div className="banner-midle-content">
            <div>
              <h2 style={{ color: "white" }}>Our Services</h2>
            </div>
            <div>
              <div className="text-content-header">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </div>
              <div className="banner-midle-content-image">
                <div className="loader-banner-image">
                  <div className="image-mot">
                    <img src={mot} alt="mothaibabon" />
                  </div>

                  <div className="text-banner">
                    <p>Cognizant helps companies </p>
                  </div>
                  <div className="text-container">
                    <button className="cta-button-1">
                      <i className="fas fa-play">Get Started</i>
                    </button>
                  </div>
                </div>
                <div className="loader-banner-image-white">
                  <div className="image-mot">
                    <img src={hai} alt="mothaibabon" />
                  </div>

                  <div className="text-banner-black">
                    <p>Cognizant helps companies </p>
                  </div>
                  <div className="text-container">
                    <button className="cta-button-1">
                      <i className="fas fa-play">Get Started</i>
                    </button>
                  </div>
                </div>
                <div className="loader-banner-image">
                  <div className="image-mot">
                    <img src={mot} alt="mothaibabon" />
                  </div>

                  <div className="text-banner">
                    <p>Cognizant helps companies </p>
                  </div>
                  <div className="text-container">
                    <button className="cta-button-1">
                      <i className="fas fa-play">Get Started</i>
                    </button>
                  </div>
                </div>
                <div className="loader-banner-image-white">
                  <div className="image-mot">
                    <img src={mot} alt="mothaibabon" />
                  </div>

                  <div className="text-banner-black">
                    <p>Cognizant helps companies </p>
                  </div>
                  <div className="text-container">
                    <button className="cta-button-1">
                      <i className="fas fa-play">Get Started</i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-banner-content-1">
          Cognizant helps companies modernize technology,
          reimagine processes and transform experiences so they stay ahead in a
          fast-changing world.
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className="modal-1">
            <div>
              Artnering with World Economic Forum to improve everyday life
            </div>
            <div className="text-modal-1">
              <p>
                We’re partnering with WEF to chart new paths to progress on
                complex global challenges like responsible AI, education and
                skilling for tomorrow’s workforce and advancing the energy
                transition.
              </p>
            </div>
            <div> Discover new thinking</div>
          </div>
        </div>
      </div>
      <BannerMidleBottom />
    </div>
  );
};

export default BannerMidle;
