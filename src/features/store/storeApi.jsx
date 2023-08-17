import { apiSlice } from "../api/apiSlice";
export const storeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getStore: builder.query({
      query: (id) => ({
        url: `/stores/find/${id}`,
      }),
    }),
  }),
});

export const { useGetStoreQuery } = storeApi;
