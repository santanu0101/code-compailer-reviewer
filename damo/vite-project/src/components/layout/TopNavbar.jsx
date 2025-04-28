import { ArrowLeft, ArrowRight, Maximize2, Play, CheckCircle } from 'lucide-react';

export default function TopNavbar() {
  return (
    <div className="flex justify-between items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
      <div className="flex items-center space-x-4">
        <button className="p-1 rounded hover:bg-gray-700">
          <ArrowLeft size={20} />
        </button>
        <h1 className="font-medium">Problem List</h1>
        <button className="p-1 rounded hover:bg-gray-700">
          <ArrowLeft size={20} />
        </button>
        <button className="p-1 rounded hover:bg-gray-700">
          <ArrowRight size={20} />
        </button>
        <button className="p-1 rounded hover:bg-gray-700">
          <Maximize2 size={20} />
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <button className="bg-green-600 text-white px-4 py-1 rounded flex items-center">
          <Play size={16} className="mr-1" /> Run
        </button>
        <button className="bg-green-600 text-white px-4 py-1 rounded flex items-center">
          <CheckCircle size={16} className="mr-1" /> Submit
        </button>
      </div>
    </div>
  );
}
