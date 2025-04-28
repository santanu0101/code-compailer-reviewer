import React, { useState, useEffect } from 'react';
import "./OnlineCompiler.css"

// Main App Component
function OnlineCompiler({ language = "JavaScript" }) {
  const [code, setCode] = useState('//write code here .....');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [review, setReview] = useState('');
  const [isOutputLoading, setIsOutputLoading] = useState(false);
  const [isReviewLoading, setIsReviewLoading] = useState(false);

  const handleRunCode = () => {
    setIsOutputLoading(true);
    setOutput('');
    
    // Simulating code execution with a timeout
    setTimeout(() => {
      setOutput(`Output of executed code:\n${code}\n\nWith input:\n${input}`);
      setIsOutputLoading(false);
    }, 1500);
  };

  const handleReviewCode = () => {
    setIsReviewLoading(true);
    setReview('');
    
    // Simulating AI review with a timeout
    setTimeout(() => {
      setReview(`AI Review for your code:\n- Good structure\n- Consider optimizing the algorithm\n- Add more comments for clarity`);
      setIsReviewLoading(false);
    }, 2000);
  };

  return (
    <div className="compiler-container">
      <Header language={language} />
      <div className="main-content">
        <CodeEditor code={code} setCode={setCode} />
        <OutputSection output={output} isLoading={isOutputLoading} />
      </div>
      <InputSection input={input} setInput={setInput} />
      <ReviewSection review={review} isLoading={isReviewLoading} />
      <ActionButtons onRun={handleRunCode} onReview={handleReviewCode} />
    </div>
  );
}

// Header Component
function Header({ language }) {
  return (
    <div className="header">
      <h1>Online Compiler & AI Code Reviewer</h1>
      <div className="language-selector">
        <span>Language:</span>
        <select defaultValue={language}>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="Java">Java</option>
          <option value="C++">C++</option>
        </select>
      </div>
    </div>
  );
}

// Code Editor Component
function CodeEditor({ code, setCode }) {
  return (
    <div className="code-editor-container">
      <div className="section-title">Code Editor</div>
      <textarea
        className="code-editor"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        spellCheck="false"
      />
    </div>
  );
}

// Output Section Component
function OutputSection({ output, isLoading }) {
  return (
    <div className="output-container">
      <div className="section-title">Output</div>
      <div className="output-content">
        {isLoading ? (
          <LoadingIndicator text="Running your code..." />
        ) : (
          output || "Run your code to see output here"
        )}
      </div>
    </div>
  );
}

// Input Section Component
function InputSection({ input, setInput }) {
  return (
    <div className="input-container">
      <div className="section-title">Input</div>
      <textarea
        className="input-area"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter input for your code here..."
      />
      <div className="input-note">Values entered here will be passed as stdin to your program</div>
    </div>
  );
}

// Review Section Component
function ReviewSection({ review, isLoading }) {
  return (
    <div className="review-container">
      <div className="section-title">AI Code Review</div>
      <div className="review-content">
        {isLoading ? (
          <LoadingIndicator text="Analyzing your code..." />
        ) : (
          review || "Click 'Review' to get AI feedback on your code"
        )}
      </div>
    </div>
  );
}

// Action Buttons Component
function ActionButtons({ onRun, onReview }) {
  return (
    <div className="action-buttons">
      <button className="run-button" onClick={onRun}>Run</button>
      <button className="review-button" onClick={onReview}>Review Code</button>
    </div>
  );
}

// Loading Indicator Component
function LoadingIndicator({ text }) {
  const [dots, setDots] = useState('');
  
  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="loading-indicator">
      <div className="spinner"></div>
      <div className="loading-text">{text}{dots}</div>
    </div>
  );
}

export default OnlineCompiler;