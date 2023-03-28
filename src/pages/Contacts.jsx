import { ContactList } from 'components/Contacts/ContactList';
import { Form } from 'components/Contacts/Form';
import { SearchField } from 'components/Contacts/SearchField';
import styled from 'styled-components';

export const Contacts = () => {
  return (
    <Wrapper>
      <AppHeader>Phonebook</AppHeader>
      <Form />
      <ListHeader>Contacts</ListHeader>
      <SearchField />
      <ContactList />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 500px;
  margin: 0 auto;
  padding: 15px;
`;

const ListHeader = styled.h2`
  text-align: center;
`;

const AppHeader = styled.h1`
  text-align: center;
`;
