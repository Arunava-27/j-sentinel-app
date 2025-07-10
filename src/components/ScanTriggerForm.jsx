import { useState } from 'react';
import axios from 'axios';

const ScanTriggerForm = ({ projectId, onScanTriggered }) => {
  const [sourceDir, setSourceDir] = useState('');
  const [rulesDir, setRulesDir] = useState('');

  const handleScan = async () => {
    try {
      await axios.post('/api/scans', { projectId, sourceDir, rulesDir });
      onScanTriggered?.(); // to refresh scan list
    } catch (err) {
      console.error('Scan failed', err);
    }
  };

  return (
    <div className="mt-4">
      <input type="text" placeholder="Source Directory" value={sourceDir} onChange={e => setSourceDir(e.target.value)} />
      <input type="text" placeholder="Rules Directory" value={rulesDir} onChange={e => setRulesDir(e.target.value)} />
      <button onClick={handleScan}>Start Scan</button>
    </div>
  );
};

export default ScanTriggerForm;