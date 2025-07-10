// src/components/ProjectForm.jsx
import React, { useState } from "react";
import axios from "axios";

const ProjectForm = ({ onProjectCreated }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/projects/create", { name, description });
      onProjectCreated && onProjectCreated(response.data);
      setName("");
      setDescription("");
    } catch (error) {
      console.error("Failed to create project", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 p-6 rounded shadow-md w-full max-w-md"
    >
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Create New Project</h2>
      <input
        type="text"
        placeholder="Project Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full p-2 mb-4 border rounded dark:bg-gray-700 dark:text-white"
      />
      <textarea
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 mb-4 border rounded dark:bg-gray-700 dark:text-white"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
      >
        Create
      </button>
    </form>
  );
};

export default ProjectForm;
