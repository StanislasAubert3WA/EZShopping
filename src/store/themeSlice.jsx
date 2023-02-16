import { createSlice } from "@reduxjs/toolkit";

const initialState = "light";

  export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
      getTheme(state, action) {
        return state
      },
      toggleTheme(state, action) {
        state == "light" ? state = "dark" : state = "light";
        return state
      },
    },
  });

export const { getTheme, toggleTheme } = themeSlice.actions;
