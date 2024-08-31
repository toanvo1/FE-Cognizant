import React, { useState } from "react";
import { QuestionCircleOutlined, TeamOutlined } from '@ant-design/icons';
import AboutPower5 from "../Content/AboutContent/AboutPower5";
import Partnerships from "../Content/AboutContent/Partnerships";
import "./MenuForm.css"; // Make sure you include this or your custom CSS file

const AboutForm = () => {
  const [activeSection, setActiveSection] = useState(null); // Trạng thái quản lý section đang hiển thị

  const handleSectionClick = (section) => {
    setActiveSection(section); // Cập nhật section đang hiển thị
  };

  return (
    <div className="industries-form">
      <div className="sidebar">
        <ul>
          <li>
            <button 
              className={activeSection === "about" ? "active" : ""}
              onClick={() => handleSectionClick("about")}
            >
              <span className="icon">
                <QuestionCircleOutlined />
              </span>
              <span className="button-text">About Power 5</span>
            </button>
          </li>
          <li>
            <button 
              className={activeSection === "partnerships" ? "active" : ""}
              onClick={() => handleSectionClick("partnerships")}
            >
              <span className="icon">
                <TeamOutlined />
              </span>
              <span className="button-text">Clients & Partnerships</span>
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
