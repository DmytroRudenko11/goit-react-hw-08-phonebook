import { createSlice } from '@reduxjs/toolkit';
import {
  fetchLogin,
  fetchRegister,
  fetchLogout,
  fetchCurrentUser,
} from './authOperations';

const initialState = {
  user: { email: null, password: null },
  token: null,
  isLoggedIn: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(fetchLogout.fulfilled, (state, _) => {
        state.isLoggedIn = false;
        state.user = { email: null, password: null };
        state.token = null;
        state.error = null;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;

        state.isLoggedIn = true;
        state.error = null;
      })
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          state.error = action.payload;
        }
      );
    //       .addMatcher(
    //         action => action.type.endsWith('/pending'),
    //         (state, action) => {
    //           state.contacts.isLoading = true;
    //           state.contacts.error = null;
    //         }
    //       )
  },
});

export const { addFilter } = authSlice.actions;
