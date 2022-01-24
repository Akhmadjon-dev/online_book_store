var express = require('express');
var router = express.Router();
const userRoutes = require('./users');
const authRoutes = require('./auth');
const authorsRoutes = require('./authors');
const booksRoutes = require('./books');

router.use('/api', authRoutes);
router.use('/api/users', userRoutes);
router.use('/api/authors', authorsRoutes);
router.use('/api/books', booksRoutes);

module.exports = router;
