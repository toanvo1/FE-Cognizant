import React from "react";
import "../../Content/style/Content.css";
const Consulting = () => {
  return (
    <div className="content-wrapper">
      {/* Image Section */}
      <img
        src="https://kantata.marketing/wp-content/uploads/2021/08/consulting-firm-project-management.jpg"
        alt="Education"
        className="content-image"
      />

      {/* Text Section */}
      <div className="content-inner">
        <h2 className="content-heading">Consulting</h2>
        <ul className="content-list">
          <li className="content-list-item">IT Strategy and Planning</li>
          <li className="content-list-item">System Integration</li>
          <li className="content-list-item">Cybersecurity Advisory</li>
          <li className="content-list-item">Digital Transformation</li>
          <li className="content-list-item">
            Project Management and IT Governance
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Consulting;
