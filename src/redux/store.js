import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import phoneBook from './contacts/contacts-reducer';

import logger from 'redux-logger';

import storage from 'redux-persist/lib/storage';

const contactsPersistConfig = {
  key: 'Contacts',
  storage,
  blacklist: ['filter', '_persist'],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const rootReducer = combineReducers({ phoneBook: phoneBook });

const persistedReducer = persistReducer(contactsPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

  devTools: process.env.NODE_ENV === 'development',

  middleware,
});

export const persistor = persistStore(store);
