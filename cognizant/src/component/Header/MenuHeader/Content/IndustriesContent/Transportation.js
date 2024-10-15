import React from 'react';
import '../../Content/style/Content.css';

const Transportation = () => {
  return (
    <div className="content-wrapper">
      {/* Image Section */}
      <img
        src="https://www..edu.in/public/uploads/media/EOjNIcORfcfK3oKPWFRLy4ditDEz65ESmuliSjQY.webp"
        alt="Education"
        className="content-image"
      />
      {/* Text Section */}
      <div className="content-inner">
      <h2 className="content-heading">Communications, Media & Technology</h2>
      <p className="content-paragraph">
        With the rise of new technologies and shifting consumer behaviors, digital transformation is no longer
        optional—it's a necessity. Power 5 offers the expertise and solutions that enable businesses to embrace 
        this transformation and achieve sustainable growth.
      </p>
      <ul className="content-list">
        <li className="content-list-item">
          <strong>Customized IT Solutions:</strong> From cloud migrations to infrastructure management, 
          we offer solutions that grow with your business.
        </li>
        <li className="content-list-item">
          <strong>Expert IT Outsourcing:</strong> With support from our IT experts, you can stay focused on 
          core operations while we manage your IT infrastructure with precision.
        </li>
        <li className="content-list-item">
          <strong>Professional Consulting:</strong> Whether you're looking to streamline operations or 
          adopt new technologies, our consultants provide the strategic guidance you need to succeed.
        </li>
      </ul>
    </div>
    </div>
  );
}

export default Transportation;
