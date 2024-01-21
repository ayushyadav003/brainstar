import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginPopup: false,
  userData: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    handleLoginPopup: (state, action) => {
      state.loginPopup = action.payload;
    },
  },
});

export const { setUserData, handleLoginPopup } = userSlice.actions;

export default userSlice.reducer;
