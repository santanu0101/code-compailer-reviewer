import { useState } from 'react';
import TopNavbar from './Layout/TopNavbar';
import BottomBar from './Layout/BottomBar';
import ProblemTabs from './Problem/ProblemTabs';
import ProblemContent from './Problem/ProblemContent';
import CodeEditorHeader from './Editor/CodeEditorHeader';
import CodeEditor from './Editor/CodeEditor';
import TestCaseTabs from './Editor/TestCaseTabs';
import TestCaseContent from './Editor/TestCaseContent';

export default function LeetCodeInterface() {
  const [problemTab, setProblemTab] = useState('description');
  const [testcaseTab, setTestcaseTab] = useState('testcases');

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      <TopNavbar />
      
      <div className="flex flex-1 overflow-hidden">
        {/* Left side - Problem */}
        <div className="w-1/2 flex flex-col border-r border-gray-700">
          <ProblemTabs activeTab={problemTab} setActiveTab={setProblemTab} />
          <ProblemContent />
        </div>

        {/* Right side - Editor */}
        <div className="w-1/2 flex flex-col">
          <CodeEditorHeader />
          <CodeEditor />
          <TestCaseTabs activeTab={testcaseTab} setActiveTab={setTestcaseTab} />
          <TestCaseContent />
        </div>
      </div>

      <BottomBar />
    </div>
  );
}
