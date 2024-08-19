import React, { useState, useEffect } from "react";
import "../container.css";
import { Link } from "react-router-dom";
import logo from "../../image/logo.png";
import "../Header/header.css";
import IndustriesForm from "../Header/MenuHeader/IndustriesForm";
import ServiceForm from "../Header/MenuHeader/ServiceForm";
import InsightsForm from "../Header/MenuHeader/InsightsForm";
import AboutForm from "../Header/MenuHeader/AboutForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCaretUp,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import Contanct from "./MenuHeader/Contanct";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [selectedForm, setSelectedForm] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Cập nhật trạng thái isMobile dựa trên kích thước màn hình
    };

    handleResize(); // Kiểm tra kích thước màn hình khi component mount
    window.addEventListener("resize", handleResize); // Lắng nghe sự kiện thay đổi kích thước màn hình

    return () => window.removeEventListener("resize", handleResize); // Cleanup event listener
  }, []);

  const handleClick = (form) => {
    setSelectedForm(form === selectedForm ? null : form); // Toggle form visibility
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
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
          <div className="menu-icon" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div className="image">
            <img src={logo} alt="logo" className="logo" />
          </div>

          {(!isMobile || menuOpen) && (
            <>
              <div>
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
              </div>
              <div>
                <div
                  className={`button ${
                    selectedForm === "service" ? "selected" : ""
                  }`}
                  onClick={() => handleClick("service")}
                >
                  ABOUT US
                  <FontAwesomeIcon
                    icon={selectedForm === "service" ? faCaretUp : faCaretDown}
                    className="icon"
                  />
                </div>
              </div>
              <div>
                <div
                  className={`button ${
                    selectedForm === "insights" ? "selected" : ""
                  }`}
                  onClick={() => handleClick("insights")}
                >
                  SERVICES
                  <FontAwesomeIcon
                    icon={selectedForm === "insights" ? faCaretUp : faCaretDown}
                    className="icon"
                  />
                </div>
              </div>
              <div>
                <div
                  className={`button ${
                    selectedForm === "about" ? "selected" : ""
                  }`}
                  onClick={() => handleClick("about")}
                >
                  RESOURCE
                  <FontAwesomeIcon
                    icon={selectedForm === "about" ? faCaretUp : faCaretDown}
                    className="icon"
                  />
                </div>
              </div>
              <div>
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
            </>
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
        {menuOpen && (
          <div className="form-container">
            {selectedForm === "industries" && <IndustriesForm />}
            {selectedForm === "service" && <ServiceForm />}
            {selectedForm === "insights" && <InsightsForm />}
            {selectedForm === "about" && <AboutForm />}
            {selectedForm === "contact" && <Contanct />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
