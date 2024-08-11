import { createSlice } from "@reduxjs/toolkit";

export interface CartState {
  cart: {
    id: string;
    title: string;
    price: number;
    image: string;
    quantity: number;
  }[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, data) => {
      const existingItem = state.cart.find(
        (item) => item.id === data.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...data.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, data) => {
      const existingItem = state.cart.find((item) => item.id === data.payload);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          const index = state.cart.findIndex(
            (item) => item.id === data.payload
          );
          if (index !== -1) {
            state.cart.splice(index, 1);
          }
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
