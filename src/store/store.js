import { configureStore } from "@reduxjs/toolkit";
import api from "./api";

// DONE: configure the store to use the API slice's auto-generated reducer and custom middleware.
const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer, // Register the api reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware), // Add API middleware for caching, invalidation, polling, etc.
});

export default store;
