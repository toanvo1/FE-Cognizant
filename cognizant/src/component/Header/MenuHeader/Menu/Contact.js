import React, { useState } from "react";
import { EnvironmentOutlined, PhoneOutlined, MailOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import "./Contact.css";
import backgroundImage from '../../../../image/contactUs.png'; // Adjust the path accordingly

const Contact = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showMap = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="contact-us-container">
      <div className="contact-us-header" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <h2>FOR NEW WORKING EXPERIENCE</h2>
        <h1>CONTACT US</h1>
      </div>
      <div className="contact-us-cards">
        <div className="contact-card" onClick={showMap}>
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
        <p style={{ fontWeight: "bold" }}>Our customer services team is waiting to assist you</p>
        <p>Please allow up to 2- Business days response time in order for us to fully address your inquiries</p>
        <p>You can also check our new services through our website</p>
      </div>

      <Modal title="Our Location" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <div className="map-container">
          <iframe
            src="https://www.google.gg/maps/place/Ph%C6%B0%E1%BB%9Dng+7+Ph%C3%BA+Nhu%E1%BA%ADn,+Ph%C6%B0%E1%BB%9Dng+7,+Ph%C3%BA+Nhu%E1%BA%ADn,+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam/@10.8028711,106.6889026,19z/data=!3m1!4b1!4m6!3m5!1s0x317528c5227901c9:0xec6f0dbb33f10779!8m2!3d10.8028711!4d106.6895463!16s%2Fg%2F11k3p1_w50?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
            width="100%"
            height="450"
            style={{ borderRadius: "15px", border: "1px solid #2D947A" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
            className="contact-map"
          ></iframe>
        </div>
      </Modal>
    </div>
  );
};

export default Contact;
