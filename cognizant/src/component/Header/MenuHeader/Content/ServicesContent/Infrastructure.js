import React from "react";

const Infrastructure = () => {
  return (
    <div className="content-wrapper">
      {/* Image Section */}
      <img
        src="https://greenparkvp.vn/wp-content/uploads/2022/05/3-1024x576.jpg"
        alt="Education"
        className="content-image"
      />

      {/* Text Section */}
      <div className="content-inner">
        <h2 className="content-heading">Infrastructures</h2>
        <ul className="content-list">
          <li className="content-list-item">
            Data Center Design and Implementation
          </li>
          <li className="content-list-item">High Availability Systems</li>
          <li className="content-list-item">Managed Services</li>
          <li className="content-list-item">Security and Compliance</li>
        </ul>
      </div>
    </div>
  );
};

export default Infrastructure;
