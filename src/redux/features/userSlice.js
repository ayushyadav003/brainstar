import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginPopup: false,
  loader: false,
  currentUser: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.currentUser = action.payload;
    },
    handleLoginPopup: (state, action) => {
      state.loginPopup = action.payload;
    },
    handleLoader: (state, action) => {
      state.loader = action.payload;
    },
  },
});

export const { setUserData, handleLoginPopup, handleLoader } =
  userSlice.actions;

export default userSlice.reducer;
