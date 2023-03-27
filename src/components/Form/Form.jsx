import { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { addContact } from '../../redux/contacts/contactsOperations';
import { selectContactsItems } from 'redux/selector';

export function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contactsData = useSelector(selectContactsItems);

  const handleMatch = valueToCheck => {
    const arrayOfNames = contactsData.map(({ name }) => name);
    return arrayOfNames.includes(valueToCheck);
  };

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (handleMatch(name)) {
      reset();
      return toast.info(`${name} is already in your contact list`);
    }
    const contact = {
      name,
      number,
    };
    dispatch(addContact(contact));
    reset();
  };

  function reset() {
    setName('');
    setNumber('');
  }

  const handleChangeInput = e => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    switch (inputName) {
      case 'name':
        setName(inputValue);
        break;
      case 'number':
        setNumber(inputValue);
        break;
      default:
        return;
    }
  };

  return (
    <AppForm onSubmit={handleSubmit}>
      <LabelForm>
        Name
        <InputForm
          onChange={handleChangeInput}
          type="text"
          placeholder="Add your contact"
          value={name}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </LabelForm>

      <LabelForm>
        Number
        <InputForm
          onChange={handleChangeInput}
          value={number}
          type="tel"
          placeholder="Add number of your contact"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </LabelForm>
      <SubmitButton>Add contact</SubmitButton>
    </AppForm>
  );
}

const AppForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
`;

const InputForm = styled.input`
  width: 418px;
  padding: 12px 20px;
  margin: 8px 0;
  display: block;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const LabelForm = styled.label`
  font-size: 14px;
`;

const SubmitButton = styled.button`
  width: 100%;
  margin: 0 auto;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;
