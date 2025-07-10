import { useState, useEffect } from "react";
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
          {Array.isArray(projects) &&
            projects.map((proj) => (
              <li
                key={proj.projectId}
                className="bg-gray-100 dark:bg-gray-700 p-4 rounded shadow"
              >
                <h4 className="text-lg font-bold dark:text-white">
                  {proj.name}
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  {proj.description}
                </p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
