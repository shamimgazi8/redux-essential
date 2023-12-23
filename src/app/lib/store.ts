import { configureStore } from "@reduxjs/toolkit";
import pagination from "./paginationSlice";
import { jsonServerApi } from "./postsSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [pagination.name]: pagination.reducer,
      [jsonServerApi.reducerPath]: jsonServerApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(jsonServerApi.middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
