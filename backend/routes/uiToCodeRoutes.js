const express = require('express');
const router = express.Router();
const upload = require('../config/multer');
const { convertUIToCode } = require('../controllers/uiToCodeController');

router.post('/', upload.single('image'), convertUIToCode);

module.exports = router;

