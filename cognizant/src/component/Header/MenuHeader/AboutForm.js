import React from "react";

const AboutForm = () => {
  return (
    <div>
      <div className="sidebar">
        <h3>About Menu</h3>
        <ul>
          <li>
            <button
              onClick={() =>
                document
                  .getElementById("section1")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              About 1
            </button>
          </li>
          <li>
            <button
              onClick={() =>
                document
                  .getElementById("section2")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              About 2
            </button>
          </li>
          <li>
            <button
              onClick={() =>
                document
                  .getElementById("section3")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              About 3
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutForm;
