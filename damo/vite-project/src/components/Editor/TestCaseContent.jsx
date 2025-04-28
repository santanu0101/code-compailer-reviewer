import testCases from '../../data/testCaseData';

export default function TestCaseContent() {
  return (
    <div className="flex-1 overflow-y-auto p-4">
      <h2 className="text-lg font-semibold mb-4">Testcases</h2>
      {testCases.map((testCase, index) => (
        <div key={index} className="bg-gray-800 p-4 mb-4 rounded">
          <div><span className="font-bold">Input:</span> {testCase.nums}, Target: {testCase.target}</div>
        </div>
      ))}
    </div>
  );
}
