import React from "react";

const Software = () => {
  return (
    <div className="content-wrapper">
      {/* Image Section */}
      <img
        src="https://onlinecs.baylor.edu/sites/default/files/field/image/Future%20of%20Software_Engineering%20%281%29.jpg"
        alt="Education"
        className="content-image"
      />

      {/* Text Section */}
      <div className="content-inner">
        <h2 className="content-heading">Software Engineering</h2>
        <ul className="content-list">
          <li className="content-list-item">Full Stack Development</li>
          <li className="content-list-item">Cloud-Based Solutions</li>
          <li className="content-list-item">API & Integration Services</li>
          <li className="content-list-item">Ongoing Support & Maintenance</li>
        </ul>
      </div>
    </div>
  );
};

export default Software;
