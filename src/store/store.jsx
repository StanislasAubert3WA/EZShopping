import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import cartSlice from "./cartSlice";
import { itemsSlice } from "./itemsSlice";
import { themeSlice } from "./themeSlice";
import { userSlice } from "./userSlice";

const EZMiddleware = store => next => action => {
  const NextAction = next(action);
  const state = store.getState()
  localStorage.setItem('middlewareStore', JSON.stringify(state))

  return NextAction;
}

// Export des actions
const store = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    user: userSlice.reducer,
    cart: cartSlice.reducer,
    theme: themeSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(EZMiddleware),
});

// pour contextualiser le store dans l'arbre React
export default store;