import React, { useState } from 'react';
import axios from 'axios';
import CodeEditor from './components/CodeEditor';
import OutputBox from './components/OutputBox';
import ReviewBox from './components/ReviewBox';

const App = () => {
  const [code, setCode] = useState('// Write your code here...');
  const [language, setLanguage] = useState('javascript');
  const [output, setOutput] = useState('');
  const [review, setReview] = useState('');
  const [loadingReview, setLoadingReview] = useState(false); 

  const handleCompile = async () => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/compile`, {
        code,
        language: language === 'cpp' ? 'cpp' : language === 'python' ? 'py' : 'js',
      });
      setOutput(res.data.output);
    } catch (error) {
      console.error('❌ API Error:', error);
      setOutput(error.response?.data?.error || 'Error compiling code');
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
    <div style={{ padding: '20px' }}>
      <h1>Online Compiler & AI Code Reviewer</h1>

      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="cpp">C++</option>
      </select>

      <CodeEditor code={code} setCode={setCode} language={language} />

      <button onClick={handleCompile}>Run</button>
      <button
        onClick={handleReview}
        disabled={loadingReview}
        style={{ marginLeft: '10px' }}
      >
        {loadingReview ? 'Reviewing...' : 'Review'}
      </button>

      <OutputBox output={output} />
      <ReviewBox review={review} loading={loadingReview} />
    </div>
  );
};

export default App;
