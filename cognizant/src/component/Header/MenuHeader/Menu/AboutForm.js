import React, { useState } from "react";
import AboutPower5 from "../Content/AboutContent/AboutPower5";
import Partnerships from "../Content/AboutContent/Partnerships";

const AboutForm = () => {
  const [activeSection, setActiveSection] = useState(null); // Trạng thái quản lý section đang hiển thị

  const handleSectionClick = (section) => {
    setActiveSection(section); // Cập nhật section đang hiển thị
  };

  return (
    <div className="industries-form">
      <div className="sidebar">
        <h3>About Menu</h3>
        <ul>
          <li>
            <button onClick={() => handleSectionClick("about")}>
              About Power5
            </button>
          </li>
          <li>
            <button onClick={() => handleSectionClick("partnerships")}>
              Partnerships
            </button>
          </li>
        </ul>
      </div>
      <div className="content">
        {activeSection === "about" && (
          <div id="about">
            <AboutPower5 />
          </div>
        )}
        {activeSection === "partnerships" && (
          <div id="partnerships">
            <Partnerships />
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutForm;
