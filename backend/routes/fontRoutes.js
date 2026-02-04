const express = require('express');
const router = express.Router();
const upload = require('../config/multer');
const { detectFont } = require('../controllers/fontController');

router.post('/', upload.single('image'), detectFont);

module.exports = router;

