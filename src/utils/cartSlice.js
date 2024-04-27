import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push({ ...action.payload, quantity: 1 });
    },
    removeItems: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
    incrementQuantity: (state, action) => {
      const indexToIncrement = action.payload;
      if (indexToIncrement >= 0 && indexToIncrement < state.items.length) {
        state.items[indexToIncrement].quantity += 1;
      }
    },

    // Decrement the quantity of a specific item
    decrementQuantity: (state, action) => {
      const indexToDecrement = action.payload;
      if (indexToDecrement >= 0 && indexToDecrement < state.items.length) {
        if (state.items[indexToDecrement].quantity > 1) {
          state.items[indexToDecrement].quantity -= 1;
        } else {
          // If quantity is 1, remove the item
          state.items.splice(indexToDecrement, 1);
        }
      }
    },
  },
});
// console.log(cartSlice);

export const {
  addItems,
  removeItems,
  clearCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
