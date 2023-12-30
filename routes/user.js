const express = require('express');
const router = express.Router();

const {signup} = require('../controllers/userController');

router.post('/register', signup);

module.exports = router;