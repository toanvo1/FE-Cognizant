import React from 'react';
import '../../Content/style/Content.css';

const Education = () => {
  return (
    <div className="content-wrapper">
      {/* Image Section */}
      <img
        src="https://www.21kschool.com/vn/wp-content/uploads/sites/5/2021/01/rptgtpxd-1396254731.jpg"
        alt="Education"
        className="content-image"
      />


      {/* Text Section */}
      <div className="content-inner">
      <h2 className="content-heading">Education</h2>
      <p className="content-paragraph">
        In today's fast-evolving educational landscape, technology plays a crucial role in enhancing
        the learning experience for students, educators, and administrators alike. Power 5 offers
        Learning Management System (LMS) solutions that are designed to streamline education delivery,
        improve engagement, and ensure seamless management of learning resources.
      </p>
      <ul className="content-list">
        <li className="content-list-item">
          <strong>Customizable Learning Platforms:</strong> Tailored to meet the needs of diverse educational
          institutions, from K-12 to higher education and corporate training.
        </li>
        <li className="content-list-item">
          <strong>Scalable Solutions:</strong> Whether for small classes or large institutions, our systems
          grow with your organization’s needs.
        </li>
        <li className="content-list-item">
          <strong>Integration Capabilities:</strong> Seamlessly integrate with existing tools, databases, and
          educational technologies.
        </li>
      </ul>
    </div>
    </div>
  );
}

export default Education;
