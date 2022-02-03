"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.loginFailure = exports.loginSuccess = exports.loginLoading = exports.authSlice = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _axios = _interopRequireDefault(require("../../utils/axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  isAuthenticated: false,
  user: {},
  token: null,
  error: null,
  loading: false,
  isAdmin: false
};
var authLoginIn = (0, _toolkit.createAsyncThunk)('auth/login', function _callee(data, thunkAPI) {
  var res;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_axios.default.post('/auth/login', data));

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
  },
  extraReducers: function extraReducers(builder) {
    builder.addCase(authLoginIn.pending, function (state, action) {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(authLoginIn.fulfilled, function (state, action) {
      state.loading = false;
      state.error = null;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAdmin = action.payload.isAdmin;
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