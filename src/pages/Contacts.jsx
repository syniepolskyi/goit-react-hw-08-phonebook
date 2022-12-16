import ContactForm from '../components/phoneBook/ContactForm/ContactForm ';
import { ContactsList } from '../components/phoneBook/ContactsList/ContactsList';
import { Filter } from '../components/phoneBook/Filter/Filter';

import { Wrapper } from './Contacts.styled';

const ContactsPage = () => {
  return (
    <Wrapper sx={{ mt: { xs: '5px', sm: '20px' } }}>
      <ContactForm />
      <Filter />
      <ContactsList />
    </Wrapper>
  );
};
export default ContactsPage;
