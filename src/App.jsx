// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import SidebarLayout from "./layout/SidebarLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<SidebarLayout />}>
          <Route path="/" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
