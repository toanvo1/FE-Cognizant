import React from "react";

const WebDesign = () => {
  return (
    <div className="content-wrapper">
      {/* Image Section */}
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmk7_es1mBhQ7QDbDn8Xzm6jkdUUYqpNmnJg&s"
        alt="Education"
        className="content-image"
      />
      {/* Text Section */}
      <div className="content-inner">
        <h2 className="content-heading">Web Design & Digital Marketing</h2>
        <ul className="content-list">
          <li className="content-list-item">Custom Website Design</li>
          <li className="content-list-item">Responsive Design</li>
          <li className="content-list-item">SEO Optimization</li>
          <li className="content-list-item">Social Media Marketing</li>
          <li className="content-list-item">Email Marketing</li>
          <li className="content-list-item">Analytics & Reporting</li>
        </ul>
      </div>
    </div>
  );
};

export default WebDesign;
