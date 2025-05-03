import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    getUserDetails: (state) => {
      return state;
    },
  },
});

export const { getUserDetails } = userSlice.actions;
