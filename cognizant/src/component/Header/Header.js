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

const Header = () => {
  const [selectedForm, setSelectedForm] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const formRef = useRef(null); // Tham chiếu đến phần tử chứa các form

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Cập nhật trạng thái isMobile dựa trên kích thước màn hình
    };

    const handleScroll = () => {
      // if (formRef.current) {
      //   const { top } = formRef.current.getBoundingClientRect();
      //   const viewportHeight = window.innerHeight;

      //   if (top < 0) {
      //     setSelectedForm(null);
          
      //   }
      // }
    };

    handleResize(); // Kiểm tra kích thước màn hình khi component mount
    window.addEventListener("resize", handleResize); // Lắng nghe sự kiện thay đổi kích thước màn hình
    window.addEventListener("scroll", handleScroll); // Lắng nghe sự kiện cuộn trang

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup event listener
      window.removeEventListener("scroll", handleScroll); // Cleanup event listener
    };
  }, []);

const handleClick = (form) => {
  setSelectedForm(form === selectedForm ? null : form); // Toggle form visibility
  setMenuOpen(true); // Ensure menu is open
  console.log("Selected Form: ", selectedForm);
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
      <div className="image">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="nav-links">
        <div className={`button ${selectedForm === "industries" ? "selected" : ""}`} onClick={() => handleClick("industries")}>
          INDUSTRIES
          <FontAwesomeIcon icon={selectedForm === "industries" ? faCaretUp : faCaretDown} className="icon" />
        </div>
        <div className={`button ${selectedForm === "service" ? "selected" : ""}`} onClick={() => handleClick("service")}>
          SERVICES
          <FontAwesomeIcon icon={selectedForm === "service" ? faCaretUp : faCaretDown} className="icon" />
        </div>
        <div className={`button ${selectedForm === "about" ? "selected" : ""}`} onClick={() => handleClick("about")}>
          ABOUT US
          <FontAwesomeIcon icon={selectedForm === "about" ? faCaretUp : faCaretDown} className="icon" />
        </div>
        <div className={`button ${selectedForm === "contact" ? "selected" : ""}`} onClick={() => handleClick("contact")}>
          CONTACT
          <FontAwesomeIcon icon={selectedForm === "contact" ? faCaretUp : faCaretDown} className="icon" />
        </div>
      </div>
      <div className="search-container">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input type="text" placeholder="Search" className="search-input-123" />
      </div>
    </div>
    {(menuOpen || !isMobile) && (
      <div
      className={`form-container ${selectedForm ? "" : "hidden"}`}
      ref={formRef}
    >
        {selectedForm === "industries" && <IndustriesForm />}
        {selectedForm === "service" && <ServiceForm />}
        {selectedForm === "about" && <AboutForm />}
        {selectedForm === "contact" && <Contact />}
      </div>
    )}
  </div>
</div>
  );
};

export default Header;
