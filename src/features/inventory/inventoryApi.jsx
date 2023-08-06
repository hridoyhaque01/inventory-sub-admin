import { apiSlice } from "../api/apiSlice";
import { setData } from "./inventorySlice";

const inventoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => ({
        url: "/posts",
      }),
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          const data = result?.data;
          dispatch(setData(data));
        } catch (error) {
          console.log(error);
        }
      },
    }),
    addPost: builder.mutation({
      query: (data) => ({
        url: "/posts",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        try {
          console.log(args);
          const result = await queryFulfilled;
          console.log(result);
          const data = result?.data;
          dispatch(setData(data));
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useGetPostsQuery, useAddPostMutation } = inventoryApi;
