import { configureStore } from "@reduxjs/toolkit";
import heartSlice from "./heartSlice";
import cartSlice from "./cartSlice";
export const store = configureStore({
  reducer: {
    wishlist: heartSlice,
    cart: cartSlice,
  },
});
