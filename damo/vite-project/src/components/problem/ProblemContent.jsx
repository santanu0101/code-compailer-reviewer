import problemDescription from '../../data/problemData';

export default function ProblemContent() {
  return (
    <div className="flex-1 overflow-y-auto p-4">
      <h1 className="text-xl font-bold mb-2">{problemDescription.id}. {problemDescription.title}</h1>
      <div className="flex items-center space-x-2 mb-4">
        <span className="px-2 py-1 bg-green-900 text-green-400 rounded text-sm">{problemDescription.difficulty}</span>
        <button className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-sm">Topics</button>
        <button className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-sm">Companies</button>
        <button className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-sm">Hint</button>
      </div>

      <p className="mb-4">{problemDescription.description}</p>
      <p className="mb-4">{problemDescription.notes}</p>

      {problemDescription.examples.map((example, index) => (
        <div className="mb-4" key={index}>
          <h2 className="font-bold mb-2">Example {index + 1}:</h2>
          <div className="bg-gray-800 p-3 rounded mb-2">
            <div><span className="font-bold">Input:</span> {example.input}</div>
            <div><span className="font-bold">Output:</span> {example.output}</div>
            {example.explanation && (
              <div><span className="font-bold">Explanation:</span> {example.explanation}</div>
            )}
          </div>
        </div>
      ))}

      <div className="mb-4">
        <h2 className="font-bold mb-2">Constraints:</h2>
        <ul className="list-disc pl-5">
          {problemDescription.constraints.map((constraint, index) => (
            <li key={index} className="mb-1">{constraint}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
