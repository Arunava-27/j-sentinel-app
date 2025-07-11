// src/pages/ProjectDetails.jsx
import { useParams } from "react-router-dom";
import ScanTriggerForm from "../components/ScanTriggerForm";
import axios from "axios";

function ProjectDetails() {
  const { id: projectId } = useParams(); // ✅ grab ID from URL

  const refreshScans = () => {
    // reload
    console.log("Scans refreshed for project:", projectId);
    // You can implement your logic to refresh scans here, e.g., fetching from an API
    // axios.get(`/api/scans/${projectId}`).then(res => console.log(res.data));
    console.log("Refreshing scans for project:", projectId);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Project Details</h1>
      <ScanTriggerForm
        projectId={projectId}
        onScanTriggered={() => console.log("Scan triggered")}
      />
      <button
        onClick={async () => {
          if (confirm("Delete this scan?")) {
            await axios.delete(`/api/scans/${projectId}`);
            refreshScans(); // your reload method
          }
        }}
        className="text-sm text-red-600 ml-2"
      >
        Delete Scan
      </button>
    </div>
  );
}

export default ProjectDetails;
