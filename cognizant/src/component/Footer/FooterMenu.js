import React from "react";
import "./Style/Menu.css";
import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import logo from "../../image/logo.png";

const FooterMenu = () => {
  return (
    <div style={{ backgroundColor: "#044026", width: "100%" }}>
      <div className="container">
      <footer className="footer-container">
          <div className="footer-left">
            <img src={logo} className="footer-logo" alt="Logo" />
            <h4 className="footer-company-name">Power 5 Company Limited</h4>
            <div className="footer-contact">
              <div className="contact-item">
                <EnvironmentOutlined />
                <span>
                  3rd Floor, Vietcom Building
                  <p>7-9 Dang Thai Mai St, Ward 7, Phu Nhuan Dist, HCMC</p>
                </span>
              </div>
              <div className="contact-item">
                <PhoneOutlined />
                <span>(+84) 907 303 646</span>
              </div>
              <div className="contact-item">
                <MailOutlined />
                <span>Info@power5.vn</span>
              </div>
            </div>
          </div>
          <div className="footer-middle">
            <div className="footer-column">
              <h4>Industries</h4>
              <Link className="footer-link" to="#">Education</Link>
              <Link className="footer-link" to="#">Retail</Link>
              <Link className="footer-link" to="#">Oil & Gas</Link>
              <Link className="footer-link" to="#">Transportation & Logistics</Link>
              <Link className="footer-link" to="#">Communications, Media & Technology</Link>
            </div>
            <div className="footer-column">
              <h4>Services</h4>
              <Link className="footer-link" to="#">Accounting</Link>
              <Link className="footer-link" to="#">Consulting</Link>
              <Link className="footer-link" to="#">Business Process</Link>
              <Link className="footer-link" to="#">Coworking Space</Link>
              <Link className="footer-link" to="#">Software Engineering</Link>
              <Link className="footer-link" to="#">Cloud Solutions</Link>
              <Link className="footer-link" to="#">Cybersecurity</Link>
              <Link className="footer-link" to="#">Infrastructures</Link>
              <Link className="footer-link" to="#">Web Design & Digital Marketing</Link>
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-column about">
              <h4>About</h4>
              <Link className="footer-link" to="#">About Power 5</Link>
              <Link className="footer-link" to="#">Clients & Partnerships</Link>
            </div>
            <div className="footer-column contact">
              <h4>Contact</h4>
              <Link className="footer-link" to="#">Contact Us</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default FooterMenu;
