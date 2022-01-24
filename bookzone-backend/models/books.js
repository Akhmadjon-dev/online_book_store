const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const bookSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, default: '' },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: true, trim: true },
  country: { type: String, default: '' },
  imageLink: { type: String },
  pdfLink: { type: String },
  language: { type: String, default: '' },
  link: { type: String, default: '' },
  pages: { type: String, default: '' },
  year: { type: String, default: '' },
  views: { type: Number, default: 0 },
  rate: { type: Number, min: 0, max: 5, default: 0 },
  price: { type: Number, default: 0 },
  comments: [String],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', },
  category: {
    type: String,
    enum: ['classic', 'biography', 'science'],
    lowercase: true,
    default: 'classic'
  },
  isPublished: { type: Boolean, default: false },
  isFeatured: { type: Boolean, default: false },
  updatedAt: { type: Date, default: new Date() }
})

bookSchema.plugin(mongoosePaginate);
const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
