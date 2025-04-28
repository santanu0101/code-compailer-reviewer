import React from 'react';
import './ReviewBox.css';

const ReviewBox = ({ review, loading }) => {
  return (
    <div className="review-container">
      <h3 className="section-header">AI Code Review</h3>
      <div className="review-content">
        {loading ? (
          <div className="loading-indicator">
            <div className="spinner"></div>
            <p>Analyzing your code...</p>
          </div>
        ) : review ? (
          <div className="review-feedback">
            <pre>{review}</pre>
          </div>
        ) : (
          <p className="placeholder-message">Click "Review" to get AI feedback on your code</p>
        )}
      </div>
    </div>
  );
};

export default ReviewBox;