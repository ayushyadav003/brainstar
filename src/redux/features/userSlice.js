import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authPopup: false,
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
    handleAuthPopup: (state, action) => {
      state.authPopup = action.payload;
    },
    handleLoader: (state, action) => {
      state.loader = action.payload;
    },
  },
});

export const { setUserData, handleAuthPopup, handleLoader } = userSlice.actions;

export default userSlice.reducer;
