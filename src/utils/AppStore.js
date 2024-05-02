import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";

const AppStore = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});
export default AppStore;
