import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import Temperature from "../pages/temperature";

function App() {
  return (
    <Router>
      <nav style={{ padding: "10px", background: "#eeeeee" }}>
        <Link to="/" style={{ margin: "0 10px" }}>home</Link>
        <Link to="/about" style={{ margin: "0 10px" }}>about</Link>
        <Link to="/contact" style={{ margin: "0 10px" }}>contact</Link>
        <Link to="/temperature" style={{ margin: "0 10px" }}>current house</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/temperature" element={<Temperature />} />
      </Routes>
    </Router>
  );
}

export default App;