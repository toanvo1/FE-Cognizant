import React from 'react';

const Cybersecurity = () => {
  return (
    <div className="content-wrapper">
      {/* Image Section */}
      <img
        src="https://s3-alpha-sig.figma.com/img/29f6/7804/dc69f005dc552e5a61fef3f9f0889ee0?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wo7Ztq6s1mwVdDfPw~dswUIquV8pmm5HXtbjP5Aud-KYvMRqq2Yg6VchiRBsBNcz1TXcdc-jOEhF~VAydVFDPa204Wt0DPmB2FCRwt-r4gEzI4ftZ93Iu-weIJMwesiyQcrbxSTnRfiU~7xKTLLgORpjqNBil-xfZpHynACgQXHKpM0hzbNUz-wBczs-NJrgT~EP0Gitj-QPraPKCJrC9KAXLrO7v3aiF4ss4-7oLmPgyGAdIfs8GjfvIkcv5n4N7GijgDChXxXVKKETzO8NgKvDltPQuV8DDF-0VT-Ja-kzj7fb34j~WI85sEgnNT2rDUfhTlrkVTC0id6tr5QQtA__"
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
