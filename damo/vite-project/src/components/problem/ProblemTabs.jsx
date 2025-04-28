import { FileText, MessageSquare } from 'lucide-react';

export default function ProblemTabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex border-b border-gray-700">
      <button 
        className={`px-4 py-2 flex items-center ${activeTab === 'description' ? 'border-b-2 border-blue-500' : ''}`}
        onClick={() => setActiveTab('description')}
      >
        <FileText size={16} className="mr-2" /> Description
      </button>
      <button 
        className={`px-4 py-2 flex items-center ${activeTab === 'editorial' ? 'border-b-2 border-blue-500' : ''}`}
        onClick={() => setActiveTab('editorial')}
      >
        <MessageSquare size={16} className="mr-2" /> Editorial
      </button>
      <button 
        className={`px-4 py-2 flex items-center ${activeTab === 'solutions' ? 'border-b-2 border-blue-500' : ''}`}
        onClick={() => setActiveTab('solutions')}
      >
        <FileText size={16} className="mr-2" /> Solutions
      </button>
    </div>
  );
}
