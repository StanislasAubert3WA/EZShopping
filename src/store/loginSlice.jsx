import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: "idle",
    user: [
        {
            username: '',
            password: '',
        }
    ],
  };

  export const loginSlice = createSlice({
    // clé permettant d'identifier le reducer spécifique
    name: "login",
    initialState,
    // gestions des actions dans le/les reducer(s) du state
    reducers: {
      authLoading(state, action) {
        state.loading = "pending";
      },
      authSuccess(state, action) {
        state.loading = "idle";
        state.user.username = {username};
        state.user.password = {password};
      },
    },
  });

// fonction asynchro

export const { authLoading, authSuccess } = loginSlice.actions;

export const asyncAuth = () => async (dispatch) => {
  dispatch(authLoading());
  await new Promise((resolve) => setTimeout(resolve, 3000)); // on attend 3 sec
  dispatch(authSuccess());
};