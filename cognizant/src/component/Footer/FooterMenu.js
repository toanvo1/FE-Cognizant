import React from "react";
import "./Style/Menu.css";
import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import logo from '../../image/logo.png';

const FooterMenu = () => {
  return (
      <div className='container'>
         <footer className="footer-container">
            <div className="footer-left">
              <img src={logo} className="footer-logo" alt="Logo" />
            </div>
            <div className="footer-middle-right-container">
              <div className="footer-middle">
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

              <div className="footer-right">
                <h4>Sign up for new member</h4>
                <form className="signup-form">
                  <input type="email" placeholder="Email Address" className="email-input"/>
                  <button type="submit" className="signup-button">Sign up</button>
                </form>
                <div className="contact-item">
                  <EnvironmentOutlined/>
                  <span>No.7, 9th Street, Binh An ward, Dist 2, Ho Chi Minh City</span>
                </div>
                <div className="contact-item">
                  <PhoneOutlined />
                  <span>(+84) 907 303 646</span>
                </div>
                <div className="contact-item">
                  <MailOutlined />
                  <span>Info@power5.vn</span>
                </div>
                <div className="footer-right-bottom">
                  <span>Power5 © Copyright 2020, Inc. All rights reserved</span>
                </div>
              </div>
            </div>
        </footer>
    </div>
  );
};

export default FooterMenu;
