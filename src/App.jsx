import { Form, Contacts, Filter } from 'components';
import { useSelector, useDispatch } from 'react-redux';
import { setContacts } from 'redux/contacts/contacts-actions';

export function App() {
  const { contacts, filter } = useSelector(state => state.phoneBook);
  const dispatch = useDispatch();

  const formSubmitData = contact => {
    const newContactName = contact.name.toLowerCase();

    if (contacts.some(el => el.name.toLowerCase() === newContactName)) {
      alert(`${contact.name} is already in contacts`);
    } else {
      dispatch(setContacts(contact));
    }
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );

  return (
    <div className="appDiv">
      <h1>Phonebook</h1>
      <Form formSubmitData={formSubmitData} />
      <h2>Contacts</h2>
      <Filter />
      <Contacts data={filteredContacts} />
    </div>
  );
}
