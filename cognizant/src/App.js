import React, { useState } from "react";
import "./App.css";
import Headers from "./component/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./component/Homepage";
import Footer from "./component/Footer/Footer";

function App() {
  const [showBannerAndFooter, setShowBannerAndFooter] = useState(true);

  // Hàm để cập nhật trạng thái hiển thị
  const toggleBannerAndFooter = (status) => {
    setShowBannerAndFooter(status);
  };

  return (
    <Router>
      <div className="app">
        {/* Truyền hàm toggle và trạng thái showBannerAndFooter vào Header */}
        <Headers toggleBannerAndFooter={toggleBannerAndFooter} />
        <Routes>
          {/* Truyền trạng thái vào HomePage */}
          <Route
            path="/"
            element={<HomePage showBannerAndFooter={showBannerAndFooter} />}
          />
          
        </Routes>
        {showBannerAndFooter && <Footer />}
      </div>
    </Router>
  );
}

export default App;
