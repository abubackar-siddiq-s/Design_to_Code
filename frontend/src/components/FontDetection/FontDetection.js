import React, { useState } from 'react';
import { detectFont } from '../../services/api';
import LoadingSpinner from '../shared/LoadingSpinner/LoadingSpinner';
import CodeOutput from '../shared/CodeOutput/CodeOutput';
import './FontDetection.css';

const FontDetection = () => {
  const [fontImage, setFontImage] = useState(null);
  const [fontImagePreview, setFontImagePreview] = useState(null);
  const [fontLoading, setFontLoading] = useState(false);
  const [fontResult, setFontResult] = useState("");

  const handleFontImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFontImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setFontImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
      setFontResult("");
    }
  };

  const handleFontDetect = async () => {
    if (!fontImage) {
      alert("Please upload an image first");
      return;
    }

    setFontLoading(true);
    setFontResult("");
    try {
      const res = await detectFont(fontImage);
      setFontResult(res.font);
    } catch (error) {
      setFontResult("Error: " + (error.response?.data?.error || error.message));
    }
    setFontLoading(false);
  };

  return (
    <div className="feature-view">
      <div className="tab-content">
        <h2>Font Detection Hints</h2>

        <div className="upload-section">
          <input
            type="file"
            accept="image/png,image/jpeg,image/jpg"
            onChange={handleFontImageChange}
            id="font-image-upload"
            className="file-input"
          />
          <label htmlFor="font-image-upload" className="file-label">
            {fontImage
              ? "Change Image"
              : "Upload Text / UI Image for Font Hint"}
          </label>
        </div>

        {fontImagePreview && (
          <div className="image-preview">
            <img src={fontImagePreview} alt="Uploaded Font Image" />
            <p className="image-caption">Uploaded Font Image</p>
          </div>
        )}

        <button
          onClick={handleFontDetect}
          disabled={!fontImage || fontLoading}
          className="generate-button"
        >
          {fontLoading ? "Analyzing font..." : "Get Font Hint"}
        </button>

        {fontLoading && (
          <LoadingSpinner message="Analyzing font from image..." />
        )}

        {fontResult && <CodeOutput code={fontResult} />}
      </div>
    </div>
  );
};

export default FontDetection;

