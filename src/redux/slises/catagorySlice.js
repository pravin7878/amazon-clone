import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
};

export const getCategory = createAsyncThunk("GET_CATAGORY", async () => {
  try {
    const res = await axios.get("https://dummyjson.com/products/category-list");
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

const catagorySlice = createSlice({
  name: "catagories",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCategory.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getCategory.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default catagorySlice.reducer;
