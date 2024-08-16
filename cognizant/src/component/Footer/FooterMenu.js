import React from "react";
import "./Style/Menu.css";
import { PhoneOutlined, MailOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import logo from '../../image/logo.png';

const FooterMenu = () => {
  return (
      <div className="container">
        <footer className="footer-container">
      <div className="footer-left">
        <div className="footer-logo-section">
          <img src={logo}  className="footer-logo" />
        </div>
        <div className="footer-links-section">
          <div className="footer-column">
            <h4>Industries</h4>
            <Link className="footer-link" to="#">FAQ</Link>
            <Link className="footer-link" to="#">Chính sách bảo mật</Link>
            <Link className="footer-link" to="#">Hướng dẫn thanh toán</Link>
            <Link className="footer-link" to="#">Kích hoạt khoá học</Link>
            <Link className="footer-link" to="#">Điều khoản sử dụng</Link>
          </div>
          <div className="footer-column">
            <h4>Services</h4>
            <Link className="footer-link" to="#">FAQ</Link>
            <Link className="footer-link" to="#">Chính sách bảo mật</Link>
            <Link className="footer-link" to="#">Hướng dẫn thanh toán</Link>
            <Link className="footer-link" to="#">Kích hoạt khoá học</Link>
            <Link className="footer-link" to="#">Điều khoản sử dụng</Link>
          </div>
          <div className="footer-column">
            <h4>About us</h4>
            <Link className="footer-link" to="#">FAQ</Link>
            <Link className="footer-link" to="#">Chính sách bảo mật</Link>
            <Link className="footer-link" to="#">Hướng dẫn thanh toán</Link>
            <Link className="footer-link" to="#">Kích hoạt khoá học</Link>
            <Link className="footer-link" to="#">Điều khoản sử dụng</Link>
          </div>
        </div>
      </div>
      <div className="footer-right">
        <div className="footer-signup-section">
          <h4>Sign up for new member</h4>
          <div className="email-input-container">
            <MailOutlined />

          </div>
          <div className="contact-info">
            <div className="contact-item">
              <PhoneOutlined />
              <span>(+84) 907 303 646</span>
            </div>
            <div className="contact-item">
              <MailOutlined />
              <span>Info@power5.vn</span>
            </div>
            <div className="contact-item">
              <span>No.7, 9th Street, Binh An ward, Dist 2, Ho Chi Minh City</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default FooterMenu;
