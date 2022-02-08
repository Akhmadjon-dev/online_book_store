import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import store from 'redux-persist/lib/storage';
import authReducer  from '../features/auth/authSlice';

const persistConfig = {
  key: 'root',
  storage: store,
  whitelist: ['auth']
}

const rootReducer = combineReducers({
  auth: authReducer
})

// const customizedMiddleware = curryGetDefaultMiddleware({
//   serializableCheck: false
// })

const persistedReducer = persistReducer(persistConfig, rootReducer)

const Storage = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
  // devTools: process.env.NODE_ENV !== 'production'

})
const persistor = persistStore(Storage)

export default Storage
export { persistor }