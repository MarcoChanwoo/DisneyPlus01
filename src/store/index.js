import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  user: userReducer,
});

const persistConfig = {
  key: "root",
  Storage,
};

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
