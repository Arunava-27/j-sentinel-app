import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProjectForm from "../components/ProjectForm";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      const res = await axios.get("/api/projects");
      console.log("Fetched projects:", res.data); // 🪵 Log the data
      setProjects(res.data); // Make sure this is an array
    } catch (err) {
      console.error("Error fetching projects", err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="p-8">
      <ProjectForm onProjectCreated={fetchProjects} />
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-4 dark:text-white">
          Your Projects
        </h3>
        <ul className="space-y-2">
          {projects.map((proj) => (
            <li
              key={proj.projectId}
              className="bg-gray-100 dark:bg-gray-700 p-4 rounded shadow"
            >
              <Link to={`/projects/${proj.projectId}`}>
                <div className="p-4 bg-gray-800 rounded">
                  <h3>{proj.name}</h3>
                  <p>{proj.description}</p>
                </div>
              </Link>

              {/* 🆕 Scan Upload Form */}
              <form
                className="mt-4"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const fileInput =
                    e.target.elements[`scanFile-${proj.projectId}`];
                  const file = fileInput.files[0];
                  if (!file) return;

                  const formData = new FormData();
                  formData.append("file", file);
                  formData.append("projectId", proj.projectId);

                  try {
                    const res = await axios.post("/api/scan/start", formData, {
                      headers: {
                        "Content-Type": "multipart/form-data",
                      },
                    });
                    console.log("Scan started:", res.data);
                    alert("Scan started successfully!");
                  } catch (err) {
                    console.error("Failed to start scan:", err);
                    alert("Failed to start scan.");
                  }
                }}
              >
                <input
                  type="file"
                  name={`scanFile-${proj.projectId}`}
                  className="mb-2 block text-sm"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
                >
                  Start Scan
                </button>
                <button
                  onClick={async () => {
                    if (confirm("Delete this project?")) {
                      try {
                        await axios.delete(`/api/projects/${proj.projectId}`);
                        fetchProjects();
                      } catch (err) {
                        console.error("Delete failed:", err);
                      }
                    }
                  }}
                  className="ml-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </form>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
