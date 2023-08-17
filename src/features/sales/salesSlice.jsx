import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pdfData: {},
  isDownloadPdf: false,
};

const salesSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {
    setPdfData: (state, action) => {
      state.pdfData = action.payload;
      state.isDownloadPdf = true;
    },
    resetPdfData: (state) => {
      state.pdfData = {};
      state.isDownloadPdf = false;
    },
  },
});

export const { setPdfData, resetPdfData } = salesSlice.actions;
export default salesSlice.reducer;
