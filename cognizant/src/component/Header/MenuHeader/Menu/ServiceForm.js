import React, { useState } from "react";
import Account from "../Content/ServicesContent/Account";
import Business from "../Content/ServicesContent/Business";
import CloudSolutions from "../Content/ServicesContent/CloudSolutions";
import Coworking from "../Content/ServicesContent/Coworking";
import Cybersecurity from "../Content/ServicesContent/Cybersecurity";
import Software from "../Content/ServicesContent/Software";
import Comsulting from "../Content/ServicesContent/Consulting";
import Application from "../Content/ServicesContent/Application";
import "./MenuForm.css";
const ServiceForm = () => {
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
            <button onClick={() => handleSectionClick("Accounting")}>
              Accounting Services
            </button>
          </li>
          <li>
            <button onClick={() => handleSectionClick("Business")}>
              Business Process Services
            </button>
          </li>
          <li>
            <button onClick={() => handleSectionClick("Cloud")}>
              Cloud Solutions
            </button>
          </li>
          <li>
            <button onClick={() => handleSectionClick("Coworking")}>
              Coworking Space
            </button>
          </li>
          <li>
            <button onClick={() => handleSectionClick("Cybersecurity")}>
              Cybersecurity
            </button>
          </li>
          <li>
            <button onClick={() => handleSectionClick("Application")}>
              Application Services
            </button>
          </li>
          <li>
            <button onClick={() => handleSectionClick("Consulting")}>
              Consulting
            </button>
          </li>
          <li>
            <button onClick={() => handleSectionClick("Software")}>
              Software Engineering
            </button>
          </li>
        </ul>
      </div>
      <div className="content">
        {activeSection === "Accounting" && (
          <div id="Accounting">
            <Account />
          </div>
        )}
        {activeSection === "Business" && (
          <div id="Business">
            <Business />
          </div>
        )}
        {activeSection === "Cloud" && (
          <div id="Cloud">
            <CloudSolutions />
          </div>
        )}
        {activeSection === "Coworking" && (
          <div id="Coworking">
            <Coworking />
          </div>
        )}
        {activeSection === "Cybersecurity" && (
          <div id="Cybersecurity">
            <Cybersecurity />
          </div>
        )}
        {activeSection === "Application" && (
          <div id="Application">
            <Application />
          </div>
        )}
        {activeSection === "Consulting" && (
          <div id="Consulting">
            <Comsulting />
          </div>
        )}
        {activeSection === "Software" && (
          <div id="Software">
            <Software />
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceForm;
