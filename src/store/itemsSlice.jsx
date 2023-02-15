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
      console.log("ici 1");
      state.loading = "pending";
    },
    itemsReceived(state, action) {
      console.log("ici 2", action);
      state.loading = "idle";
      state.items = action.payload.map((e) => e.title);
    },
  },
});

export const { itemsLoading, itemsReceived } = itemsSlice.actions;

const fetchItemsAPI = () =>
  fetch("https://fakestoreapi.com/docs#p-all").then((response) => response.json());

// call API sous forme de thunk
export const fetchItems = () => async (dispatch) => {
  dispatch(itemsLoading());
  const response = await fetchItemsAPI();
  dispatch(itemsReceived(response.data));
};