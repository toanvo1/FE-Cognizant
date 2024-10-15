import React from 'react';

const Cybersecurity = () => {
  return (
    <div className="content-wrapper">
      {/* Image Section */}
      <img
        src="https://digitalhealth.org.au/wp-content/uploads/2022/03/technology-security-concept-safety-digital-protection-system-1080x675.jpg"
        alt="Education"
        className="content-image"
      />

      {/* Text Section */}
      <div className="content-inner">
      <h2 className="content-heading">Cybersecurity</h2>
        <ul className="content-list">
          <li className="content-list-item">
          Risk Assessment and Management          
          </li>
          <li className="content-list-item">
          Security Consulting
          </li>
          <li className="content-list-item">
          Compliance Support
          </li>
          <li className="content-list-item">
          Threat Detection and Response
          </li>
          <li className="content-list-item">
          Incident Response Planning          
          </li>
        </ul>
    </div>
    </div>
  );
}


export default Cybersecurity;
