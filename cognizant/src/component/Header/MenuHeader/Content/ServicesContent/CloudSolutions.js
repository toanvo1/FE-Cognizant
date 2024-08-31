import React from 'react';
import '../../Content/style/Content.css';

const CloudSolution = () => {
  return (
    <div className="content-wrapper">
      {/* Image Section */}
      <img
        src="https://s3-alpha-sig.figma.com/img/e99d/d713/fb224413af0099a09c53729938b2983a?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HqIu~MwY7gX6CxIeO8QWf4KTXXC-MVf3ciSI8JbAHcpZ-~zI0kHmwL5t-FrSz5jXpheIazyVquFbY3BNUBtvFw7xoUL2Zhil08E9Ov3MR~JMAbrqkfEq5tEYB5kZhoLa87XJfUsGEIxxhfM0iuBZAQxlkeYrTFXRQFjNSH0wwy0pNJVbuB7VOfskJCS2VvINsgvTgruWWQW3LGx~SJy4X5pA~1LVcqDY-JBaJDzhYs916eg7KJhaK3~m3nX01Qw-JxkIBtVY1PJC98c-BCNoV~vVxWj62HNH0~9sk7HiExjilRKULAR4iA4Qvu-wogVB15IzViZ5jbIBUSLFCT8N1Q__"
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
