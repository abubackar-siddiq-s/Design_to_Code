const fs = require('fs');
const sharp = require('sharp');
const { getDominantColor, rgbToHex } = require('../utils/colorUtils');

/**
 * Extract dominant color from image
 */
const extractColor = async (req, res) => {
    let imagePath = null;
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No image file provided' });
        }

        imagePath = req.file.path;

        // Resize image to 50x50 for faster processing
        const resizedBuffer = await sharp(imagePath)
            .resize(50, 50)
            .raw()
            .toBuffer();

        // Get dominant color
        const dominantColor = getDominantColor(resizedBuffer);
        const hexCode = rgbToHex(dominantColor.r, dominantColor.g, dominantColor.b);

        // Generate CSS snippet
        const cssSnippet = `color {\n    background: ${hexCode};\n}`;

        // Clean up temp file
        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath);
        }

        res.json({ 
            hex: hexCode,
            rgb: `rgb(${dominantColor.r}, ${dominantColor.g}, ${dominantColor.b})`,
            css: cssSnippet 
        });
    } catch (error) {
        // Clean up temp file on error
        if (imagePath && fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath);
        }
        console.error('Error in /api/extract-color:', error);
        res.status(500).json({ error: error.message || 'Failed to extract color' });
    }
};

module.exports = {
    extractColor
};

