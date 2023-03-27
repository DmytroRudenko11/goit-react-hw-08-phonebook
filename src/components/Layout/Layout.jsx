import { useSelector } from 'react-redux';
import { Outlet, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { selectIsLoggedIn } from 'redux/selector';
import { UserMenu } from 'components/Header/UserMenu';

export function Layout() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <HeaderBar>
        <NavBar>
          <NavList>
            <NavItem>
              {' '}
              <NavigationLink to="/contacts">Contacts</NavigationLink>
            </NavItem>
            {!isLoggedIn ? (
              <AuthBox>
                <NavItem>
                  <NavigationLink to="/">Login</NavigationLink>
                </NavItem>
                <NavItem>
                  <NavigationLink to="/registration">
                    Registration
                  </NavigationLink>
                </NavItem>
              </AuthBox>
            ) : (
              <NavItem>
                <UserMenu />
              </NavItem>
            )}
          </NavList>
        </NavBar>
      </HeaderBar>
      <Outlet />
    </div>
  );
}

const HeaderBar = styled.header`
  background-color: #333;
`;
const NavBar = styled.nav``;

const AuthBox = styled.div`
  display: flex;
`;

const NavList = styled.ul`
  max-width: 1200px;
  list-style-type: none;
  margin: 0 auto;
  padding: 0;
  overflow: hidden;
  background-color: #333;
  display: flex;
  justify-content: space-between;
`;
const NavItem = styled.li``;

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
