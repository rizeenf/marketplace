import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cartReducer";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
