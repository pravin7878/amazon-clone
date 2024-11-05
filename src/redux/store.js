import {configureStore} from "@reduxjs/toolkit"
import categoryReducer from "./slises/catagorySlice";
import productReducer from "./slises/productSlice"

const store = configureStore({
  reducer: {
    categories: categoryReducer,
    products : productReducer, 
  },
});


export default store