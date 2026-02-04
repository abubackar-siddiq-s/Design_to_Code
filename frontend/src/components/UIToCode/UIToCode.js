import React, { useState } from 'react';
import { convertUIToCode } from '../../services/api';
import { downloadFile } from '../../utils/fileDownload';
import LoadingSpinner from '../shared/LoadingSpinner/LoadingSpinner';
import CodeOutput from '../shared/CodeOutput/CodeOutput';
import './UIToCode.css';

const UIToCode = () => {
  const [uiImage, setUiImage] = useState(null);
  const [uiImagePreview, setUiImagePreview] = useState(null);
  const [inputType, setInputType] = useState("screenshot");
  const [outputType, setOutputType] = useState("HTML + Internal CSS");
  const [uiLoading, setUiLoading] = useState(false);
  const [uiResult, setUiResult] = useState("");

  const handleUiImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUiImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setUiImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
      setUiResult("");
    }
  };

  const handleUIToCode = async () => {
    if (!uiImage) {
      alert("Please upload an image first");
      return;
    }

    setUiLoading(true);
    setUiResult("");
    try {
      const res = await convertUIToCode(uiImage, outputType, inputType);
      setUiResult(res.code);
    } catch (error) {
      setUiResult("Error: " + (error.response?.data?.error || error.message));
    }
    setUiLoading(false);
  };

  return (
    <div className="feature-view">
      <div className="tab-content">
        <h2>UI Screenshot → Frontend Code Generator</h2>

        <div className="upload-section">
          <input
            type="file"
            accept="image/png,image/jpeg,image/jpg"
            onChange={handleUiImageChange}
            id="ui-image-upload"
            className="file-input"
          />
          <label htmlFor="ui-image-upload" className="file-label">
            {uiImage ? "Change Image" : "Upload UI Screenshot"}
          </label>
        </div>

        {uiImagePreview && (
          <div className="image-preview">
            <img src={uiImagePreview} alt="Uploaded UI" />
            <p className="image-caption">Uploaded UI</p>
          </div>
        )}

        <div className="input-type-section">
          <label className="input-type-label">
            Choose Input Type:
          </label>
          <div className="input-type-options">
            <label className={`radio-option ${inputType === "screenshot" ? "checked" : ""}`}>
              <input
                type="radio"
                name="inputType"
                value="screenshot"
                checked={inputType === "screenshot"}
                onChange={(e) => setInputType(e.target.value)}
              />
              <span className="radio-label">
                <strong>UI Screenshot</strong>
                <span className="radio-description">High-fidelity visual recreation</span>
              </span>
            </label>
            <label className={`radio-option ${inputType === "wireframe" ? "checked" : ""}`}>
              <input
                type="radio"
                name="inputType"
                value="wireframe"
                checked={inputType === "wireframe"}
                onChange={(e) => setInputType(e.target.value)}
              />
              <span className="radio-label">
                <strong>Sketch / Wireframe</strong>
                <span className="radio-description">Structural layout only</span>
              </span>
            </label>
          </div>
          {inputType === "wireframe" && (
            <p className="input-type-hint">
              Wireframe mode focuses on structure and layout, not visual details. 
              Output will use placeholder text and neutral wireframe-style CSS.
            </p>
          )}
        </div>

        <div className="select-section">
          <label htmlFor="output-type-select">
            Choose Output Format:
          </label>
          <select
            id="output-type-select"
            value={outputType}
            onChange={(e) => setOutputType(e.target.value)}
            className="select-input"
          >
            <option>HTML + Internal CSS</option>
            <option>HTML + CSS (Separate Files)</option>
            <option>React (JSX + CSS)</option>
          </select>
        </div>

        <button
          onClick={handleUIToCode}
          disabled={!uiImage || uiLoading}
          className="generate-button"
        >
          {uiLoading
            ? inputType === "wireframe"
              ? "Analyzing structure and generating code..."
              : "Analyzing UI and generating code..."
            : "Generate Frontend Code"}
        </button>

        {uiLoading && (
          <LoadingSpinner 
            message={
              inputType === "wireframe"
                ? "Analyzing structure and generating code..."
                : "Analyzing UI and generating code..."
            } 
          />
        )}

        {uiResult && (
          <>
            <CodeOutput code={uiResult} title="📄 Generated Code" />
            <button
              onClick={() =>
                downloadFile(
                  uiResult,
                  "frontend_output.txt",
                  "text/plain"
                )
              }
              className="download-button"
            >
              ⬇️ Download Output
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default UIToCode;

