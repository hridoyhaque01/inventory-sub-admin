import { apiSlice } from "../api/apiSlice";

const storeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getStores: builder.query({
      query: () => ({
        url: "/stores",
      }),
    }),
  }),
});

export const { useGetStoresQuery } = storeApi;
