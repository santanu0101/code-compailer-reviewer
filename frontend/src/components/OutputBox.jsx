
import React from 'react';
import './OutputBox.css';

const OutputBox = ({ output, loading }) => {
  return (
    <div className="output-container">
      <h3 className="section-header">Output</h3>
      <div className="output-content">
        {loading ? (
          <div className="loading-indicator">
            <div className="spinner"></div>
            <p>Running your code...</p>
          </div>
        ) : output ? (
          <pre>{output}</pre>
        ) : (
          <p className="placeholder-message">Run your code to see output here</p>
        )}
      </div>
    </div>
  );
};

export default OutputBox;