import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import { itemsSlice } from "./itemsSlice";
import { themeSlice } from "./themeSlice";
import { userSlice } from "./userSlice";

// Export des actions
const store = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    user: userSlice.reducer,
    cart: cartSlice.reducer,
    theme: themeSlice.reducer,
  },
});

// pour contextualiser le store dans l'arbre React
export default store;