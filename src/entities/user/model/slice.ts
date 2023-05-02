import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TypeUser } from '../types';

const initialState: TypeUser = {
  email: null,
  token: null,
  id: null,
};

export const userSlice = createSlice({
  name: '@user',
  initialState,
  reducers: {
    setUser: (_, action: PayloadAction<TypeUser>) => action.payload,
    removeUser: (state: TypeUser) => {
      state.email = null;
      state.id = null;
      state.token = null;
    },
  },
});

export const { reducer } = userSlice;

export const { setUser, removeUser } = userSlice.actions;

export const selectUserData = (state: RootState): TypeUser => state.user;
