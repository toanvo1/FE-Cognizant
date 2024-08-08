import "./App.css";
import Headers from "./component/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Sửa import ở đây
import Footer from "./component/Footer/Footer";
import HomePage from "./component/Homepage";

function App() {
  return (
    <Router>
      <div className="app">
        <Headers />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
