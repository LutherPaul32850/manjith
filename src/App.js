import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Certifications from "./components/Certifications";
import CodingPlatforms from "./components/CodingPlatforms";
import "./styles.css"; // ✅ Include the CSS file
import 'font-awesome/css/font-awesome.min.css';
function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <ul className="nav-list">
            <li><Link to="/" className="nav-item">Home</Link></li>
            <li><Link to="/certifications" className="nav-item">Certifications</Link></li>
            <li><Link to="/coding-platforms" className="nav-item">Coding Platforms</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/coding-platforms" element={<CodingPlatforms />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
