import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  isError: false,
  data: {},
};
// const url = "https://dummyjson.com/products";
// ?limit=10&skip=10&select=title,price
const url = "https://dummyjson.com/products/category";

export const getProductByCat = createAsyncThunk("GET_PRODUCTS", async (catagory) => {
  try {
    const res = await axios.get(`${url}/${catagory}?limit=${10}&skip=${0}`);
    return {res : res.data , catagory};
  } catch (error) {
    console.log(error);
  }
});

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getProductByCat.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getProductByCat.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.data[payload?.catagory] = payload.res
      })
      .addCase(getProductByCat.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default productSlice.reducer;
