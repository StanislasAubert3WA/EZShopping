import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: "idle",
    user: 
        {
            firstname: '',
            lastname: '',
            email: '',
        }
    ,
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
      updateUser(state, action) {
        state.user = action.payload;
      },
    },
  });

// fonction asynchro

export const { authLoading, updateUser } = userSlice.actions;

// export const asyncAuth = () => async (dispatch) => {
//   dispatch(authLoading());
//   await new Promise((resolve) => setTimeout(resolve, 3000)); // on attend 3 sec
//   dispatch(authSuccess());
// };