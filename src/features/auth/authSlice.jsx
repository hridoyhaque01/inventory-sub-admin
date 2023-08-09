import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: undefined,
  store: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setStore: (state, action) => {
      state.accessToken = action.payload.token;
      state.store = action.payload.store;
    },
    updateStore: (state, action) => {
      state.store = { ...state.store, ...action.payload };
    },
    logout: (state) => {
      state.accessToken = undefined;
      state.store = undefined;
      localStorage.removeItem("store");
    },
  },
});

export const { setStore, logout, updateStore } = authSlice.actions;
export default authSlice.reducer;
