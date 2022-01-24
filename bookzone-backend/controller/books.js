const Joi = require('joi');
const Book = require('../models/books');
const Author = require('../models/authors');
const Comment = require('../models/comments');
const _ = require('lodash');

exports.create = async (req, res) => {
  let { error } = validate(req.body);
  if (error) return res.status(400).json(error.message)
  try {
    const { author } = req.body;
    const authorData = await Author.findById(author);
    if (!authorData) {
      return res.status(400).json({ success: false, msg: 'author id is invalid', })
    }

    let data = { ...req.body }
    if (req.files) {
      req.files.map((file) => {
        if (file.mimetype.includes('image')) {
          const imageUrl = req.protocol + '://' + req.headers.host + file.path.replace('public', '');
          data.imageLink = imageUrl;
        }
        if (file.mimetype == "application/pdf") {
          const pdfUrl = req.protocol + '://' + req.headers.host + file.path.replace('public', '');
          data.pdfLink = pdfUrl;
        }
      })
      // const img = req.file.path.replace("public", "");
    }
    let book = await Book.create({ ...data, user: req.locals._id });
    console.log(book, req.files, "qwertyui")
    book = await book.populate('author', '-createdAt').execPopulate();
    const { user, ...docs } = book._doc;
    res.status(201).json({ success: true, payload: docs })
  } catch (error) {
    console.log(error.message)
    res.status(400).json({ success: false, msg: 'Something went wrong', error: error.message })
  }
  // #swagger.tags = ['Book']
  /* #swagger.security = [{
            "apiKeyAuth": []
     }] */
  /* #swagger.parameters['body'] = {
        in: 'body',
        description: 'create your own book',
        required: true,
        type: 'obj',
        schema: { $ref: '#/definitions/BOOK' }
} */
  /* #swagger.responses[200] = {
          description: 'Response body',
          schema: {$ref: '#/definitions/BOOK_RESPONSE'}
  } */
  /* #swagger.responses[400] = {
          description: 'Something went wrong',
         schema: {
            success: false,
            msg: 'Something went wrong / author id is invalid',
            error: 'error.message'
        }
  } */
}

exports.createComment = async (req, res) => {
  try {
    const { _id } = req.locals;
    const { bookId, text } = req.body
    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(400).json({ success: false, msg: 'book id is invalid', })
    }
    const comment = await Comment.create({ text, bookId, user: _id });
    await Book.findByIdAndUpdate(bookId,
      {
        $addToSet: { comments: comment._id }
      },
      { new: true })
    res.status(200).json({ success: true, payload: comment })
  } catch (error) {
    res.status(400).json({ success: false, msg: 'Something went wrong', error })
  }
  // #swagger.tags = ['Book Comments']
  // #swagger.description = 'Registerd users can proced this action'
  /* #swagger.security = [{
            "apiKeyAuth": []
     }] */
  /* #swagger.parameters['body'] = {
        in: 'body',
        description: 'Post comment',
        required: true,
        type: 'obj',
        schema: { $ref: '#/definitions/COMMENT' }
} */
  /* #swagger.responses[200] = {
           description: 'Response body',
           schema: {$ref: '#/definitions/COMMENT_RESPONSE'}
   } */
  /* #swagger.responses[400] = {
          description: 'Something went wrong',
         schema: {
            success: false,
            msg: 'Something went wrong / author id is invalid',
            error: 'error.message'
        }
  } */
}

