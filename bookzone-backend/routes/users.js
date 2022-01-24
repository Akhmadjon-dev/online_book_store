const express = require('express');
const { fetchUsers, addToShelf, addProfilePicture, fetchFromShelf, fetchUserById, updateUser, deleteUser, removeFromShelf } = require('../controller/users');
const router = express.Router();
const { currentUser } = require('../utils');
var multer = require('../utils/multer');

router.get('/', currentUser, fetchUserById);
router.post('/shelf', currentUser, addToShelf);
router.post('/files', currentUser, multer.single('image'), addProfilePicture);
router.delete('/shelf/:id', currentUser, removeFromShelf);
router.get('/shelf', currentUser, fetchFromShelf);
// router.get('/', currentUser, fetchUsers);
router.patch('/', currentUser, updateUser);
router.delete('/', currentUser, deleteUser);

module.exports = router;



