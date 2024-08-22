import React, { useState } from "react";
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
        <h3>Industries Menu</h3>
        <ul>
          <li>
            <button onClick={() => handleSectionClick("mediatechlogy")}>
              Communications, Media & Technology
            </button>
          </li>
          <li>
            <button onClick={() => handleSectionClick("education")}>
              Education
            </button>
          </li>
          <li>
            <button onClick={() => handleSectionClick("oilgas")}>
              Oil & Gas
            </button>
          </li>
          <li>
            <button onClick={() => handleSectionClick("retail")}>Retail</button>
          </li>
          <li>
            <button onClick={() => handleSectionClick("transportation")}>
              Transportation & Logistics
            </button>
          </li>
        </ul>
      </div>
      <div className="content">
        {activeSection === "mediatechlogy" && (
          <div id="mediatechlogy">
            <Communication />
          </div>
        )}
        {activeSection === "education" && (
          <div id="education">
            <Education />
          </div>
        )}
        {activeSection === "oilgas" && (
          <div id="oilgas">
            <Oils />
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
      </div>
    </div>
  );
};

export default IndustriesForm;
