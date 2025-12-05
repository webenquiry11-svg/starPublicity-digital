const express = require('express');
const router = express.Router();
const { submitContactForm } = require('../controllers/contactControllers');

// When someone posts to '/', run the controller logic
router.post('/', submitContactForm);

module.exports = router;