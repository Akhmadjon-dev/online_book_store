"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _store = _interopRequireDefault(require("../app/store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Client = _axios.default.create({
  baseURL: "https://bookzon.herokuapp.com/api",
  // baseURL: process.env.REACT_APP_API_URL,
  timeout: 10000
});

Client.interceptors.request.use(function (config) {
  var token = _store.default.getState().auth.token;

  if (token) {
    config.headers.Authorization = "Bearer ".concat(token);
  }

  return config;
}, function (err) {
  console.log(err);
});
Client.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error.response.status === 401) {
    _store.default.dispatch({
      type: 'LOGOUT'
    });
  }

  return Promise.reject(error);
});
var _default = Client;
exports.default = _default;