import { createSlice, configureStore } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "product",
  initialState: { productSelector: "toilets", productSort: 1 },
  reducers: {
    changeProductSelector: (state, action) => {
      state.productSelector = action.payload;
    },
    changeProductSort: (state, action) => {
      state.productSort = action.payload;
    },
  },
});

export const store = configureStore({
  reducer: {
    product: slice.reducer,
  },
});

export const { changeProductSelector, changeProductSort } = slice.actions;
export default slice.reducer;
