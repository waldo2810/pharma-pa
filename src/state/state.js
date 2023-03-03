import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const stateSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    toggleOn: (state) => {
      state.isOpen = true;
    },
    toggleOff: (state) => {
      state.isOpen = false;
    },
  },
});

export const { toggleOn, toggleOff, setCurrentTab } = stateSlice.actions;
export default stateSlice.reducer;
