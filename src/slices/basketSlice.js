
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id)
      let newCart = [...state.items];
      if (index >= 0) {
        newCart.splice(index, 1)
      }
      state.items = newCart;
    },
  },
})

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectItems = (state) => state.basket.items;

export const selectTotal = (state) => state.basket.items.reduce((acc, item) => acc + item.products.price , 0)

export default basketSlice.reducer;
