import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faDollarSign, faTruck, faFilm } from "@fortawesome/free-solid-svg-icons";
import Communication from "../Content/IndustriesContent/Communication";
import Education from "../Content/IndustriesContent/Education";
import Oils from "../Content/IndustriesContent/Oils";
import Retail from "../Content/IndustriesContent/Retail";
import Transportation from "../Content/IndustriesContent/Transportation";

const IndustriesForm = () => {
  const [activeSection, setActiveSection] = useState(null); // Quản lý trạng thái của section đang hiển thị

  const handleSectionClick = (section) => {
    setActiveSection(section); // Cập nhật section đang hiển thị
  };

  return (
    <div className="industries-form">
      <div className="sidebar">
        <ul>
          <li>
            <button 
              className={activeSection === "education" ? "active" : ""}
              onClick={() => handleSectionClick("education")}
            >
              <span className="icon">
                <FontAwesomeIcon icon={faGraduationCap} />
              </span>
              <span className="button-text">Education</span>
            </button>
          </li>
          <li>
            <button 
              className={activeSection === "retail" ? "active" : ""}
              onClick={() => handleSectionClick("retail")}
            >
              <span className="icon">
                <FontAwesomeIcon icon={faDollarSign} />
              </span>
              <span className="button-text">Retail</span>
            </button>
          </li>
          <li>
            <button 
              className={activeSection === "transportation" ? "active" : ""}
              onClick={() => handleSectionClick("transportation")}
            >
              <span className="icon">
                <FontAwesomeIcon icon={faTruck} />
              </span>
              <span className="button-text">Transportation & Logistics</span>
            </button>
          </li>
          <li>
            <button 
              className={activeSection === "mediatechlogy" ? "active" : ""}
              onClick={() => handleSectionClick("mediatechlogy")}
            >
              <span className="icon">
                <FontAwesomeIcon icon={faFilm} />
              </span>
              <span className="button-text">Communications, Media & Technology</span>
            </button>
          </li>
        </ul>
      </div>
      <div className="content">
        {activeSection === "education" && (
          <div id="education">
            <Education />
          </div>
        )}
        {activeSection === "retail" && (
          <div id="retail">
            <Retail />
          </div>
        )}
        {activeSection === "transportation" && (
          <div id="transportation">
            <Transportation />
          </div>
        )}
        {activeSection === "mediatechlogy" && (
          <div id="mediatechlogy">
            <Communication />
          </div>
        )}
        {activeSection === "oilgas" && (
          <div id="oilgas">
            <Oils />
          </div>
        )}
      </div>
    </div>
  );
};

export default IndustriesForm;
