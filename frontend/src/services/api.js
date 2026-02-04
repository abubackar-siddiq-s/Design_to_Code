import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000/api";

/**
 * Convert UI image to code
 * @param {File} image - Image file
 * @param {string} outputType - Output format type
 * @param {string} inputType - Input type: 'screenshot' or 'wireframe'
 * @returns {Promise} API response
 */
export const convertUIToCode = async (image, outputType, inputType = 'screenshot') => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("outputType", outputType);
    formData.append("inputType", inputType);

    const response = await axios.post(`${API_BASE}/ui-to-code`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
};

/**
 * Extract color from image
 * @param {File} image - Image file
 * @returns {Promise} API response
 */
export const extractColor = async (image) => {
    const formData = new FormData();
    formData.append("image", image);

    const response = await axios.post(`${API_BASE}/extract-color`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
};

/**
 * Detect font from image
 * @param {File} image - Image file
 * @returns {Promise} API response
 */
export const detectFont = async (image) => {
    const formData = new FormData();
    formData.append("image", image);

    const response = await axios.post(`${API_BASE}/font-detect`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
};

/**
 * Health check
 * @returns {Promise} API response
 */
export const healthCheck = async () => {
    const response = await axios.get(`${API_BASE}/health`);
    return response.data;
};

