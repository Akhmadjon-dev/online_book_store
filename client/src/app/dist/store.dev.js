"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _authSlice = _interopRequireDefault(require("../features/auth/authSlice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _toolkit.configureStore)({
  reducer: {
    auth: _authSlice.default
  }
});
exports.store = store;