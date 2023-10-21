import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  email: "",
  photoURL: "",
  displayName: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});
