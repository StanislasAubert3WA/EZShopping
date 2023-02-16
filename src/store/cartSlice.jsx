import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: "idle",
    items: [],
    };

  export const cartSlice = createSlice({
    // clé permettant d'identifier le reducer spécifique
    name: "cart",
    initialState,
    // gestions des actions dans le/les reducer(s) du state
    reducers: {
        addToCart: (state, action) => {
          const itemInCart = state.cart.find((item) => item.id === action.payload.id);
          if (itemInCart) {
            itemInCart.quantity++;
          } else {
            state.cart.push({ ...action.payload, quantity: 1 });
          }
        },
        incrementQuantity: (state, action) => {
          const item = state.cart.find((item) => item.id === action.payload);
          item.quantity++;
        },
        decrementQuantity: (state, action) => {
          const item = state.cart.find((item) => item.id === action.payload);
          if (item.quantity === 1) {
            item.quantity = 1
          } else {
            item.quantity--;
          }
        },
        removeItem: (state, action) => {
          const removeItem = state.cart.filter((item) => item.id !== action.payload);
          state.cart = removeItem;
        },
      },
  });

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} = cartSlice.actions;