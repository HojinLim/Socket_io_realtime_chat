import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import authSlice from "./slices/authSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    auth: authSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof userSlice>;
export type AppDispatch = typeof store.dispatch;
