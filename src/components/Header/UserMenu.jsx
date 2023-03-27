import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectUsersData } from 'redux/selector';
import { NavLink, useNavigate } from 'react-router-dom';
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
      <LogOutBtn>
        <NavigationLink to="/" onClick={handleLogOut}>
          Logout
        </NavigationLink>
      </LogOutBtn>
    </UserContainer>
  );
};

const UserContainer = styled.div`
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

const NavigationLink = styled(NavLink)`
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;

  &.active {
    background-color: #4caf50;
  }

  &:hover:not(.active) {
    background-color: #111;
  }
`;

const LogOutBtn = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  border-left: 1px solid #bbb;
`;
