import React from 'react';

const Communication = () => {
  return (
    <div className="content-wrapper">
      {/* Image Section */}
      <img
        src="https://s3-alpha-sig.figma.com/img/a70d/3d92/e980f5a03cd6f56058b36bfbe4a0f249?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HV2VwQM3tMh~YEHF~tUK6MwTRuORjGkGRDbbxTwXxuAfb5CnEsK8PT8jVr4GsZ6fYPEtIvLyQSZgT2PuL6o1OPcCjh5EtNKtL97n9b9cqfMtsQ5AAf-S5QvdIU8IWvTaLvL1iATp0dgonAgT85TH2mJeFnJxeuQ5BMoocuaP70FSFT29uanmLeOGoHng~fbyKIw3jueI-KBF3EzUhv2rOt1KnkD5-3afaxR7~i9XL50oAw49wWY2prcav-uAXZ5TMvJNmkw~PWpBrYsHwtNV9F8ZwfgQ7ZD~sS8dqUrPCCEVVTud1AkhFPaUwZHpVCSiF5i0eKcchXSUk0L7zEfMwA__"
        alt="Education"
        className="content-image"
      />


      {/* Text Section */}
      <div className="content-inner">
      <h2 className="content-heading">Communications, Media & Technology</h2>
      <p className="content-paragraph">
        With the rise of new technologies and shifting consumer behaviors, digital transformation is no longer
        optional—it's a necessity. Power 5 offers the expertise and solutions that enable businesses to embrace 
        this transformation and achieve sustainable growth.
      </p>
      <ul className="content-list">
        <li className="content-list-item">
          <strong>Customized IT Solutions:</strong> From cloud migrations to infrastructure management, 
          we offer solutions that grow with your business.
        </li>
        <li className="content-list-item">
          <strong>Expert IT Outsourcing:</strong> With support from our IT experts, you can stay focused on 
          core operations while we manage your IT infrastructure with precision.
        </li>
        <li className="content-list-item">
          <strong>Professional Consulting:</strong> Whether you're looking to streamline operations or 
          adopt new technologies, our consultants provide the strategic guidance you need to succeed.
        </li>
      </ul>
    </div>
    </div>
  );
}

export default Communication;
