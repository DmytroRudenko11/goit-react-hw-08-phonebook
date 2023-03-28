import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/contacts/contactsSlice';

export function SearchField() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  function onSearchInput(e) {
    setValue(e.target.value);
  }

  return (
    <SearchBox>
      <LabelForm>
        Find contacts by name
        <InputForm
          type="text"
          name="name"
          onChange={e => {
            onSearchInput(e);
            dispatch(addFilter(e.target.value));
          }}
          value={value}
        />
      </LabelForm>
    </SearchBox>
  );
}

const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  padding-bottom: 0;
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
