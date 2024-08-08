import React from "react";

const InsightsForm = () => {
  return (
    <div>
      <div className="sidebar">
        <h3>Insights Menu</h3>
        <ul>
          <li>
            <button
              onClick={() =>
                document
                  .getElementById("section1")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Insight 1
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
              Insight 2
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
              Insight 3
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InsightsForm;
