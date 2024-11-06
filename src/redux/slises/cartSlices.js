import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isError: false,
  data: JSON.parse(localStorage.getItem("cart")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const cartData = JSON.parse(localStorage.getItem("cart")) || [];
      const existingProduct = cartData.find((item) => item.id === payload.id);

      if (existingProduct) {
        state.data = cartData.map((item) =>
          item.id === payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        state.data = [...cartData, { ...payload, quantity: 1 }];
      }
      localStorage.setItem("cart", JSON.stringify(state.data));
    },

    removeToCart: (state, { payload }) => {
      const cartData = JSON.parse(localStorage.getItem("cart")) || [];
      state.data = cartData.filter((product) => product.id !== payload);
      localStorage.setItem("cart", JSON.stringify(state.data));
    },

    increaseQuentity: (state, { payload }) => {
      const cartData = JSON.parse(localStorage.getItem("cart")) || [];
      state.data = cartData.map((product) => {
        if (product.id === payload && product?.quentity < product?.stock) {
          return { ...product, quentity: product.quentity + 1 };
        }
        return product;
      });
      localStorage.setItem("cart", JSON.stringify(state.data));
    },

    dicreaseQuentity: (state, { payload }) => {
      const cartData = JSON.parse(localStorage.getItem("cart")) || [];
      state.data = cartData.map((product) => {
        if (product.id === payload && product?.quentity > 1) {
          return { ...product, quentity: product.quentity - 1 };
        }
        return product;
      });
      localStorage.setItem("cart", JSON.stringify(state.data));
    },

    chackOut: (state) => {
      state.data = [];
      localStorage.setItem("cart", JSON.stringify(state.data));
    },
  },
});

export default cartSlice.reducer;
export const {
  addToCart,
  increaseQuentity,
  dicreaseQuentity,
  removeToCart,
  chackOut,
} = cartSlice.actions;
