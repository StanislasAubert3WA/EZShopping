import { createSlice } from "@reduxjs/toolkit";
const localTheme = localStorage.getItem("theme");
const initialState = localTheme ? localTheme : "light";

  export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
      toggleTheme(state, action) {
        state == "light" ? state = "dark" : state = "light";
        return state
      },
    },
  });

export const { getTheme, toggleTheme } = themeSlice.actions;
