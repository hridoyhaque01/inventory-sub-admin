import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const inventorySlice = createSlice({
  name: "inventorySlice",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export default inventorySlice.reducer;

export const { setData } = inventorySlice.actions;
