import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

createSlice;
const initialState = {
  isLoading: false,
  Error: { isError: false, ErrorMassage: "" },
  result: [],
};

// actions
export const getSerachResult = createAsyncThunk(
  "SEARCH_PRODUCT",
  async ({ quiry, priceOrder, skip }) => {
    try {
      const res = await axios.get(
        `https://dummyjson.com/products/search?q=${quiry}&sortBy=price&order=${priceOrder}&limit=8&skip=${skip}`
      );
      return res.data;
    } catch (error) {
      console.log("error while searching data", error);
      return { ErrorMassage: "Data Not Found" };
    }
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getSerachResult.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getSerachResult.rejected, (state, { payload }) => {
        state.Error.isError = true;
        state.Error.ErrorMassage = payload.ErrorMassage;
      })

      .addCase(getSerachResult.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.result = payload;
      });
  },
});

export default searchSlice.reducer;
