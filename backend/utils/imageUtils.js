const path = require('path');

/**
 * Get MIME type from file extension
 * @param {string} filePath - Path to the file
 * @returns {string} MIME type
 */
function getMimeType(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    const mimeTypes = {
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.gif': 'image/gif',
        '.webp': 'image/webp'
    };
    return mimeTypes[ext] || 'image/png';
}

module.exports = {
    getMimeType
};

