// src/pages/ProjectDetails.jsx
import { useParams } from "react-router-dom";
import ScanTriggerForm from "../components/ScanTriggerForm";

function ProjectDetails() {
  const { id: projectId } = useParams(); // ✅ grab ID from URL

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Project Details</h1>
      <ScanTriggerForm projectId={projectId} onScanTriggered={() => console.log("Scan triggered")} />
    </div>
  );
}

export default ProjectDetails;
