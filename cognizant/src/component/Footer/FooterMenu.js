import React from "react";
import "./Style/Menu.css";
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import logo from "../../image/logo.png";

const FooterMenu = () => {
  return (
    <div style={{ backgroundColor: "#044026", width: "100%" }}>
      <div className="container">
        <footer className="footer-container">
          <div className="footer-left">
            <img src={logo} className="footer-logo" alt="Logo" />
            <div className="footer-contact">
              <div className="contact-item">
                <EnvironmentOutlined />
                <span>
                  3rd Floor, Vietcom Building 7-9 Dang Thai Mai St, Ward 7, Phu Nhuan Dist, HCMC
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
            <div className="footer-right-bottom">
              <span>Power5 © Copyright 2020, Inc. All rights reserved</span>
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-column">
              <h4>Industries</h4>
              <Link className="footer-link" to="#">
                FAQ
              </Link>
              <Link className="footer-link" to="#">
                Chính sách bảo mật
              </Link>
              <Link className="footer-link" to="#">
                Hướng dẫn thanh toán
              </Link>
              <Link className="footer-link" to="#">
                Kích hoạt khoá học
              </Link>
              <Link className="footer-link" to="#">
                Điều khoản sử dụng
              </Link>
            </div>
            <div className="footer-column">
              <h4>Services</h4>
              <Link className="footer-link" to="#">
                FAQ
              </Link>
              <Link className="footer-link" to="#">
                Chính sách bảo mật
              </Link>
              <Link className="footer-link" to="#">
                Hướng dẫn thanh toán
              </Link>
              <Link className="footer-link" to="#">
                Kích hoạt khoá học
              </Link>
              <Link className="footer-link" to="#">
                Điều khoản sử dụng
              </Link>
            </div>
            <div className="footer-column">
              <h4>About us</h4>
              <Link className="footer-link" to="#">
                FAQ
              </Link>
              <Link className="footer-link" to="#">
                Chính sách bảo mật
              </Link>
              <Link className="footer-link" to="#">
                Hướng dẫn thanh toán
              </Link>
              <Link className="footer-link" to="#">
                Kích hoạt khoá học
              </Link>
              <Link className="footer-link" to="#">
                Điều khoản sử dụng
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default FooterMenu;
