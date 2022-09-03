// import { combineReducers } from 'redux';

import { createReducer } from '@reduxjs/toolkit';
import { setContacts, setFilter, deleteContacts } from './contacts-actions';

const phoneBook = createReducer(
  { contacts: [], filter: '' },
  {
    [setContacts]: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
    [setFilter]: (state, action) => {
      state.filter = action.payload;
    },
    [deleteContacts]: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  }
);

export default phoneBook;
