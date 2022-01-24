const express = require('express');
const { signUp, login } = require('../controller/auth');
const router = express.Router();

router.post('/sign-up', signUp);
router.post('/login', login)
module.exports = router;