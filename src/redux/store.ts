import { configureStore } from "@reduxjs/toolkit";

import { userSlice } from "./user";
import { api } from "./api";

export const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
