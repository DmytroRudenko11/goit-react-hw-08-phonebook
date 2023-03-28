import styled from 'styled-components';
import PropTypes from 'prop-types';
import { deleteContact } from '../../redux/contacts/contactsOperations';
import { useDispatch } from 'react-redux';

export function Item({ name, number, id }) {
  const dispatch = useDispatch();
  return (
    <ContactItem>
      <ContactText>
        {name}: {number}
      </ContactText>
      <ContactButton onClick={() => dispatch(deleteContact(id))} type="button">
        Delete
      </ContactButton>
    </ContactItem>
  );
}

Item.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

const ContactItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px dotted #4caf50;
`;

const ContactText = styled.p`
  font-size: 14px;
`;

const ContactButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 25px;
  background-color: #c21807;
  color: white;

  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #ff2400;
  }
`;
