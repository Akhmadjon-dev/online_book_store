"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.loginFailure = exports.loginSuccess = exports.loginLoading = exports.authSlice = void 0;

var _toolkit = require("@reduxjs/toolkit");

var initialState = {
  isAuthenticated: false,
  user: {},
  token: null,
  error: null,
  loading: false,
  isAdmin: false
};
var authSlice = (0, _toolkit.createSlice)({
  name: 'auth',
  initialState: initialState,
  reducers: {
    loginLoading: function loginLoading(state, action) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: function loginSuccess(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.loading = false;
      state.error = null;
      state.isAdmin = action.payload.isAdmin;
    },
    loginFailure: function loginFailure(state, action) {
      state.loading = false;
      state.error = action.payload.error;
    }
  }
});
exports.authSlice = authSlice;
var _authSlice$actions = authSlice.actions,
    loginLoading = _authSlice$actions.loginLoading,
    loginSuccess = _authSlice$actions.loginSuccess,
    loginFailure = _authSlice$actions.loginFailure;
exports.loginFailure = loginFailure;
exports.loginSuccess = loginSuccess;
exports.loginLoading = loginLoading;
var _default = authSlice.reducer;
exports.default = _default;