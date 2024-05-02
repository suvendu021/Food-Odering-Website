import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userLogInData: false,
  },
  reducers: {
    addUser: (state, action) => {
      state.userLogInData = action.payload;
    },
    removeUser: (state, action) => {
      state.userLogInData = null;
    },
  },
});
export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
