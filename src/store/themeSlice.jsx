import { createSlice } from "@reduxjs/toolkit";
const Storage = JSON.parse(localStorage.getItem("middlewareStore"));
const localTheme = Storage ? Storage.theme : ""
const initialState = localTheme ? localTheme : "light";

  export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
      toggleTheme(state, action) {
        const newState = state == "light" ?  "dark" :  "light";
        console.log(localTheme);
        return newState;
      },
    },
  });

export const {toggleTheme } = themeSlice.actions;
