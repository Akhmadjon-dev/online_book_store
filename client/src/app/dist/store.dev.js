"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.persistor = exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _reduxPersist = require("redux-persist");

var _storage = _interopRequireDefault(require("redux-persist/lib/storage"));

var _authSlice = _interopRequireDefault(require("../features/auth/authSlice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var persistConfig = {
  key: 'root',
  storage: _storage["default"],
  whitelist: ['auth']
};
var rootReducer = (0, _toolkit.combineReducers)({
  auth: _authSlice["default"]
}); // const customizedMiddleware = curryGetDefaultMiddleware({
//   serializableCheck: false
// })

var persistedReducer = (0, _reduxPersist.persistReducer)(persistConfig, rootReducer);
var Storage = (0, _toolkit.configureStore)({
  reducer: persistedReducer,
  middleware: function middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: false
    });
  } // devTools: process.env.NODE_ENV !== 'production'

});
var persistor = (0, _reduxPersist.persistStore)(Storage);
exports.persistor = persistor;
var _default = Storage;
exports["default"] = _default;