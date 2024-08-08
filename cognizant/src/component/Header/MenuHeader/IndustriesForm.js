import React, { useState } from "react";
import "./MenuForm.css";

const IndustriesForm = () => {
  // State để quản lý nội dung đang hiển thị
  const [activeSection, setActiveSection] = useState(null);

  // Nội dung cho các mục trong sidebar
  const sections = {
    section1: "Content for Industry 1",
    section2: "Content for Industry 2",
    section3: "Content for Industry 3",
  };

  return (
    <div className="industries-form">
      <div className="sidebar">
        <h3>Industries Menu</h3>
        <ul>
          {Object.keys(sections).map((key) => (
            <li key={key}>
              <button onClick={() => setActiveSection(key)}>
                {`Industry ${key.slice(-1)}`}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="content">
        {activeSection ? (
          <div>
            <h2>{`Industry ${activeSection.slice(-1)}`}</h2>
            <p>{sections[activeSection]}</p>
          </div>
        ) : (
          <p>Please select an industry from the menu.</p>
        )}
      </div>
    </div>
  );
};

export default IndustriesForm;
