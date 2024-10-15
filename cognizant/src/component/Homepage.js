import React from "react";
import Banner from "./Banner/Banner";


const HomePage = ({ showBannerAndFooter }) => {
  return (
    <>
      {showBannerAndFooter && (
        <div>
          <Banner />
        </div>
      )}
      {showBannerAndFooter && (
        <div>
          {/* <Footer /> */}
        </div>
      )}
    </>
  );
};

export default HomePage;
