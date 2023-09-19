import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { productsApi } from "../api/apiSlice";

export const store = () =>
    configureStore({
        reducer: {
            [productsApi.reducerPath]: productsApi.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(productsApi.middleware),
    });

export const wrapper = createWrapper(store, { debug: true });
