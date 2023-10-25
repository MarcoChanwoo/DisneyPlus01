import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const rootReducer = combineReducers({
  user: userReducer,
});

const persistConfig = {
  key: "root",
  Storage,
};

persistReducer();

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
