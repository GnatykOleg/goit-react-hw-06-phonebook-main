// с тулкитом комбайн под капотом
// import { combineReducers } from 'redux';
//
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

//
// У реакт тулкита под капотом DevTools
// import { composeWithDevTools } from 'redux-devtools-extension';
//

// contactsReducer это комбайн из 2х редьюсеров который передаю в сторе
import contactsReducer from './contacts/contacts-reducer';

import logger from 'redux-logger';

// СОЗДАНИЕ LOCALSTORAGE NA REDUX
import storage from 'redux-persist/lib/storage';
// СОЗДАНИЕ КОНФИГУРАЦИИ ПЕРСИСТА
const contactsPersistConfig = {
  key: 'Contacts',
  storage,
  blacklist: ['filter', '_persist'],
};

// Не нужен комбайн он вызывается под капотом,
// теперь я просто передаю объект в reducer сам создаст RootReducer
// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());

// getDefaulMiddleware это дефолтные мидлвары
// распыляем вызов дефолат и добавляем новый ссылку!
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

// ДЕЛАЕМ РУТ РЕДЮСЕР ДЛЯ ОБЛЕГЧЕНИЯ КОДА
const rootReducer = combineReducers({ contacts: contactsReducer });
// СОЗДАЕМ ПЕРСИСТНЫЙ РЕДБЮСЕР С КОНФИГОМ И РУТ РЕДЬЮСЕРОМ И ПЕРЕДАЕМ СТОРЕ РЕДЬЮСЕРУ
const persistedReducer = persistReducer(contactsPersistConfig, rootReducer);

export const store = configureStore({
  // Старый метод с помощью комбайна
  // reducer: rootReducer,
  //
  reducer: persistedReducer,
  // devTools: true/false МОЖНО ВКЛЮЧАТЬ И ВЫКЛЮЧАТЬ DEVTOOLS
  //
  // Ниже включение только для разработки(не для продакшена)
  devTools: process.env.NODE_ENV === 'development',
  // ПРОСЛОЙКА "middleware" как пример Logger
  // или middleware:middleware но так как свойство и переменная
  // одинаковое то пишем ниже
  middleware,
});

export const persistor = persistStore(store);
