import React, { useState } from 'react';
import axios from 'axios';
import CodeEditor from './components/CodeEditor';
import OutputBox from './components/OutputBox';
import ReviewBox from './components/ReviewBox';
import './App.css';

const App = () => {
  const [code, setCode] = useState('// Write your code here...');
  const [language, setLanguage] = useState('javascript');
  const [output, setOutput] = useState('');
  const [review, setReview] = useState('');
  const [loadingReview, setLoadingReview] = useState(false);
  const [loadingCompile, setLoadingCompile] = useState(false);
  const [input, setInput] = useState('');

  const handleCompile = async () => {
    setLoadingCompile(true);
    setOutput(''); // Clear previous output
    
    try {
      // Make sure input is included in the request
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/compile`, {
        code,
        language: language === 'cpp' ? 'cpp' : language === 'python' ? 'py' : 'js',
        input // This is the important part - include input in the API call
      });
      
      setOutput(res.data.output || 'No output returned');
    } catch (error) {
      console.error('❌ API Error:', error);
      setOutput(error.response?.data?.error || 'Error compiling code');
    } finally {
      setLoadingCompile(false);
    }
  };

  const handleReview = async () => {
    setLoadingReview(true);
    setReview('');

    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/review`, { code });
      setReview(res.data.feedback);
    } catch (error) {
      setReview(error.response?.data?.error || 'Error during review');
    } finally {
      setLoadingReview(false);
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Online Compiler & AI Code Reviewer</h1>
        <div className="language-selector">
          <label htmlFor="language-select">Language:</label>
          <select 
            id="language-select"
            value={language} 
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="cpp">C++</option>
          </select>
        </div>
      </header>

      <main className="main-content">
        <div className="left-panel">
          <div className="code-section">
            <h3 className="section-header">Code Editor</h3>
            <CodeEditor code={code} setCode={setCode} language={language} />
          </div>
          
          <div className="input-section">
            <h3 className="section-header">Input</h3>
            <textarea
              className="input-area"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter input for your code here..."
              spellCheck="false"
            />
            <div className="input-info">
              Values entered here will be passed as stdin to your program
            </div>
          </div>
          
          <div className="buttons-container">
            <button 
              className="run-button" 
              onClick={handleCompile}
              disabled={loadingCompile}
            >
              {loadingCompile ? 'Running...' : 'Run'}
            </button>
            <button
              className="review-button"
              onClick={handleReview}
              disabled={loadingReview}
            >
              {loadingReview ? 'Reviewing...' : 'Review Code'}
            </button>
          </div>
        </div>

        <div className="right-panel">
          <OutputBox output={output} loading={loadingCompile} />
          <ReviewBox review={review} loading={loadingReview} />
        </div>
      </main>
    </div>
  );
};

export default App;