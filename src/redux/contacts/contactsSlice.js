import { createSlice } from '@reduxjs/toolkit';
import { fetchLogout } from 'redux/auth/authOperations';
import {
  fetchAllContacts,
  addContact,
  deleteContact,
} from './contactsOperations';

const CONTACTS_SLICE = '@@contacts';

const contactsInitialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

export const contactsSlice = createSlice({
  name: CONTACTS_SLICE,
  initialState: contactsInitialState,
  reducers: {
    addFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchLogout.fulfilled, (state, action) => {
        state.contacts.items = [];
        state.contacts.isLoading = false;
        state.filter = '';
      })
      .addCase(fetchAllContacts.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const itemIndex = state.contacts.items.findIndex(
          contact => contact.id === action.payload
        );
        state.contacts.items.splice(itemIndex, 1);
      })
      .addMatcher(
        action => action.type.endsWith('/pending'),
        (state, action) => {
          state.contacts.error = null;
          state.contacts.isLoading = true;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          state.contacts.isLoading = false;
          state.contacts.error = action.payload;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        (state, action) => {
          state.contacts.isLoading = false;
          state.contacts.error = null;
        }
      );
  },
});

export const { addFilter } = contactsSlice.actions;
