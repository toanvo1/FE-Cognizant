import React, { useState } from "react";
import "../container.css";
import { Link } from "react-router-dom";
import logo from "../../image/background-dep-don-gian.jpg";
import "../Header/header.css";
import IndustriesForm from "../Header/MenuHeader/IndustriesForm";
import ServiceForm from "../Header/MenuHeader/ServiceForm";
import InsightsForm from "../Header/MenuHeader/InsightsForm";
import AboutForm from "../Header/MenuHeader/AboutForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [selectedForm, setSelectedForm] = useState(null);

  const handleClick = (form) => {
    setSelectedForm(form === selectedForm ? null : form); // Toggle form visibility
  };

  return (
    <div className="container">
      <div className="header">
        <div className="header-1">
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
        </div>
        <div className="header-2">
          <div className="image">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <div>
            <div
              className={`button ${
                selectedForm === "industries" ? "selected" : ""
              }`}
              onClick={() => handleClick("industries")}
            >
              Industries
              <FontAwesomeIcon
                icon={selectedForm === "industries" ? faCaretUp : faCaretDown}
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
              Service
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
              Insights
              <FontAwesomeIcon
                icon={selectedForm === "insights" ? faCaretUp : faCaretDown}
                className="icon"
              />
            </div>
          </div>
          <div>
            <div
              className={`button ${selectedForm === "about" ? "selected" : ""}`}
              onClick={() => handleClick("about")}
            >
              About
              <FontAwesomeIcon
                icon={selectedForm === "about" ? faCaretUp : faCaretDown}
                className="icon"
              />
            </div>
          </div>
        </div>
        <div className="form-container">
          {selectedForm === "industries" && <IndustriesForm />}
          {selectedForm === "service" && <ServiceForm />}
          {selectedForm === "insights" && <InsightsForm />}
          {selectedForm === "about" && <AboutForm />}
        </div>
      </div>
    </div>
  );
};

export default Header;
