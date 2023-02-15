import { createSlice } from "@reduxjs/toolkit";

// définit un state
const initialState = {
  loading: "idle",
  items: [],
};

export const itemsSlice = createSlice({
  // clé permettant d'identifier le reducer spécifique
  name: "items",
  initialState,
  // gestions des actions dans le/les reducer(s) du state
  reducers: {
    itemsLoading(state, action) {
      state.loading = "pending";
    },
    itemsReceived(state, action) {
      state.loading = "idle";
      state.items = action.payload;
    },
  },
});

export const { itemsLoading, itemsReceived } = itemsSlice.actions;

const fetchItemsAPI = () =>
  fetch("https://fakestoreapi.com/products").then((response) => response.json());

// call API sous forme de thunk
export const fetchItems = () => async (dispatch) => {
  dispatch(itemsLoading());
  const response = await fetchItemsAPI();
  dispatch(itemsReceived(response));
};