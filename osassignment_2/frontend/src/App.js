import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import logo from "./assets/logo.png";

import "./App.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
  <img src={logo} alt="College Logo" className="logo-img" />
</div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/work">Work</Link>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="home-container">
      <img
  src={logo}
  alt="College"
/>

      <h2>ABES Engineering College</h2>
    </div>
  );
}

function Work() {
  const [result, setResult] = useState("");

  const fetchData = async (endpoint) => {
    try {
      const response = await fetch(`http://localhost:5000/${endpoint}`);
      const data = await response.json();
      setResult(JSON.stringify(data, null, 2));
    } catch (error) {
      setResult("Error connecting to backend");
    }
  };

  return (
    <div className="work-container">
      <h2>OS with React</h2>

      <div className="button-group">
        <button onClick={() => fetchData("userinfo")}>User Info</button>
        <button onClick={() => fetchData("architecture")}>Architecture</button>
        <button onClick={() => fetchData("hostname")}>Hostname</button>
        <button onClick={() => fetchData("totalmemory")}>Total Memory</button>
        <button onClick={() => fetchData("freememory")}>Free Memory</button>
      </div>

      <pre className="result-box">{result}</pre>
    </div>
  );
}


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </Router>
  );
}

export default App;
