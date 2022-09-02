// НОВЫЙ МЕТОД
import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

// РАЗНИЦА В ТОМ ЧТО СТРОКА ЭТО TYPE,А ТО ЧТО ПЕРЕДАЕШЬ
// ПРИ ВЫЗОВЕ ЭТО PAYLOAD
// setContacts(5) ===  {type:'contacts/setContacts', payload:5}

// Это если при вызове 1 аргумент.
// CreateAction возвращает Функции action creator
// export const setContacts = createAction('contacts/setContacts');

// Это если нужно при вызове передавать объект ПЕРЕДАЮ FN анонимку или общую
// более точно указываю что буду передавать в payload PREPARE CALLBACK
const setContacts = createAction('contacts/setContacts', contact => {
  return {
    payload: {
      id: shortid(),
      ...contact,
    },
  };
});
const setFilter = createAction('contacts/setFilter');
const deleteContacts = createAction('contacts/deleteContact');

export { setContacts, setFilter, deleteContacts };

// СТАРЫЙ МЕТОД

// import { SETCONTACTS, DELETECONTACTS, SETFILTER } from './contacts-type';
// import shortid from 'shortid';
// export const SET_CONTACTS = 'contacts/setContacts';
// export const DELETE_CONTACTS = 'contacts/deleteContact';
// export const SET_FILTER = 'contacts/setFilter';

// export const setContacts = contact => ({
//   type: SETCONTACTS,
//   payload: {
//     id: shortid(),
//     ...contact,
//   },
// });

// export const setFilter = value => ({
//   type: DELETECONTACTS,
//   payload: value,
// });

// export const deleteContact = todoId => ({
//   type: SETFILTER,
//   payload: todoId,
// });

// console.log('setFilter(5)', setFilter(5))
