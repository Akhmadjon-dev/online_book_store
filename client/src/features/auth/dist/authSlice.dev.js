"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.loginFailure = exports.loginSuccess = exports.loginLoading = exports.authSlice = exports.authSignUp = exports.authLoginIn = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _axios = _interopRequireDefault(require("../../utils/axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  user: {},
  isAuthenticated: false,
  token: null,
  error: null,
  loading: false
};
var authLoginIn = (0, _toolkit.createAsyncThunk)('auth/login', function _callee(data, thunkAPI) {
  var res;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_axios.default.post('/login', data));

        case 3:
          res = _context.sent;
          return _context.abrupt("return", res.data);

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", _context.t0.response.data);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
exports.authLoginIn = authLoginIn;
var authSignUp = (0, _toolkit.createAsyncThunk)('auth/signup', function _callee2(data, thunkAPI) {
  var res;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_axios.default.post('/sign-up', data));

        case 3:
          res = _context2.sent;
          return _context2.abrupt("return", res.data);

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", _context2.t0.response.data);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
exports.authSignUp = authSignUp;
var authSlice = (0, _toolkit.createSlice)({
  name: 'auth',
  initialState: initialState,
  reducers: {// loginLoading: (state, action) => {
    //     state.loading = true;
    //     state.error = null;
    // },
    // loginSuccess: (state, action) => {
    //     state.isAuthenticated = true;
    //     state.user = action.payload.user;
    //     state.token = action.payload.token;
    //     state.loading = false;
    //     state.error = null;
    //     state.isAdmin = action.payload.isAdmin;
    // },
    // loginFailure: (state, action) => {
    //     state.loading = false;
    //     state.error = action.payload.error;
    // }
  },
  extraReducers: function extraReducers(builder) {
    builder.addCase(authLoginIn.pending, function (state, action) {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(authLoginIn.fulfilled, function (state, action) {
      state.loading = false;
      state.error = null;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    });
    builder.addCase(authLoginIn.rejected, function (state, action) {
      state.loading = false;
      state.error = action.payload.error;
    });
    builder.addCase(authSignUp.pending, function (state, action) {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(authSignUp.fulfilled, function (state, action) {
      console.log(action.payload);
      state.loading = false;
      state.error = null;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    });
    builder.addCase(authSignUp.rejected, function (state, action) {
      state.loading = false;
      state.error = action.payload.error;
    });
  }
});
exports.authSlice = authSlice;
var _authSlice$actions = authSlice.actions,
    loginLoading = _authSlice$actions.loginLoading,
    loginSuccess = _authSlice$actions.loginSuccess,
    loginFailure = _authSlice$actions.loginFailure; // const UserSignIn = () => async (dispatch, getState) => {
//     dispatch(loginLoading());
//     const response = await axios.post('/auth/login', {
//         email: getState().auth.email,
//         password: getState().auth.password,
//     });
//     if (response.status === 200) {
//         dispatch(loginSuccess({
//             user: response.data.user,
//             token: response.data.token,
//             isAdmin: response.data.isAdmin,
//         }));
//     } else {
//         dispatch(loginFailure({
//             error: response.data.error,
//         }));    
//     }
// }

exports.loginFailure = loginFailure;
exports.loginSuccess = loginSuccess;
exports.loginLoading = loginLoading;
var _default = authSlice.reducer;
exports.default = _default;