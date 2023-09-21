import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  products: [],
};

export const fetchAllProducts = createAsyncThunk(
  "home/fetchAllProducts",
  async () => {
    const respObj = await fetch("https://fakestoreapi.com/products");
    const data = await respObj.json();
    return data;
  }
);

const homeSlice = createSlice({
  name: "homeSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      });
  },
});

export default homeSlice.reducer;
