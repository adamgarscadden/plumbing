import { createSlice, configureStore } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "product",
  initialState: { productSelector: "toilets", productSort: 1, pagination: 1 },
  reducers: {
    changeProductSelector: (state, action) => {
      state.productSelector = action.payload;
    },
    changeProductSort: (state, action) => {
      state.productSort = action.payload;
    },
    changePageNumber: (state, action) => {
      state.pagination = action.payload;
    },
    changePageDecrement: (state) => {
      state.pagination--;
    },
    changePageIncrement: (state) => {
      state.pagination++;
    },
  },
});

export const store = configureStore({
  reducer: {
    product: slice.reducer,
  },
});

export const {
  changeProductSelector,
  changeProductSort,
  changePageNumber,
  changePageDecrement,
  changePageIncrement,
} = slice.actions;
export default slice.reducer;
