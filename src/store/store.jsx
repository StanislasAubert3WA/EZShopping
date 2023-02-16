import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cartSlice";
import { itemsSlice } from "./itemsSlice";
import { userSlice } from "./userSlice";

// Export des actions
const store = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    user: userSlice.reducer,
    cart: cartSlice.reducer
  },
});

// pour contextualiser le store dans l'arbre React
export default store;