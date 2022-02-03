"use strict";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Users = require('../models/users');

var Joi = require('joi');

var bcrypt = require('bcrypt');

var _require = require('../utils'),
    createToken = _require.createToken;

var _ = require('lodash');

exports.signUp = function _callee(req, res) {
  var _validate, error, hash, user, token, _user$_doc, password, docs;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // #swagger.tags = ['Auth']

          /* #swagger.parameters['body'] = {
                in: 'body',
                description: 'Login params',
                required: true,
                type: 'obj',
                schema: { $ref: '#/definitions/SIGN_UP' }
          } */

          /* #swagger.responses[200] = {
                  description: 'Response body',
                  schema: {$ref: '#/definitions/AUTH_RESPONSE'}
          } */

          /* #swagger.responses[400] = {
                  description: 'Something went wrong or Error object',
                 schema: {
                    success: false,
                    msg: 'Email or password is wrong'
                }
          } */
          _validate = validate(req.body), error = _validate.error;

          if (!error) {
            _context.next = 3;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            success: false,
            msg: error.message
          }));

        case 3:
          _context.prev = 3;
          _context.next = 6;
          return regeneratorRuntime.awrap(bcrypt.hash(req.body.password, 8));

        case 6:
          hash = _context.sent;
          _context.next = 9;
          return regeneratorRuntime.awrap(Users.create(_objectSpread({}, req.body, {
            password: hash
          })));

        case 9:
          user = _context.sent;
          token = createToken({
            userId: user._id
          });
          _user$_doc = user._doc, password = _user$_doc.password, docs = _objectWithoutProperties(_user$_doc, ["password"]);
          res.status(201).json({
            token: token,
            user: docs,
            success: true
          });
          _context.next = 18;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](3);
          res.status(400).json({
            success: false,
            msg: _context.t0.message
          });

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[3, 15]]);
};

exports.login = function _callee2(req, res) {
  var _req$body, email, password, _validate2, error, user, isPasswordCorrect, token, _user$_doc2, _password, docs;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          // #swagger.tags = ['Auth']

          /* #swagger.parameters['body'] = {
                in: 'body',
                description: 'Login params',
                required: true,
                type: 'obj',
                schema: { $ref: '#/definitions/LOG_IN' }
          } */

          /* #swagger.responses[200] = {
                  description: 'Response body',
                  schema: {$ref: '#/definitions/AUTH_RESPONSE'}
          } */

          /* #swagger.responses[400] = {
                  description: 'Password or Email is wrong',
                 schema: {
                    success: false,
                    msg: 'Email or password is wrong'
                }
          } */
          _req$body = req.body, email = _req$body.email, password = _req$body.password;
          _validate2 = validate(req.body), error = _validate2.error;

          if (!error) {
            _context2.next = 4;
            break;
          }

          return _context2.abrupt("return", res.status(400).json({
            success: false,
            msg: error.message
          }));

        case 4:
          _context2.prev = 4;
          _context2.next = 7;
          return regeneratorRuntime.awrap(Users.findOne({
            email: email
          }));

        case 7:
          user = _context2.sent;

          if (user) {
            _context2.next = 10;
            break;
          }

          return _context2.abrupt("return", res.status(400).json({
            success: false,
            msg: 'Email or password is incorrect'
          }));

        case 10:
          _context2.next = 12;
          return regeneratorRuntime.awrap(bcrypt.compare(password, user.password));

        case 12:
          isPasswordCorrect = _context2.sent;

          if (!isPasswordCorrect) {
            _context2.next = 17;
            break;
          }

          token = createToken({
            userId: user._id
          });
          _user$_doc2 = user._doc, _password = _user$_doc2.password, docs = _objectWithoutProperties(_user$_doc2, ["password"]);
          return _context2.abrupt("return", res.status(200).json({
            token: token,
            user: docs,
            success: true
          }));

        case 17:
          res.status(400).json({
            success: false,
            msg: 'Email or password is incorrect'
          });
          _context2.next = 23;
          break;

        case 20:
          _context2.prev = 20;
          _context2.t0 = _context2["catch"](4);
          res.json({
            success: false,
            msg: _context2.t0.message
          });

        case 23:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[4, 20]]);
};

function validate(formData) {
  console.log(formData);
  var orderSchema = Joi.object({
    firstName: Joi.string().min(3),
    lastName: Joi.string().min(3),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    phone: Joi.string().regex(/^\+?\d{9,12}$/),
    lang: Joi.string(),
    image: Joi.string()
  });
  return orderSchema.validate(formData);
}