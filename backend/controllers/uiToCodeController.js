const fs = require('fs');
const model = require('../config/gemini');
const { getMimeType } = require('../utils/imageUtils');
const { buildPrompt, buildWireframePrompt } = require('../utils/promptBuilder');

/**
 * Convert UI image to code
 */
const convertUIToCode = async (req, res) => {
    let imagePath = null;
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No image file provided' });
        }

        const { outputType, inputType } = req.body;
        imagePath = req.file.path;

        if (!outputType) {
            return res.status(400).json({ error: 'Output type is required' });
        }

        // Read image file
        const imageBuffer = fs.readFileSync(imagePath);
        const imageBase64 = imageBuffer.toString('base64');
        const mimeType = getMimeType(req.file.originalname);

        // Build prompt based on input type
        const prompt = inputType === 'wireframe' 
            ? buildWireframePrompt(outputType)
            : buildPrompt(outputType);

        // Generate content with Gemini
        const result = await model.generateContent([
            prompt,
            {
                inlineData: {
                    data: imageBase64,
                    mimeType: mimeType
                }
            }
        ]);

        const response = await result.response;
        const code = response.text();

        // Clean up temp file
        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath);
        }

        res.json({ code: code });
    } catch (error) {
        // Clean up temp file on error
        if (imagePath && fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath);
        }
        console.error('Error in /api/ui-to-code:', error);
        res.status(500).json({ error: error.message || 'Failed to generate code' });
    }
};

module.exports = {
    convertUIToCode
};

