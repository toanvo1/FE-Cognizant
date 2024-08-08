import React from "react";

const ServiceForm = () => {
  return (
    <div>
      <div className="sidebar">
        <h3>Service Menu</h3>
        <ul>
          <li>
            <button
              onClick={() =>
                document
                  .getElementById("section1")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Service 1
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
              Service 2
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
              Service 3
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ServiceForm;
