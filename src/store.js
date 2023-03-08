import { createSlice, configureStore } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "product",
  initialState: { productSelector: "toilets" },
  reducers: {
    changeProductSelector: (state, action) => {
      state.productSelector = action.payload;
    },
  },
});

export const store = configureStore({
  reducer: {
    product: slice.reducer,
  },
});

export const { changeProductSelector } = slice.actions;
export default slice.reducer;
