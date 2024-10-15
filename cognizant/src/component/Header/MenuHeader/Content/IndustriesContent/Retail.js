import React from 'react';
import '../../Content/style/Content.css';

const Retail = () => {
  return (
    <div className="content-wrapper">
      {/* Image Section */}
      <img
        src="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/08/retail-la-gi.jpg"
        alt="Education"
        className="content-image"
      />
      {/* Text Section */}
      <div className="content-inner">
      <h2 className="content-heading">Retail</h2>
      <p className="content-paragraph">
        In today’s fast-paced retail environment, a strong online presence is essential for success. Power 5 specializes in building robust,
        user-friendly online store pages that help retailers thrive in the digital marketplace. Whether you’re an established brand or a growing business, 
        we provide the tools and expertise to enhance your e-commerce experience and increase customer engagement.
      </p>
      <ul className="content-list">
        <li className="content-list-item">
          <strong>Easy Product Management:</strong> Manage inventory, pricing, and product listings with
          ease using our intuitive backend system.
        </li>
        <li className="content-list-item">
          <strong>Integrated Payment Solutions:</strong> Offer secure and flexible payment options that
           build customer trust and drive conversions.
        </li>
        <li className="content-list-item">
          <strong>Mobile-Optimized Designs:</strong> SEnsure your store is fully responsive and accessible 
          on any device for a seamless shopping experience.
        </li>
      </ul>
    </div>
    </div>
  );
}

export default Retail;
