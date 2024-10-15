import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import forgotPasswordReducer from "./slices/forgotResetPasswordSlice";
import timelineReducer from "./slices/timelineSlice";
import messageReducer from "./slices/messageSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    forgotPassword: forgotPasswordReducer,
    timeline: timelineReducer,
    messages: messageReducer,
  },
});