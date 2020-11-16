const express = require('express');
const router = express.Router();

const featuresController = require('../controllers/features_controller');

router.get('/likes',featuresController.likes);
router.get('/comments',featuresController.comment);

module.exports = router;