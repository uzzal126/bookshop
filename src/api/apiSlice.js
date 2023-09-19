import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
import axios from "axios";

// eslint-disable-next-line no-unused-vars
const addTokenToRequest = async (headers, { _getState }) => {
    axios.defaults.headers = {
        Origin: "bookshop.webmanza.com",
    };
    const res = await axios.post(
        "https://api.webmanza.com/auth/v2/get-access-token"
    );
    if (res?.data?.access_token) {
        headers.set("Authorization", `Bearer ${res.data.access_token}`);
    }
    headers.set("Origin", "bookshop.webmanza.com");
    return headers;
};

export const productsApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.webmanza.com",
        prepareHeaders: (headers, { getState }) => {
            return addTokenToRequest(headers, { getState });
        },
    }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath];
        }
    },
    endpoints: (builder) => ({
        getThemeData: builder.query({
            query: () => "/general/v2/store-info",
        }),
        getProductsByCategory: builder.query({
            query: (id) =>
                `/product/v2/list/by/category/${id}/?page=1&items_per_page=10`,
        }),
        getTags: builder.query({
            query: () => `product/v2/tag/list`,
        }),
        getProductsByTag: builder.query({
            query: (id) =>
                `/product/v2/list/by/tag/${id}?page=1&items_per_page=10`,
        }),
    }),
});

export const {
    useGetThemeDataQuery,
    useGetProductsByCategoryQuery,
    useGetProductsByTagQuery,
    useGetTagsQuery,
    util: { getRunningQueriesThunk },
} = productsApi;

export const {
    getThemeData,
    getProductsByCategory,
    getProductsByTag,
    getTags,
} = productsApi.endpoints;
