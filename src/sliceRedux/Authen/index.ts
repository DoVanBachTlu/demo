import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  savedAccount: "",
  savedPassword: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveCredentials: (state, action) => {
      state.savedAccount = action.payload?.savedAccount;
      state.savedPassword = action.payload?.savedPassword;
    },
  },
});

export const { saveCredentials } = authSlice.actions;

export default authSlice.reducer;
