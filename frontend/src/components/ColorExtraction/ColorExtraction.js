import React, { useState } from 'react';
import { extractColor } from '../../services/api';
import { downloadFile } from '../../utils/fileDownload';
import LoadingSpinner from '../shared/LoadingSpinner/LoadingSpinner';
import CodeOutput from '../shared/CodeOutput/CodeOutput';
import './ColorExtraction.css';

const ColorExtraction = () => {
  const [colorImage, setColorImage] = useState(null);
  const [colorImagePreview, setColorImagePreview] = useState(null);
  const [colorLoading, setColorLoading] = useState(false);
  const [colorResult, setColorResult] = useState("");
  const [colorHex, setColorHex] = useState("");

  const handleColorImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setColorImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setColorImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
      setColorResult("");
      setColorHex("");
    }
  };

  const handleExtractColor = async () => {
    if (!colorImage) {
      alert("Please upload an image first");
      return;
    }

    setColorLoading(true);
    setColorResult("");
    setColorHex("");
    try {
      const res = await extractColor(colorImage);
      setColorResult(res.css);
      setColorHex(res.hex);
    } catch (error) {
      setColorResult(
        "Error: " + (error.response?.data?.error || error.message)
      );
    }
    setColorLoading(false);
  };

  return (
    <div className="feature-view">
      <div className="tab-content">
        <h2>Image → CSS Color Code</h2>

        <div className="upload-section">
          <input
            type="file"
            accept="image/png,image/jpeg,image/jpg"
            onChange={handleColorImageChange}
            id="color-image-upload"
            className="file-input"
          />
          <label htmlFor="color-image-upload" className="file-label">
            {colorImage ? "Change Image" : "Upload Color Image"}
          </label>
        </div>

        {colorImagePreview && (
          <div className="image-preview">
            <img src={colorImagePreview} alt="Uploaded Color Image" />
            <p className="image-caption">Uploaded Color Image</p>
          </div>
        )}

        <button
          onClick={handleExtractColor}
          disabled={!colorImage || colorLoading}
          className="generate-button"
        >
          {colorLoading ? "Extracting color..." : "Extract Color Code"}
        </button>

        {colorLoading && (
          <LoadingSpinner message="Extracting color..." />
        )}

        {colorResult && (
          <>
            {colorHex && (
              <div
                className="color-preview"
                style={{ backgroundColor: colorHex }}
              >
                <span className="color-hex">{colorHex}</span>
              </div>
            )}
            <CodeOutput code={colorResult} />
            <button
              onClick={() =>
                downloadFile(colorResult, "color.css", "text/css")
              }
              className="download-button"
            >
              ⬇️ Download CSS
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ColorExtraction;

