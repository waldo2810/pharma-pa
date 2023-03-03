import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  currentTab: "medicamentos",
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
    setCurrentTab: (state, action) => {
      state.currentTab = action.payload.currentTab;
    },
  },
});

export const { toggleOn, toggleOff, setCurrentTab } = stateSlice.actions;
export default stateSlice.reducer;
