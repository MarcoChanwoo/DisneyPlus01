import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  email: "",
  photoURL: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
});
