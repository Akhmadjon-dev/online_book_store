const express = require('express');
const { currentUser, isOwner, } = require('../utils');
const { create, createComment, fetchBookByAuthorId, fetchBooks, searchBooks, fetchBookById, updateBook, deleteBook, deleteComment, fetchCurrentUserBooks } = require('../controller/books');
var multer = require('../utils/multer');

const router = express.Router();
router.get('/my-books', currentUser, fetchCurrentUserBooks);
router.get('/', fetchBooks);
router.get('/author/:id', fetchBookByAuthorId);
router.get('/search', searchBooks);
router.get('/:id', fetchBookById);
router.post('/', currentUser, multer.array("files"), create);
router.post('/comment', currentUser, createComment);
router.delete('/comment/:id', currentUser, deleteComment);
router.patch('/:id', currentUser, isOwner, updateBook);
router.delete('/:id', currentUser, isOwner, deleteBook);
module.exports = router;