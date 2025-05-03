import { createSlice } from "@reduxjs/toolkit";
import { codegenApi, User } from "./codegen/codegenApi";

const initialState: User | null = null;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserDetails: (user) => user,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      codegenApi.endpoints.getUsersById.matchFulfilled,
      (state: User | null, response) => {
        state = response.payload;
      }
    );
  },
});

export const { getUserDetails } = userSlice.actions;