exports.deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findById(id);
    if (comment.user.toString() !== req.locals._id.toString()) {
      return res.status(401).json({ success: false, error: 'You are not authorized' })
    }
    res.status(200).json({ success: true, payload: comment })
  } catch (error) {
    res.status(400).json({ success: false, msg: 'Something went wrong', error })
  }
  // #swagger.tags = ['Book Comments']
  // #swagger.description = 'Registerd users can proced this action'
  /* #swagger.security = [{
            "apiKeyAuth": []
     }] */
  /* #swagger.responses[200] = {
           description: 'Response body',
           schema: {$ref: '#/definitions/COMMENT_RESPONSE'}
   } */
  /* #swagger.responses[400] = {
          description: 'Something went wrong',
         schema: {
            success: false,
            msg: 'Something went wrong / book id is invalid',
            error: 'error.message'
        }
  } */
  /* #swagger.responses[401] = {
          description: 'Something went wrong',
         schema: {
            success: false,
            msg: 'Something went wrong  you are not authorization',
            error: 'error.message'
        }
  } */
}

exports.fetchBooks = async (req, res) => {
  try {
    const { page = 1, pageSize = 10 } = req.query;
    const book = await Book
      .paginate({},
        {
          sort: { name: 1 },
          page,
          limit: pageSize,
          populate: { path: "author", select: "-user -createdAt -updatedAt -phone" },
          select: "-user"
        })

    res.status(200).json({ success: true, payload: book })
  } catch (error) {
    res.status(400).json({ success: false, msg: 'Someting went wrong', error: error.message })
  }
  // #swagger.tags = ['Book']
  // #swagger.description = 'Fetch all books'
  /* #swagger.responses[200] = {
          description: 'Response body',
          schema: {$ref: '#/definitions/BOOK_RESPONSE'}
  } */
  /* #swagger.responses[400] = {
          description: 'Someting went wrong',
         schema: {
            success: false,
            msg: 'Someting went wrong',
            error: 'error.message'
        }
  } */
}

exports.searchBooks = async (req, res) => {
  const { title } = req.query;
  try {
    const book = await Book
      .find({ title: { $regex: `^${title}`, $options: 'i' } })
      .select('-user')
      .populate('author', '-createdAt -updatedAt')

    res.status(200).json({ success: true, payload: book })
  } catch (error) {
    res.status(400).json({ success: false, msg: 'Someting went wrong', error: error.message })
  }

  // #swagger.tags = ['Book']
  // #swagger.description = 'Search book'
  /* #swagger.responses[200] = {
          description: 'Response body',
          schema: {$ref: '#/definitions/BOOK_RESPONSE'}
  } */
  /* #swagger.responses[400] = {
          description: 'Book errors page',
         schema: {
            success: false,
            error: 'title can not be empty',
            msg: 'Something went wrong'
        }
  } */

}

exports.fetchCurrentUserBooks = async (req, res) => {
  try {
    const book = await Book
      .find({ user: req.locals._id })
      .select('-user')
      .populate('author', '-createdAt -updatedAt -phone')

    res.status(200).json({ success: true, payload: book })
  } catch (error) {
    res.status(400).json({ success: false, msg: 'Someting went wrong', error: error.message })
  }
  // #swagger.tags = ['Book']
  // #swagger.description = 'Get your own created book'
  /* #swagger.security = [{
            "apiKeyAuth": []
     }] */
  /* #swagger.responses[200] = {
          description: 'Response body',
          schema: {$ref: '#/definitions/BOOK_RESPONSE'}
  } */
  /* #swagger.responses[400] = {
          description: 'Someting went wrong',
         schema: {
            success: false,
            msg: 'Someting went wrong',
            error: 'error.message'
        }
  } */
}

exports.fetchBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBook = await Book
      .findByIdAndUpdate(id, { $inc: { views: 1 } }, { new: true })
      .select('-user')
      .populate('author', '-createdAt -updatedAt -phone');
    const comment = await Comment.find({ bookId: id })
      .populate('user', "-_id firstName lastName image");
    res.status(200).json({ success: true, payload: { book: updatedBook, comment } });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
  // #swagger.tags = ['Book']
  // #swagger.description = 'fetch book by id'
  /* #swagger.responses[200] = {
          description: 'Response body',
          schema: {$ref: '#/definitions/BOOKID_RESPONSE'}
  } */
  /* #swagger.responses[400] = {
          description: 'Someting went wrong',
         schema: {
            success: false,
            error: 'error.message'
        }
  } */
}

