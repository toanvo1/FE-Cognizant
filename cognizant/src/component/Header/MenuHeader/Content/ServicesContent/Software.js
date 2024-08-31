import React from 'react';

const Software = () => {
  return (
    <div className="content-wrapper">
      {/* Image Section */}
      <img
        src="https://s3-alpha-sig.figma.com/img/db93/48dc/df76d2989fcd511e6440f4a5e5e4190f?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ngQIyqBezkmw5ZJ25TAFAXrqlUNP~6eLCsoP5g~5iF0dTWoIBK6~TLKuSPrnsiLEgnhfJRoEfpRBI03rZoKs1UPo4l1FJBWAqZc0Z6SpH9mD7IzyE3s88Dr6fFp5I0KDl5FkoykAC6cbfcVadSmRimtxQ0ows5XaLtpo7heFhUBi5K0xG4nQ0Bgbt0NexYGiAYzkUZl1FHmGKuDYn4-fN-3As4q6hUpUMuIdOAbC3COER99yyJNMAxFLScvm8IR0EcsRoz5mIWBQyyb2K-w0l3UM-1~RQkPOXq9iZaZ54u6teOUxuY29jVc-Xu6Oqjj49WZaO8o9I7mIwYIMbZvMMg__"
        alt="Education"
        className="content-image"
      />

      {/* Text Section */}
      <div className="content-inner">
        <h2 className="content-heading">Software Engineering</h2>
      <ul className="content-list">
          <li className="content-list-item">
            Full Stack Development
          </li>
          <li className="content-list-item">
            Cloud-Based Solutions
          </li>
          <li className="content-list-item">
            API & Integration Services
          </li>
          <li className="content-list-item">
            Ongoing Support & Maintenance
          </li>
      </ul>
    </div>
    </div>
  );
}

export default Software;
