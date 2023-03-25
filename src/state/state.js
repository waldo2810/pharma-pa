import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  currentTab: "medicamentos",
  currentGestionTab: "medicamentos",
  currentCarteraTab: "cxc",
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
    setCurrentGestionTab: (state, action) => {
      state.currentGestionTab = action.payload.currentGestionTab;
    },
    setCurrentCarteraTab: (state, action) => {
      state.currentCarteraTab = action.payload.currentCarteraTab;
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
  setCurrentGestionTab,
  setCurrentCarteraTab,
  setCurrentModule,
  setActiveModuleStyles,
} = stateSlice.actions;
export default stateSlice.reducer;
