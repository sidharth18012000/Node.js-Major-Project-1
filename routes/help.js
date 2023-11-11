const express = require('express');

const router = express.Router();
const helpControllers = require('../controllers/help_controller');

router.get('/', helpControllers.help);

module.exports = router;