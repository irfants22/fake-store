import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    item: {},
    status: false,
  },
  reducers: {
    addProductData: (state, action) => {
      const data = [...action.payload];
      state.data = data;
    },
    addProductDetailData: (state, action) => {
      const item = { ...action.payload };
      state.item = item;
    },
    setLoadingStatus: (state) => {
      state.status = !state.status;
    },
  },
});

export const { addProductData, addProductDetailData, setLoadingStatus } =
  productSlice.actions;
export default productSlice.reducer;
