import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUserId: null,
	token: null,
	isLogin: false,
  },
  reducers: {
    setCurrentUserId: (state, { payload }) => {

	  state.currentUserId = payload;
	},
	setisLogin: (state, { payload }) => {
	  state.isLogin = payload;
	},
	setToken: (state, { payload }) => {
		state.token = payload;
	  },
  },
});

export const {
	setCurrentUserId,
	setisLogin,
	setToken,
} = userSlice.actions;

export default userSlice.reducer;