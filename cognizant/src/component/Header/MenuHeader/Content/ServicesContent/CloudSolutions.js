import React from 'react';
import '../../Content/style/Content.css';

const CloudSolution = () => {
  return (
    <div className="content-wrapper">
      {/* Image Section */}
      <img
        src="https://www.freshbooks.com/wp-content/uploads/2022/02/8-branches-of-accounting.jpg"
        alt="Education"
        className="content-image"
      />


      {/* Text Section */}
      <div className="content-inner">
      <h2 className="content-heading">Accounting</h2>
      <ul className="content-list">
        <li className="content-list-item">
          Bookkeeping & Financial Record Maintenance
        </li>
        <li className="content-list-item">
          Tax Preparation & Filing
        </li>
        <li className="content-list-item">
          Financial Reporting
        </li>
        <li className="content-list-item">
          Payroll Management
        </li>
      </ul>
    </div>
    </div>
  );
}

export default CloudSolution;
