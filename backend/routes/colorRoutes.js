const express = require('express');
const router = express.Router();
const upload = require('../config/multer');
const { extractColor } = require('../controllers/colorController');

router.post('/', upload.single('image'), extractColor);

module.exports = router;

