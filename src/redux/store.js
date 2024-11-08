import {configureStore} from "@reduxjs/toolkit"
import categoryReducer from "./slises/catagorySlice";
import productReducer from "./slises/productSlice"
import cartReduser from "./slises/cartSlices"
import searchReduser from "./slises/searchSllice"

const store = configureStore({
  reducer: {
    categories: categoryReducer,
    products : productReducer, 
    cart : cartReduser,
    searchResult : searchReduser
  },
});


export default store