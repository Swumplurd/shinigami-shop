import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDark: true
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    themeSwitch: (state, action) => {state.isDark = action.payload}
  },
});

export const { themeSwitch } = themeSlice.actions;