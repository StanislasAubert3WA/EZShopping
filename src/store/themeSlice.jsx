import { createSlice } from "@reduxjs/toolkit";
const localTheme = localStorage.getItem("theme");
const initialState = localTheme ? localTheme : "light";

  export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
      getTheme(state, action) {
        return state
      },
      toggleTheme(state, action) {
        state == "light" ? state = "dark" : state = "light";
        localStorage.setItem("theme", state)
        return state
      },
    },
  });

export const { getTheme, toggleTheme } = themeSlice.actions;
