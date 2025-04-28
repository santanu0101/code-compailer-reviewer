import { Play } from "lucide-react";

export default function CodeEditorHeader() {
  return (
    <div className="flex items-center justify-between px-4 py-2 border-b border-gray-700">
      <div className="flex items-center space-x-4">
        <select className="bg-gray-800 text-white p-2 rounded">
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="cpp">C++</option>
          <option value="java">Java</option>
        </select>
      </div>
      <button className="flex items-center bg-green-600 px-3 py-1 rounded text-white">
        <Play size={16} className="mr-1" /> Run
      </button>
    </div>
  );
}
