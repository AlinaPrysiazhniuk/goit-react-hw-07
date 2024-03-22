import { useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchContact from './SearchBox/SearchBox';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/contactsOps';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchContact />
      <ContactList />
    </>
  );
}

export default App;
