import React, { useState, useEffect, useRef } from "react";
import "../container.css";
import { Link } from "react-router-dom";
import logo from "../../image/logo.png";
import "../Header/header.css";
import IndustriesForm from "../Header/MenuHeader/Menu/IndustriesForm";
import ServiceForm from "../Header/MenuHeader/Menu/ServiceForm";
import AboutForm from "../Header/MenuHeader/Menu/AboutForm";
import Contact from "./MenuHeader/Menu/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCaretUp,
  faBars,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
const Header = ({ toggleBannerAndFooter }) => {
  const [selectedForm, setSelectedForm] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const formRef = useRef(null);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = (form) => {
    setSelectedForm(form === selectedForm ? null : form);
    setMenuOpen(true);
    if (form === selectedForm) {
      toggleBannerAndFooter(true); // Hiện lại Banner và Footer nếu form đóng
    } else {
      toggleBannerAndFooter(false); // Ẩn Banner và Footer khi form mở
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogoClick = () => {
    setSelectedForm(null); // Đặt lại selectedForm
    setMenuOpen(false); // Đóng menu
    toggleBannerAndFooter(true); // Hiện lại Banner và Footer
  };

  return (
    <div>
      <div className={`container ${menuOpen ? "menu-expanded" : ""}`}>
        <div className="header">
          <div className="header-1">
            {!isMobile && (
              <>
                <Link to="/" className="header-link-none">
                  Careers
                </Link>
                <Link to="/" className="header-link-none">
                  News
                </Link>
                <Link to="/" className="header-link-none">
                  Events
                </Link>
                <Link to="/" className="header-link-none">
                  Investors
                </Link>
              </>
            )}
          </div>
          <div className="header-2">
            <div className="image" onClick={handleLogoClick}>
              <img src={logo} alt="logo" className="logo" />
            </div>
            {!isMobile ? (
              <div className="nav-links">
                <div
                  className={`button ${
                    selectedForm === "industries" ? "selected" : ""
                  }`}
                  onClick={() => handleClick("industries")}
                >
                  INDUSTRIES
                  <FontAwesomeIcon
                    icon={
                      selectedForm === "industries" ? faCaretUp : faCaretDown
                    }
                    className="icon"
                  />
                </div>
                <div
                  className={`button ${
                    selectedForm === "service" ? "selected" : ""
                  }`}
                  onClick={() => handleClick("service")}
                >
                  SERVICES
                  <FontAwesomeIcon
                    icon={selectedForm === "service" ? faCaretUp : faCaretDown}
                    className="icon"
                  />
                </div>
                <div
                  className={`button ${
                    selectedForm === "about" ? "selected" : ""
                  }`}
                  onClick={() => handleClick("about")}
                >
                  ABOUT
                  <FontAwesomeIcon
                    icon={selectedForm === "about" ? faCaretUp : faCaretDown}
                    className="icon"
                  />
                </div>
                <div
                  className={`button ${
                    selectedForm === "contact" ? "selected" : ""
                  }`}
                  onClick={() => handleClick("contact")}
                >
                  CONTACT
                  <FontAwesomeIcon
                    icon={selectedForm === "contact" ? faCaretUp : faCaretDown}
                    className="icon"
                  />
                </div>
              </div>
            ) : (
              <div>
                <div className="menu-icon" onClick={toggleMenu}>
                  <FontAwesomeIcon icon={faBars} className="icon" />
                </div>
                {menuOpen && (
                  <div className="nav-links">
                    <div
                      className={`button ${
                        selectedForm === "industries" ? "selected" : ""
                      }`}
                      onClick={() => handleClick("industries")}
                    >
                      INDUSTRIES
                      <FontAwesomeIcon
                        icon={
                          selectedForm === "industries"
                            ? faCaretUp
                            : faCaretDown
                        }
                        className="icon"
                      />
                    </div>
                    <div
                      className={`button ${
                        selectedForm === "service" ? "selected" : ""
                      }`}
                      onClick={() => handleClick("service")}
                    >
                      SERVICES
                      <FontAwesomeIcon
                        icon={
                          selectedForm === "service" ? faCaretUp : faCaretDown
                        }
                        className="icon"
                      />
                    </div>
                    <div
                      className={`button ${
                        selectedForm === "about" ? "selected" : ""
                      }`}
                      onClick={() => handleClick("about")}
                    >
                      ABOUT US
                      <FontAwesomeIcon
                        icon={
                          selectedForm === "about" ? faCaretUp : faCaretDown
                        }
                        className="icon"
                      />
                    </div>
                    <div
                      className={`button ${
                        selectedForm === "contact" ? "selected" : ""
                      }`}
                      onClick={() => handleClick("contact")}
                    >
                      CONTACT
                      <FontAwesomeIcon
                        icon={
                          selectedForm === "contact" ? faCaretUp : faCaretDown
                        }
                        className="icon"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
            <div className="search-container">
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
              <input
                type="text"
                placeholder="Search"
                className="search-input-123"
              />
            </div>
          </div>
          {(menuOpen || !isMobile) && (
            <div
              className={`form-container ${selectedForm ? "" : "hidden"}`}
              ref={formRef}
            >
              {selectedForm === "industries" && <IndustriesForm />}
              {selectedForm === "service" && <ServiceForm />}
              
            </div>
          )}
        </div>
      </div>
      {(menuOpen || !isMobile) && (
        <div
          className={`form-container ${selectedForm ? "" : "hidden"}`}
          ref={formRef}
        >
          {selectedForm === "about" && <AboutForm />}
          {selectedForm === "contact" && <Contact />}
        </div>
      )}
    </div>
  );
};

export default Header;