exports.updateBook = async (req, res) => {

  let { error } = validateUpdate(req.body);
  if (error) return res.status(404).json(error.message)
  const { id } = req.params;
  try {
    const book = await Book.findByIdAndUpdate(id, { ...req.body }, { new: true })
      .select('-user');
    res.status(201).json({ success: true, payload: book })
  } catch (err) {
    res.status(400).json({ success: false, msg: 'Something went wrong', error: err.message })
  }
  // #swagger.tags = ['Book']
  /* #swagger.security = [{
            "apiKeyAuth": []
     }] */
  /* #swagger.parameters['id'] = {
        description: 'book id',
        required: true,
        type: 'string',
        schema: { $ref: '#/definitions/BOOK' }
} */
  /* #swagger.parameters['body'] = {
        in: 'body',
        description: 'update your own book',
        required: true,
        type: 'obj',
        schema: { $ref: '#/definitions/BOOK' }
} */
  /* #swagger.responses[200] = {
           description: 'Response body',
           schema: {$ref: '#/definitions/BOOK_RESPONSE'}
   } */
  /* #swagger.responses[400] = {
            description: 'Something went wrong',
           schema: {
              success: false,
              msg: 'Something went wrong',
              error: 'err.message'  
          }
    } */
}
exports.deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findByIdAndDelete(id).select('-user');
    res.status(201).json({ success: true, payload: book })
  } catch (err) {
    res.status(400).json({ success: false, msg: 'Something went wrong', error: err.message })
  }
  // #swagger.tags = ['Book']
  /* #swagger.security = [{
            "apiKeyAuth": []
     }] */
  /* #swagger.parameters['id'] = {
        description: 'book id',
        required: true,
        type: 'string',
        schema: { $ref: '#/definitions/BOOK' }
} */
  /* #swagger.responses[200] = {
          description: 'Response body',
          schema: {$ref: '#/definitions/BOOK_RESPONSE'}
  } */
  /* #swagger.responses[400] = {
          description: 'Something went wrong',
         schema: {
            success: false,
            msg: 'Something went wrong'
        }
  } */
}

exports.fetchBookByAuthorId = async (req, res) => {

  try {
    const { id } = req.params;
    const authorBooks = await Book
      .find({ author: id })
      .populate('author', '-createdAt -updatedAt -phone');

    res.status(200).json({ success: true, payload: authorBooks });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
  // #swagger.tags = ['Book']
  /* #swagger.responses[200] = {
          description: 'Response body',
          schema: {
            success: true,
            payload: [{$ref: '#/definitions/AUTHOR__BOOKS'}]
          }
  } */
  /* #swagger.responses[400] = {
          description: 'Book errors page',
         schema: {
            success: false,
            error: 'title can not be empty',
            msg: 'Author not found'
        }
  } */
}

function validate(formData) {
  const bookSchema = Joi.object({
    title: Joi.string().required().min(3),
    description: Joi.string(),
    author: Joi.string().required(),
    country: Joi.string(),
    // files: Joi.array(),
    language: Joi.string(),
    link: Joi.string(),
    pages: Joi.number(),
    year: Joi.number(),
    rate: Joi.number().min(0).max(5),
    price: Joi.number(),
    category: Joi.string().regex(/^(classic|biography|science)$/i),
    isPublished: Joi.boolean(),
  })

  return bookSchema.validate(formData);
}

function validateUpdate(formData) {
  const bookSchema = Joi.object({
    title: Joi.string().min(3),
    description: Joi.string(),
    country: Joi.string(),
    author: Joi.string(),
    language: Joi.string(),
    link: Joi.string(),
    pages: Joi.number(),
    year: Joi.number(),
    rate: Joi.number().min(0).max(5),
    price: Joi.number(),
    category: Joi.string().regex(/^(classic|biography|science)$/i),
    isPublished: Joi.boolean(),
  })

  return bookSchema.validate(formData);
}
