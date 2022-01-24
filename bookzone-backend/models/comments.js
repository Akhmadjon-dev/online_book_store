const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true, min: [3, 'Too few word to comment '], },
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;