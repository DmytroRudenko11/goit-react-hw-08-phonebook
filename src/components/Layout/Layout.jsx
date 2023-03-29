import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { selectAuthLoading, selectIsLoggedIn } from 'redux/selector';

import { ThreeCircles } from 'react-loader-spinner';

import { UserMenu } from 'components/Header/UserMenu';

export function Layout() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectAuthLoading);

  return (
    <div>
      <HeaderBar>
        <NavList>
          <NavItem>
            <NavBar>
              <NavigationLink to="/">Home</NavigationLink>
              {isLoggedIn && (
                <NavigationLink to="/contacts">Contacts</NavigationLink>
              )}
            </NavBar>
          </NavItem>

          {!isLoggedIn ? (
            <AuthBox>
              <NavItem>
                <NavigationLink to="/login">Login</NavigationLink>
              </NavItem>
              <NavItem>
                <NavigationLink to="/registration">Registration</NavigationLink>
              </NavItem>
            </AuthBox>
          ) : (
            <NavItem>
              <UserMenu />
            </NavItem>
          )}
        </NavList>
      </HeaderBar>
      {isLoading ? (
        <LoaderBox>
          <ThreeCircles
            height="100"
            width="100"
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor=""
            innerCircleColor=""
            middleCircleColor=""
          />
        </LoaderBox>
      ) : (
        <Outlet />
      )}
    </div>
  );
}

const HeaderBar = styled.header`
  background-color: #333;
`;
const NavBar = styled.nav`
  display: flex;
`;

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

const LoaderBox = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
