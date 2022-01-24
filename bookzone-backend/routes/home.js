const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'My express app', signUp: 'Sign Up' });
})

module.exports = router;