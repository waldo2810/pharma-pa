import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  currentTab: "medicamentos",
  currentModule: "dashboard",
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
    setCurrentModule: (state, action) => {
      state.currentModule = action.payload;
    },
  },
});

export const { toggleOn, toggleOff, setCurrentTab, setCurrentModule } =
  stateSlice.actions;
export default stateSlice.reducer;
