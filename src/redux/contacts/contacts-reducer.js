import { combineReducers } from 'redux';
// // В НОВОМ МЕТОДЕ МНЕ БОЛЬШЕ НЕ НУЖНО ХРАНИТЬ ТИПЫ Я ИХ ПЕРЕДАЮ В CREATEACTION
// import { SET_CONTACTS, DELETE_CONTACTS, SET_FILTER } from './contacts-type';

import { createReducer } from '@reduxjs/toolkit';
import { setContacts, setFilter, deleteContacts } from './contacts-actions';

const contacts = createReducer([], {
  // ЭТО СТАНДАРТНЫЙ СПОСОБ
  // 'contacts/setContacts': (state, action) => [...state, action.payload],
  // 'ЭТО ВЫЧИСЛЕНИЕ ОБЪЕКТА
  // НЕ ЗАБЫВАЙ ЧТО МОЖНО ДЕСТРУКТУРИЗИРОВАТЬ
  // [setContacts]: (state, {payload}) => [...state, payload],
  [setContacts]: (state, action) => [...state, action.payload],
  [deleteContacts]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

// ЕСЛИ ПЕРВЫЙ ПАРАМЕТР НЕ АКТИВЕН МОЖНО  ПОСТАВИТЬ НИЖНЕЕ ПОДЧЕРКИВАНИЕ

// const filter = createReducer('', {
//   [setFilter]: (state или _, action) => action.payload,
// });

const filter = createReducer('', {
  [setFilter]: (_, action) => action.payload,
});

// КОМБАЙНОМ СОВМЕЩАЮ 2 РЕДЬЮСЕРА ЧТО БЫ ПЕРЕДАТЬ В STORE REDUCER
export default combineReducers({ contacts, filter });

// СТАРЫЙ МЕТОД
// const contacts = (state = [], action) => {
//   switch (action.type) {
//     case SET_CONTACTS:
//       return [...state, action.payload];
//     case DELETE_CONTACTS:
//       return state.filter(contact => contact.id !== action.payload);
//     default:
//       return state;
//   }
// };

// const filter = (state = '', action) => {
//   switch (action.type) {
//     case SET_FILTER:
//       return action.payload;
//     default:
//       return state;
//   }
// };

// export default combineReducers({ contacts, filter });
