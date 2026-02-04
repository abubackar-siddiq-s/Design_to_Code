import React from 'react';
import './CodeOutput.css';

const CodeOutput = ({ code, title = "Generated Code" }) => {
  return (
    <div className="result-section">
      <h3>{title}</h3>
      <div className="code-container">
        <pre className="code-output">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeOutput;

