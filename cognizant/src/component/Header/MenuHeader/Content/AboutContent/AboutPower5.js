import React, { useState } from "react";
import AboutPower5ui from "./AboutPower5ui";

const AboutPower5 = ({ hideSidebar }) => {
  const [showUI, setShowUI] = useState(false);

  if (showUI) {
    return <AboutPower5ui />;
  }

  return (
    <div
      onClick={() => {
        setShowUI(true);
        hideSidebar();
      }}
    >
      đây là trang About
    </div>
  );
};

export default AboutPower5;
