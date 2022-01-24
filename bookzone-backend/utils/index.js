const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config/keys');
const Book = require('../models/books');
const Users = require('../models/users');
exports.createToken = ({ userId }) => {
  return jwt.sign({ _id: userId }, SECRET_KEY, { expiresIn: '10h' });
};

exports.validateToken = token => {
  try {
    return jwt.verify(token, SECRET_KEY);
  }
  catch (err) {
    return {};
  }
}
exports.isOwner = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id)
    if (!book) { return res.status(400).json({ success: false, error: 'book id  is invalid' }); }
    if (req.locals._id.toString() === book.user.toString()) {
      next();
    } else {
      res.status(401).json({ success: false, error: 'You are not authorized' });
    }
  } catch (error) {
    res.status(400).json({ success: false, error: 'book id  is invalid' });
  }
}
exports.currentUser = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  const validToken = token ? this.validateToken(token) : {};
  if (validToken._id) {
    try {
      const user = await Users.findById(validToken._id);
      if (user) {
        req.locals = { ...req.locals, _id: user._id };
        next();
      } else {
        res.status(403).json({ success: false, error: 'You are not authorized' });
      }

    } catch (error) {
      res.status(401).json({ success: false, error: 'You are not authenticated' });
    }
  } else {
    res.status(401).json({ success: false, error: 'You are not authenticated' });
  }
}
exports.isAdmin = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  const validToken = token ? this.validateToken(token) : {};
  if (validToken._id) {
    try {
      const admin = await Users.findById(validToken._id);
      if (admin.isAdmin) {
        req.locals = { ...req.locals, _id: admin._id, role: 'admin' };
        next();
      } else {
        res.status(403).json({ success: false, error: 'You are not authorized' });
      }

    } catch (error) {
      console.log(error)
      res.status(401).json({ success: false, error: 'You are not authenticated' });
    }
  } else {
    res.status(401).json({ success: false, error: 'You are not authenticated' });
  }

}