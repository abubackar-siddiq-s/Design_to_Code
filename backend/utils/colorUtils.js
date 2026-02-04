/**
 * Get dominant color from image buffer
 * @param {Buffer} imageBuffer - RGB image buffer
 * @returns {Object} Dominant color object with r, g, b properties
 */
function getDominantColor(imageBuffer) {
    const pixels = [];
    for (let i = 0; i < imageBuffer.length; i += 3) {
        pixels.push({
            r: imageBuffer[i],
            g: imageBuffer[i + 1],
            b: imageBuffer[i + 2]
        });
    }

    // Count color frequencies
    const colorMap = new Map();
    pixels.forEach(pixel => {
        const key = `${pixel.r},${pixel.g},${pixel.b}`;
        colorMap.set(key, (colorMap.get(key) || 0) + 1);
    });

    // Find most frequent color
    let maxCount = 0;
    let dominantColor = { r: 0, g: 0, b: 0 };
    
    colorMap.forEach((count, key) => {
        if (count > maxCount) {
            maxCount = count;
            const [r, g, b] = key.split(',').map(Number);
            dominantColor = { r, g, b };
        }
    });

    return dominantColor;
}

/**
 * Convert RGB to HEX
 * @param {number} r - Red value (0-255)
 * @param {number} g - Green value (0-255)
 * @param {number} b - Blue value (0-255)
 * @returns {string} HEX color code
 */
function rgbToHex(r, g, b) {
    return "#" + [r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }).join("");
}

module.exports = {
    getDominantColor,
    rgbToHex
};

