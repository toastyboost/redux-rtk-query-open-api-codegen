import { configureStore } from "@reduxjs/toolkit";

import { userSlice } from "./user";
import { baseApi } from "./api";

export const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
