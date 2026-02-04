require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

if (!process.env.GEMINI_API_KEY) {
    console.error('ERROR: GEMINI_API_KEY not found in environment variables!');
    console.error('Please create a .env file with: GEMINI_API_KEY=your_api_key_here');
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const MODEL_NAME = process.env.MODEL_NAME || "gemini-2.5-flash";

const model = genAI.getGenerativeModel({
    model: MODEL_NAME,
    systemInstruction: "You are a senior frontend engineer. You convert UI screenshots into accurate, production-quality frontend code."
});

module.exports = model;