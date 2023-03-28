export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUsersData = state => state.auth.user;
export const selectAuthLoading = state => state.auth.isLoading;

export const selectContactsItems = state => state.phonebook.contacts.items;
export const selectFilteredContacts = state => applyFilter(state.phonebook);

export const applyFilter = state => {
  const { contacts, filter } = state;
  let alphabetOrder = contacts.items.map(contact => contact);

  alphabetOrder.sort((a, b) =>
    a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
  );

  if (filter !== '') {
    return alphabetOrder.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  return alphabetOrder;
};
