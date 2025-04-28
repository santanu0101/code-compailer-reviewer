import { useState } from 'react';
import { ArrowLeft, ArrowRight, Maximize2, Play, CheckCircle, FileText, MessageSquare, Send } from 'lucide-react';

export default function LeetCodeInterface() {
  const [activeTab, setActiveTab] = useState('description');
  const [language, setLanguage] = useState('JavaScript');
  const [activeTestCase, setActiveTestCase] = useState(1);
  
  const problemDescription = {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    notes: "You may assume that each input would have exactly one solution, and you may not use the same element twice.\n\nYou can return the answer in any order.",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] = 9, we return [0, 1]."
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]"
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]"
      }
    ],
    constraints: [
      "2 <= nums.length <= 10^4",
      "-10^9 <= nums[i] <= 10^9",
      "-10^9 <= target <= 10^9",
      "Only one valid answer exists."
    ]
  };

  const codeTemplate = `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
};`;

  const testCases = [
    { nums: "[2,7,11,15]", target: "9" },
    { nums: "[3,2,4]", target: "6" },
    { nums: "[3,3]", target: "6" }
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-gray-200">
      {/* Top Navigation Bar */}
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

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel */}
        <div className="w-1/2 border-r border-gray-700 flex flex-col">
          {/* Tabs */}
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

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4">
            <h1 className="text-xl font-bold mb-2">{problemDescription.id}. {problemDescription.title}</h1>
            <div className="flex items-center space-x-2 mb-4">
              <span className="px-2 py-1 bg-green-900 text-green-400 rounded text-sm">{problemDescription.difficulty}</span>
              <button className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-sm flex items-center">
                Topics
              </button>
              <button className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-sm flex items-center">
                Companies
              </button>
              <button className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-sm flex items-center">
                Hint
              </button>
            </div>

            <p className="mb-4">{problemDescription.description}</p>
            <p className="mb-4">{problemDescription.notes}</p>

            <div className="mb-4">
              <h2 className="font-bold mb-2">Example 1:</h2>
              <div className="bg-gray-800 p-3 rounded mb-2">
                <div><span className="font-bold">Input:</span> {problemDescription.examples[0].input}</div>
                <div><span className="font-bold">Output:</span> {problemDescription.examples[0].output}</div>
                <div><span className="font-bold">Explanation:</span> {problemDescription.examples[0].explanation}</div>
              </div>
            </div>

            <div className="mb-4">
              <h2 className="font-bold mb-2">Example 2:</h2>
              <div className="bg-gray-800 p-3 rounded mb-2">
                <div><span className="font-bold">Input:</span> {problemDescription.examples[1].input}</div>
                <div><span className="font-bold">Output:</span> {problemDescription.examples[1].output}</div>
              </div>
            </div>

            <div className="mb-4">
              <h2 className="font-bold mb-2">Example 3:</h2>
              <div className="bg-gray-800 p-3 rounded mb-2">
                <div><span className="font-bold">Input:</span> {problemDescription.examples[2].input}</div>
                <div><span className="font-bold">Output:</span> {problemDescription.examples[2].output}</div>
              </div>
            </div>

            <div className="mb-4">
              <h2 className="font-bold mb-2">Constraints:</h2>
              <ul className="list-disc pl-5">
                {problemDescription.constraints.map((constraint, index) => (
                  <li key={index} className="mb-1">{constraint}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-1/2 flex flex-col">
          {/* Code Editor Header */}
          <div className="flex justify-between items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
            <div className="flex items-center">
              <span className="mr-2">Code</span>
              <select 
                className="bg-gray-700 px-2 py-1 rounded text-sm"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="JavaScript">JavaScript</option>
                <option value="Python">Python</option>
                <option value="Java">Java</option>
                <option value="C++">C++</option>
              </select>
            </div>
          </div>

          {/* Code Editor */}
          <div className="flex-1 bg-gray-900 overflow-y-auto">
            <div className="p-4 font-mono text-sm">
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-1 text-right text-gray-500">
                  {Array.from({ length: 8 }, (_, i) => i + 1).map(num => (
                    <div key={num}>{num}</div>
                  ))}
                </div>
                <div className="col-span-11">
                  <pre className="whitespace-pre-wrap text-gray-300">
                    {codeTemplate}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Test Cases */}
          <div className="border-t border-gray-700">
            <div className="flex border-b border-gray-700">
              <button 
                className={`px-4 py-2 ${activeTab === 'testcase' ? 'border-b-2 border-blue-500' : ''}`}
              >
                Testcase
              </button>
              <button 
                className={`px-4 py-2 ${activeTab === 'result' ? 'border-b-2 border-blue-500' : ''}`}
              >
                Test Result
              </button>
            </div>

            {/* Test Case Tabs */}
            <div className="flex border-b border-gray-700">
              {[1, 2, 3].map(caseNum => (
                <button 
                  key={caseNum}
                  className={`px-4 py-2 ${activeTestCase === caseNum ? 'bg-gray-700' : ''}`}
                  onClick={() => setActiveTestCase(caseNum)}
                >
                  Case {caseNum}
                </button>
              ))}
              <button className="px-4 py-2">+</button>
            </div>

            {/* Test Case Input */}
            <div className="p-4">
              <div className="mb-4">
                <div className="text-gray-500 mb-1">nums =</div>
                <div className="bg-gray-800 rounded p-2 border border-gray-700">
                  {testCases[activeTestCase - 1].nums}
                </div>
              </div>
              <div>
                <div className="text-gray-500 mb-1">target =</div>
                <div className="bg-gray-800 rounded p-2 border border-gray-700">
                  {testCases[activeTestCase - 1].target}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-between items-center px-4 py-2 bg-gray-800 border-t border-gray-700">
        <div className="flex items-center text-sm">
          <button className="mr-4 flex items-center">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-1"></span>
            1973 Online
          </button>
          <button className="mr-4">61.3K</button>
          <button className="mr-4">1.3K</button>
        </div>
        <div>
          <button className="px-4 py-1 bg-gray-700 rounded text-sm">
            Source
          </button>
        </div>
      </div>
    </div>
  );
}