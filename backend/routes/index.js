const express = require('express');
const router = express.Router();
const uiToCodeRoutes = require('./uiToCodeRoutes');
const colorRoutes = require('./colorRoutes');
const fontRoutes = require('./fontRoutes');

// Health check endpoint
router.get('/health', (req, res) => {
    res.json({ status: 'ok', message: 'D2C API is running' });
});

// API routes
router.use('/ui-to-code', uiToCodeRoutes);
router.use('/extract-color', colorRoutes);
router.use('/font-detect', fontRoutes);

module.exports = router;

