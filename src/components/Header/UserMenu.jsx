import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectUsersData } from 'redux/selector';
import { useNavigate } from 'react-router-dom';
import { fetchLogout } from 'redux/auth/authOperations';

export const UserMenu = () => {
  const usersData = useSelector(selectUsersData);
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(fetchLogout()).then(() => navigation('/'));
  };
  return (
    <UserContainer>
      <UserBox>
        <UserData>{usersData.email}</UserData>
        <UserData>{usersData.name}</UserData>
      </UserBox>
      <LogOutBtn onClick={handleLogOut}> Logout</LogOutBtn>
    </UserContainer>
  );
};

const UserContainer = styled.div`
  height: 100%;
  display: flex;
  gap: 10px;
`;
const UserBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  color: white;
`;
const UserData = styled.p`
  font-size: 13px;
  margin: 0;
`;

const LogOutBtn = styled.button`
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  border-left: 1px solid #bbb;

  &:hover,
  :focus {
    outline: none;
    background-color: #4caf50;
  }
`;
