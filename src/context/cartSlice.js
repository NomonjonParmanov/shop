import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: JSON.parse(localStorage.getItem("carts")) || [],
  },
  reducers: {
    addToCart(state, actions) {
      let index = state.value.findIndex((el) => el.id === actions.payload.id);
      if (index < 0) {
        state.value = [...state.value, { ...actions.payload, quantity: 1 }];
      }
      localStorage.setItem("carts", JSON.stringify(state.value));
    },
    incCart(state, actions) {
      let index = state.value.findIndex((el) => el.id === actions.payload.id);
      state.value = state.value.map((product, inx) => {
        if (index === inx) {
          return { ...product, quantity: product.quantity + 1 };
        } else {
          return product;
        }
      });
      localStorage.setItem("carts", JSON.stringify(state.value));
    },
    decCart(state, actions) {
      let index = state.value.findIndex((el) => el.id === actions.payload.id);
      state.value = state.value.map((product, inx) => {
        if (index === inx) {
          return { ...product, quantity: product.quantity - 1 };
        } else {
          return product;
        }
      });
      localStorage.setItem("carts", JSON.stringify(state.value));
    },
    removeFromCart() {},
    clearCart() {},
  },
});

export const { addToCart, clearCart, decCart, incCart, removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
