import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../../../image/logo.png";
import FooterMenu from "../../../../Footer/FooterMenu";
const AboutPower5ui = () => {
  return (
    <div>
      <div className="about-wrapper">
        {/* Hero Section */}
        <div className="hero-section">
          <img src={logo} alt="Power 5" className="hero-image" />
          <div className="hero-overlay">
            <h1 className="hero-heading">About Power 5</h1>
            <p className="hero-text">
              Strength comes from connection and collaboration. Let's grow
              together!
            </p>
          </div>
        </div>

        {/* Introduction Section */}
        <div className="intro-section">
          <div className="intro-content">
            <h2 className="section-heading">Our Mission</h2>
            <p className="intro-text">
              By 2025, Power 5 aspires to be a leading trusted partner,
              providing comprehensive software solutions and technology services
              that enhance human capabilities and efficiency, while creating
              sustainable value for the community.
            </p>
            <p className="intro-text">
              Power 5 serves as a bridge, connecting individuals, businesses,
              and organizations, fostering new opportunities and innovative
              solutions.
            </p>
          </div>
        </div>

        {/* Our History Section */}
        <div className="history-section">
          <h2 className="section-heading">Our History</h2>
          <div className="history-timeline">
            <div className="history-item">
              <h3>2018</h3>
              <p>
                Started as an IT services company, setting the foundation for
                future growth.
              </p>
            </div>
            <div className="history-item">
              <h3>2021</h3>
              <p>
                Recruited talented individuals and expanded international
                partnerships.
              </p>
            </div>
            <div className="history-item">
              <h3>2023</h3>
              <p>Focused on developing software products like LMS and SMS.</p>
            </div>
            <div className="history-item">
              <h3>2024</h3>
              <p>
                Transitioned into a joint-stock company, gaining the trust of
                strategic partners.
              </p>
            </div>
            <div className="history-item">
              <h3>2025</h3>
              <p>
                Aspired to be a trusted partner in providing comprehensive
                solutions for the community.
              </p>
            </div>
          </div>
        </div>

        {/* Our Philosophy Section */}
        <div className="philosophy-section">
          <h2 className="section-heading">Our Philosophy</h2>
          <p className="philosophy-text">
            With our "Power 5" philosophy, we believe that strength comes from
            connection and collaboration. People are at the heart of everything
            we do, and our mission is to partner with them in their growth.
          </p>
        </div>

        {/* Call-to-Action Section */}
        <div className="cta-section">
          <h2>Join Us on Our Journey</h2>
          <p>
            At Power 5, we believe that strength comes from connection and
            collaboration. Be a part of our mission to create sustainable value
            and enhance human capabilities.
          </p>
          <Link to="/contact" className="cta-button">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPower5ui;
