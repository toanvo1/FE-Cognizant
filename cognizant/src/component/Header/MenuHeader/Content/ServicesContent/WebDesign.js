import React from 'react'

const WebDesign = () => {
  return (
    <div className="content-wrapper">
      {/* Image Section */}
      <img
        src="https://s3-alpha-sig.figma.com/img/6489/5fea/607feaadc27955db9c20d02d890de033?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SxMvIuCwuE4E1BCLPTJy36cx7eqzxScwM9MIaGyaMaW1pV8AEziyqji6JPVIdDbyl8oT7F-EAb3qbefjojwjt0JYHZeylYkBLpBNd4COiXT4Tx5FJ-pNjOP-FO3-a7IC64HZ4LyFlKEf8GEOshT2xYifMpEN95JXWQjXTZ71VtMmLywqgnQW2AyD2lG-R0bm2cdwGLZo-QJjbGUipbaJ3LQaQHa~GEAXGrJOwnWxJqdH00b9Ld6N98AWtcBqenRC7H9qjPBqVuTuQ4qmnDT~ZhPDinKYIeHM5S8gugcfJSYZixyhD7LHGTinVJCKS6SIEonxZ7gESIhD5SQykjSBIA__"
        alt="Education"
        className="content-image"
      />
      {/* Text Section */}
      <div className="content-inner">
      <h2 className="content-heading">Web Design & Digital Marketing</h2>
      <ul className="content-list">
        <li className="content-list-item">
          Custom Website Design        
        </li>
        <li className="content-list-item">
          Responsive Design
        </li>
        <li className="content-list-item">
          SEO Optimization
        </li>
        <li className="content-list-item">
          Social Media Marketing
        </li>
        <li className="content-list-item">
          Email Marketing
        </li>
        <li className="content-list-item">
          Analytics & Reporting
        </li>
      </ul>
    </div>
    </div>
  );
}

export default WebDesign
