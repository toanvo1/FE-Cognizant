import React from 'react';
import '../../Content/style/Content.css';

const Retail = () => {
  return (
    <div className="content-wrapper">
      {/* Image Section */}
      <img
        src="https://s3-alpha-sig.figma.com/img/ba51/d7b7/53116913d15719c91f8fdcadad119453?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AaNsYlrxfJLtPOv9NGIWfFUu9s4ONVG3S1L6TguUgjg-1BA3RkzhRa7A~uCcI5Iox1gsw4dsMeGYSm-KbH7kWa7~NkqG55hSJasHEfgeCQuJGGw2968w8FO6SIhSKtDjPVqFtGIj4z6zV54I8GgBMYnAMjbz32PQrIU7Y2lJnA82E93N8WIZ2PCdrxWhu0f0SGJE-x1OlwJ468N21pv92rSud~E9Td98yefi-66nI35Tu74gGaP7TuFPNhayt9B033qxGedC0fuwhJteqVG9BxM8AEihdpFCogG~X8-2VW1xYc4JZwEqHzhEcrycglZRpiQfRx-RPbLYjE3wxKB17Q__"
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
