import { createSlice, configureStore } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "product",
  initialState: {},
  reducers: {},
});

export const store = configureStore({
  reducer: {
    product: slice.reducer,
  },
});

export const {} = slice.actions;
export default slice.reducer;
