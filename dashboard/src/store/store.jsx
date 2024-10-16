import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import forgotPasswordReducer from "./slices/forgotResetPasswordSlice";
import timelineReducer from "./slices/timelineSlice";
import messageReducer from "./slices/messageSlice";
import skillReducer from "./slices/skillSlice";


export const store = configureStore({
  reducer: {
    user: userReducer,
    forgotPassword: forgotPasswordReducer,
    timeline: timelineReducer,
    messages: messageReducer,
    skill:skillReducer
  },
});