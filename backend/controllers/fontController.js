const fs = require('fs');
const model = require('../config/gemini');
const { getMimeType } = require('../utils/imageUtils');
const { getFontPrompt } = require('../utils/promptBuilder');

/**
 * Detect font from image
 */
const detectFont = async (req, res) => {
    let imagePath = null;
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No image file provided' });
        }

        imagePath = req.file.path;

        // Read image file
        const imageBuffer = fs.readFileSync(imagePath);
        const imageBase64 = imageBuffer.toString('base64');
        const mimeType = getMimeType(req.file.originalname);

        // Font detection prompt
        const fontPrompt = getFontPrompt();

        // Generate content with Gemini
        const result = await model.generateContent([
            fontPrompt,
            {
                inlineData: {
                    data: imageBase64,
                    mimeType: mimeType
                }
            }
        ]);

        const response = await result.response;
        let cssFontSnippet = response.text().trim();

        // Safety: validate output format
        if (!cssFontSnippet.toLowerCase().startsWith("font-family")) {
            cssFontSnippet = 'font-family: "Helvetica";';
        }

        // Clean up temp file
        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath);
        }

        res.json({ font: cssFontSnippet });
    } catch (error) {
        // Clean up temp file on error
        if (imagePath && fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath);
        }
        console.error('Error in /api/font-detect:', error);
        res.status(500).json({ error: error.message || 'Failed to detect font' });
    }
};

module.exports = {
    detectFont
};

