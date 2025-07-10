// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Projects />} />
        {/* other routes later like /scan, /report */}
      </Routes>
    </Router>
  );
}

export default App;
