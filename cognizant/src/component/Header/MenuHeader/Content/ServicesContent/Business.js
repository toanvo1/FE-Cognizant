import React from 'react';

const Business = () => {
  return (
    <div className="content-wrapper">
      {/* Image Section */}
      <img
        src="https://s3-alpha-sig.figma.com/img/76e5/c4f8/b49121ccadca5c5c5ec3cbc6d842124b?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=erxDWYW0hn2M~otGBIgLmX8PTmCl~rxxx8tl2Djg2ZL0AttbiIkc4yjGBuDzCQjVdGMiGfpk4hIN10UltnUSRhYf1AtEAA1SYCu0GkEMD9e7756SN83YowRanLHkuSfJx5tNUZ2IwUFraoClxkvWaHFA2tO~qmjJwAkc87kEM3KP5oFCjnVnG9od6xmZCCvayEaQXQB-FGNeHZFHd-wJfx4wazqkwYtEtiVnnxAffGNDUiFjuioKoGLV5wmjZvdKQjLNSqOKxa7ODZQhBMBZnCdiiTwYkiR-9QUIVoVoZACbPkD20j-Y6~V~VecsSRVr5Byab1v8ELyA-8S8GE~GNw__"
        alt="Education"
        className="content-image"
      />
      {/* Text Section */}
      <div className="content-inner">
      <h2 className="content-heading">Coworking Space</h2>
      <ul className="content-list">
        <li className="content-list-item">
          Workflow Optimization
        </li>
        <li className="content-list-item">
          Automation Integration
        </li>
        <li className="content-list-item">
          Data-Driven Insights
        </li>
        <li className="content-list-item">
          Risk Management
        </li>
      </ul>
    </div>
    </div>
  );
}

export default Business;
