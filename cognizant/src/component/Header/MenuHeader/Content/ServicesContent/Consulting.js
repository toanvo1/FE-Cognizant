import React from 'react';
import '../../Content/style/Content.css';
const Consulting = () => {
  return (
    <div className="content-wrapper">
      {/* Image Section */}
      <img
        src="https://s3-alpha-sig.figma.com/img/e97e/b40d/ad0e508e9a6f961b888ed64e917c4e7a?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ErOUkXp5ktoPrne6UiJHnSK568eMa9JltnbaMZsGbMJ0ydutpGzgcQUk0c9~6z~ZP1ruqUR4k~ympv8XvBaIo5GYo-cEZoTiGp~0uYRM~QAl4SZ-UCmso8mTv-TVMW-vKwclJSZf4qT2KrDZ66DKtVfIB2Nk4yCLjgssAZ6Avi2IE8cNa8iM84VFHXym6skgF6ykqBN5MSIdRFeLx~CIczq7IxxFkb~Jsjcm0S9ZbxNW0R0cjJEU5-lvrQ-0n0RWUFc4QsJ1oSi-tJawkkpOCp1USyDE5VLxVqnzXMjxfJE32NWWNY-geRN4PUVyje9IdypbxDzzLTVYi8ZhhlD-fw__"
        alt="Education"
        className="content-image"
      />


      {/* Text Section */}
      <div className="content-inner">
      <h2 className="content-heading">Accounting</h2>
      <ul className="content-list">
        <li className="content-list-item">
          IT Strategy and Planning
        </li>
        <li className="content-list-item">
          System Integration
        </li>
        <li className="content-list-item">
          Cybersecurity Advisory
        </li>
        <li className="content-list-item">
          Digital Transformation
        </li>
        <li className="content-list-item">
          Project Management and IT Governance
        </li>
      </ul>
    </div>
    </div>
  );
}

export default Consulting;
