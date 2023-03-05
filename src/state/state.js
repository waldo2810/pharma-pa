import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  currentTab: "medicamentos",
  currentModule: "dashboard",
  activeModuleStyles: "",
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
    setActiveModuleStyles: (state, action) => {
      state.activeModuleStyles = action.payload;
    },
  },
});

export const {
  toggleOn,
  toggleOff,
  setCurrentTab,
  setCurrentModule,
  setActiveModuleStyles,
} = stateSlice.actions;
export default stateSlice.reducer;
