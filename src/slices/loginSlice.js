import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: null,
  reducers: {
    addUser: (state,action) => {
      state = action.payload;
      return state;
    },
    removeUser: (state) => {
      return null
    },
  },
});

export const { addUser,removeUser } = loginSlice.actions;

export default loginSlice.reducer;