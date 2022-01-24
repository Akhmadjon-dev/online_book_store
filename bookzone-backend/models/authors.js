const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, default: '' },
  date_of_birth: { type: Date, default: '' },
  date_of_death: { type: Date, default: '' },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', },
});

const Author = mongoose.model('Author', authorSchema);
module.exports = Author;
