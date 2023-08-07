import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  searchBarValue: null,
};

const inventorySlice = createSlice({
  name: "inventorySlice",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },

    getInventoriesBySearch: (state, action) => {
      const value = action.payload;
      const filteredInventories = state.data?.filter((item) =>
        state.searchBarValue !== null
          ? item?.title?.toLowerCase().includes(value?.toLowerCase())
          : true
      );
      state.data = filteredInventories;
      setSearchBarValue(searchValue);
    },
  },
});

export default inventorySlice.reducer;

export const { setData } = inventorySlice.actions;
