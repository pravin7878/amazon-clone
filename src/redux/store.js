import {configureStore} from "@reduxjs/toolkit"
import categoryReducer from "./slises/catagorySlice";
import productReducer from "./slises/productSlice"
import cartReduser from "./slises/cartSlices"

const store = configureStore({
  reducer: {
    categories: categoryReducer,
    products : productReducer, 
    cart : cartReduser
  },
});


export default store