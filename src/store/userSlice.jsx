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

  export const userSlice = createSlice({
    // clé permettant d'identifier le reducer spécifique
    name: "user",
    initialState,
    // gestions des actions dans le/les reducer(s) du state
    reducers: {
      authLoading(state, action) {
        state.loading = "pending";
      },
      authSuccess(state, action) {
        if(state.user.psw == {pswConfirm}){
          state.loading = "idle";
          state.user.username = {username};
          state.user.psw = {psw};
        };
      },
    },
  });

// fonction asynchro

export const { authLoading, authSuccess } = userSlice.actions;

export const asyncAuth = () => async (dispatch) => {
  dispatch(authLoading());
  await new Promise((resolve) => setTimeout(resolve, 3000)); // on attend 3 sec
  dispatch(authSuccess());
};