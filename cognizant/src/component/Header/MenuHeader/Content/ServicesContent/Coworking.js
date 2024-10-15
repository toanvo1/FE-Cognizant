import React from "react";

const Coworking = () => {
  return (
    <div className="content-wrapper">
      {/* Image Section */}
      <img
        src="https://replus.com.vn/wp-content/uploads/2019/03/coworking-space-va-nhung-dieu-ban-can-biet-1.jpg"
        alt="Education"
        className="content-image"
      />

      {/* Text Section */}
      <div className="content-inner">
        <h2 className="content-heading">Coworking Space</h2>
        <ul className="content-list">
          <li className="content-list-item">Fully Furnished Spaces</li>
          <li className="content-list-item">Meeting Rooms & Private Areas</li>
          <li className="content-list-item">High-Speed Internet</li>
          <li className="content-list-item">Complimentary Amenities</li>
        </ul>
      </div>
    </div>
  );
};

export default Coworking;
