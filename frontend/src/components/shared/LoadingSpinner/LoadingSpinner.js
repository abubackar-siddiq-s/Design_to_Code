import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = ({ message = "Loading..." }) => {
  return (
    <div className="spinner">
      <div className="spinner-circle"></div>
      <p>{message}</p>
    </div>
  );
};

export default LoadingSpinner;

