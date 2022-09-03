import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

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
