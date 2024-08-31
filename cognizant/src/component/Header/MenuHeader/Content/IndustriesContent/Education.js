import React from 'react';
import '../../Content/style/Content.css';

const Education = () => {
  return (
    <div className="content-wrapper">
      {/* Image Section */}
      <img
        src="https://s3-alpha-sig.figma.com/img/31b5/6f89/320e682a1f11a78518b925ca976b9b9d?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eNSvjsg-oMfyGHq901qL9u9ru6m4pO8dt~PlWkxn0Sy4rTvAFUOrzR5Ey36fM~VzCS1h5gkh7Q0h7jpqEDenVo8PwcUrEvi3QHr9QBF7drtbmoMnnK4u-2UGfjQp1FFbhVf1NSwgYowpB~w8gK0P4DvWo573C9wBVUYBG0fTnQySUiWphcYUTuuR9mF2iLXvYx8H5q7QJXZEJG4FU8s1wp5TTgvBM4~MhmAQm6yLc6HPlLH2qNgCbro98C8iH~Td91sgF7lNq6wcV2mDYRWI8usgznbsGdwNvmYWg6Ao-zWB68O3rnMlQuxDJqAopQOpUtZ2Gh1al4ucI~78neQbMg__"
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
