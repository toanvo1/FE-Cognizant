import React, { useState } from "react";
import { CloudOutlined, UsergroupAddOutlined, SettingOutlined, ContactsOutlined , UnlockOutlined, CommentOutlined, SolutionOutlined, LaptopOutlined, DatabaseOutlined } from '@ant-design/icons';
import Account from "../Content/ServicesContent/Account";
import Business from "../Content/ServicesContent/Business";
import CloudSolutions from "../Content/ServicesContent/CloudSolutions";
import Coworking from "../Content/ServicesContent/Coworking";
import Cybersecurity from "../Content/ServicesContent/Cybersecurity";
import Software from "../Content/ServicesContent/Software";
import Comsulting from "../Content/ServicesContent/Consulting";
import Application from "../Content/ServicesContent/Application";
import Infrastructure from "../Content/ServicesContent/Infrastructure";
import Marketing from "../Content/ServicesContent/WebDesign"
import "./MenuForm.css";

const ServiceForm = () => {
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
              className={activeSection === "Cloud" ? "active" : ""}
              onClick={() => handleSectionClick("Cloud")}
            >
              <span className="icon">
                <CloudOutlined />
              </span>
              <span className="button-text">Cloud Solutions</span>
            </button>
          </li>
          <li>
            <button 
              className={activeSection === "Coworking" ? "active" : ""}
              onClick={() => handleSectionClick("Coworking")}
            >
              <span className="icon">
                <UsergroupAddOutlined />
              </span>
              <span className="button-text">Coworking Space</span>
            </button>
          </li>
          <li>
            <button 
              className={activeSection === "Software" ? "active" : ""}
              onClick={() => handleSectionClick("Software")}
            >
              <span className="icon">
                <SettingOutlined />
              </span>
              <span className="button-text">Software Engineering</span>
            </button>
          </li>
          <li>
            <button 
              className={activeSection === "Application" ? "active" : ""}
              onClick={() => handleSectionClick("Application")}
            >
              <span className="icon">
                <ContactsOutlined /> 
              </span>
              <span className="button-text">Application Services</span>
            </button>
          </li>
          <li>
            <button 
              className={activeSection === "Cybersecurity" ? "active" : ""}
              onClick={() => handleSectionClick("Cybersecurity")}
            >
              <span className="icon">
                <UnlockOutlined />
              </span>
              <span className="button-text">Cybersecurity</span>
            </button>
          </li>
          <li>
            <button 
              className={activeSection === "Consulting" ? "active" : ""}
              onClick={() => handleSectionClick("Consulting")}
            >
              <span className="icon">
                <CommentOutlined />
              </span>
              <span className="button-text">Consulting</span>
            </button>
          </li>
          <li>
            <button 
              className={activeSection === "Business" ? "active" : ""}
              onClick={() => handleSectionClick("Business")}
            >
              <span className="icon">
                <SolutionOutlined />
              </span>
              <span className="button-text">Business Process Services</span>
            </button>
          </li>
          <li>
            <button 
              className={activeSection === "Marketing" ? "active" : ""}
              onClick={() => handleSectionClick("Marketing")}
            >
              <span className="icon">
                <LaptopOutlined />
              </span>
              <span className="button-text">Web Design & Digital Marketing</span>
            </button>
          </li>
          <li>
            <button 
              className={activeSection === "Infrastructure" ? "active" : ""}
              onClick={() => handleSectionClick("Infrastructure")}
            >
              <span className="icon">
                <DatabaseOutlined />
              </span>
              <span className="button-text">Infrastructures</span>
            </button>
          </li>
        </ul>
      </div>
      <div className="content">
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
        {activeSection === "Software" && (
          <div id="Software">
            <Software />
          </div>
        )}
        {activeSection === "Application" && (
          <div id="Application">
            <Application />
          </div>
        )}
        {activeSection === "Cybersecurity" && (
          <div id="Cybersecurity">
            <Cybersecurity />
          </div>
        )}
        {activeSection === "Consulting" && (
          <div id="Consulting">
            <Comsulting />
          </div>
        )}
        {activeSection === "Business" && (
          <div id="Business">
            <Business />
          </div>
        )}
        {activeSection === "Marketing" && (
          <div id="Marketing">
            <Marketing />
          </div>
        )}
        {activeSection === "Infrastructure" && (
          <div id="Infrastructure">
            <Infrastructure />
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceForm;
