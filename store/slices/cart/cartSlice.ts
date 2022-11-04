import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartSwitch: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { cartSwitch } = cartSlice.actions;
