import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import { useDarkMode } from "./context/darkModeContext";

function App() {
  const { darkModeEnabled } = useDarkMode();
  return (
    <div className="App">
      <div className={darkModeEnabled ? "dark" : ""}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
