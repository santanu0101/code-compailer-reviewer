import { List } from 'lucide-react';

export default function TestCaseTabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex border-b border-gray-700">
      <button 
        className={`px-4 py-2 flex items-center ${activeTab === 'testcases' ? 'border-b-2 border-blue-500' : ''}`}
        onClick={() => setActiveTab('testcases')}
      >
        <List size={16} className="mr-2" /> Testcases
      </button>
    </div>
  );
}
