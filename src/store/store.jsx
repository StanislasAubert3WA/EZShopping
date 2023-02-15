import { configureStore } from "@reduxjs/toolkit";
import { itemsSlice } from "./itemsSlice";
import { loginSlice } from "./loginSlice";

// Export des actions
const store = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    login: loginSlice.reducer,
  },
});

// pour contextualiser le store dans l'arbre React
export default store;