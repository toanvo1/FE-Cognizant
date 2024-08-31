import React from 'react';
import "../Menu/Contact.css"
import { EnvironmentOutlined, PhoneOutlined, MailOutlined } from "@ant-design/icons";
import backgroundImage from '../../../../image/contactUs.png'; // Adjust the path accordingly

const Contanct = () => {
  return (
    <div className="contact-us-container">
      <div className="contact-us-header" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <h2>FOR NEW WORKING EXPERIENCE</h2>
        <h1>CONTACT US</h1>
      </div>
      <div className="contact-us-cards">
        <div className="contact-card">
          <EnvironmentOutlined className="icon-style" />
          <h3>Address</h3>
          <p>
            3rd Floor, Vietcom Building <br />
            7-9 Dang Thai Mai St, Ward 7, Phu <br />
            Nhuan Dist, HCMC
          </p>
        </div>
        <div className="contact-card">
          <PhoneOutlined className="icon-style" />
          <h3>Phone</h3>
          <p>(+84) 907 303 646</p>
        </div>
        <div className="contact-card">
          <MailOutlined className="icon-style" />
          <h3>Mail</h3>
          <p>Info@power5.vn</p>
        </div>
      </div>
      <div className="contact-us-footer">
        <p>Our customer services team is waiting to assist you</p>
        <p>
          Please allow up to 2- Business days response time in order for us to fully address your
          inquiries
        </p>
        <p>You can also check our new services through our website</p>
      </div>
    </div>
  );
};
export default Contanct;
