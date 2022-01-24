var express = require('express');
const { create, fetchAuthors, fetchAuthorById, updateAuthor, deleteAuthor } = require('../controller/authors');
const { currentUser } = require('../utils');
var router = express.Router();
router.get('/', fetchAuthors);
router.get('/:id', fetchAuthorById);
router.post('/', currentUser, create);
router.patch('/:id', currentUser, updateAuthor);
router.delete('/:id', currentUser, deleteAuthor);

module.exports = router;
