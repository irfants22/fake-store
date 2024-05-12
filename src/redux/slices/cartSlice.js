import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: {
      cartItems: [],
      totalCost: 0,
    },
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, price } = action.payload;
      const { cartItems } = state.data;
      const existingItem = cartItems.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      } else {
        const newItem = {
          ...action.payload,
          quantity: 1,
          totalPrice: price,
        };
        cartItems.push(newItem);
      }

      state.data.totalCost = cartItems.reduce(
        (acc, item) => acc + item.totalPrice,
        0
      );
    },
    removeFromCart: (state, action) => {
      const { cartItems } = state.data;
      const updatedItems = cartItems.filter(
        (item) => item.id !== action.payload
      );

      if (updatedItems) {
        state.data.cartItems = [...updatedItems];
        state.data.totalCost = state.data.cartItems.reduce(
          (acc, item) => acc + item.totalPrice,
          0
        );
      }
    },
    increaseProductQuantity: (state, action) => {
      const { cartItems } = state.data;
      const existingItem = cartItems.find((item) => item.id === action.payload);

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      }

      state.data.totalCost = cartItems.reduce(
        (acc, item) => acc + item.totalPrice,
        0
      );
    },
    decreaseProductQuantity: (state, action) => {
      const { cartItems } = state.data;
      const existingItem = cartItems.find((item) => item.id === action.payload);

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      } else if (existingItem && existingItem.quantity <= 1) {
        const updatedItems = cartItems.filter(
          (item) => item.id !== action.payload
        );

        state.data.cartItems = [...updatedItems];
      }

      state.data.totalCost = state.data.cartItems.reduce(
        (acc, item) => acc + item.totalPrice,
        0
      );
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseProductQuantity,
  decreaseProductQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
