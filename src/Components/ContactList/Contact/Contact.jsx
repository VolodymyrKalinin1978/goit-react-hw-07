import { Button } from 'Components/Button/Button.styled';
import { ContainerLi, Person, Telefone } from './Contact.styled';
import { deleteContact } from '../../../redux/contactsSlice';

import { useDispatch, useSelector } from 'react-redux';

const Contact = () => {
  const dispatch = useDispatch();
  const contactList = useSelector(state => state.contacts.items);
  const searchFilter = useSelector(state => state.filters.name);

  const filteredContacts = contactList.filter(contactLists =>
    contactLists.name.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <>
      {filteredContacts.map(contactLists => (
        <ContainerLi key={contactLists.id}>
          <div>
            <p>
              <Person />
              {contactLists.name}
            </p>
            <p>
              <Telefone />
              {contactLists.number}
            </p>
          </div>
          <Button type="button" onClick={() => dispatch(deleteContact(contactLists.id))}>
            Delete
          </Button>
        </ContainerLi>
      ))}
    </>
  );
};

export default Contact;
