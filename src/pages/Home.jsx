import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUsersData } from 'redux/selector';

export const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectUsersData);
  return (
    <div>
      <h2>Welcome, {isLoggedIn ? userName.name : 'guest'}!</h2>
      <p>
        Phonebook - is a perfect solution for organization of contacts, which
        you want to hide from your mobile phone!
      </p>
    </div>
  );
};
