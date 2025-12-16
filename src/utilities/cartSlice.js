import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //remember, we are mutating the state over here
      // Redux Toolkit uses immer BTS

      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop(); //we will need action later to find exact item to be popped
    },
    clearCart: (state) => {
      state.items.length = 0; //we dont need action, since we are emptying the cart

      // Redux Toolkit says: either mutate the state or return a new state
      // return []; this new [] will be replaced inside original state
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
