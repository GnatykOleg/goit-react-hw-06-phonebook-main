import { Form, Contacts, Filter } from 'components';
import { useSelector, useDispatch } from 'react-redux';
import { setContacts } from 'redux/contacts/contacts-actions';

export function App() {
  const { contacts, filter } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const formSubmitData = contact => {
    const newContactName = contact.name.toLowerCase();

    if (contacts.some(el => el.name.toLowerCase() === newContactName)) {
      alert(`${contact.name} is already in contacts`);
    } else {
      // const newContact = {
      //   id: shortid(),
      //   ...contact,
      // };
      // setContacts(prevState => [...prevState, newContact]);
      dispatch(setContacts(contact));
    }
  };

  // ДО ПЕРЕМЕЩЕНИЯ В ФИЛЬТЕР
  // const changeFilter = event => {
  //   const { value } = event.currentTarget;
  //   setFilter(value);
  //   dispatch(setFilter(value));
  // };

  // ДО ПЕРЕМЕЩЕНИЯ В CONTACTS
  // const deleteContact = todoId => {
  //   // setContacts(prevState =>
  //   //   prevState.filter(contact => contact.id !== todoId)
  //   // );
  //   dispatch(deleteContacts(todoId));
  // };

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
  // РАНЬШЕ ПЕРЕДЕВАЛ КАК ПРОПСЫ А ТЕПЕРЬ БЕРУ СТОРЕ ПРЯМО В ЭТИХ ФАЙЛАХ
  //  return (
  //    <div className="appDiv">
  //      <h1>Phonebook</h1>
  //      <Form formSubmitData={formSubmitData} />
  //      <h2>Contacts</h2>
  //      <Filter value={filter} onChange={changeFilter} />
  //      <Contacts data={filteredContacts} deleteContact={deleteContact} />
  //    </div>
  //  );
}
// }
