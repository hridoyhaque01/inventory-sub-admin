import { apiSlice } from "../api/apiSlice";
import { setStore, updateStore } from "./authSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/stores/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          const data = result?.data;
          console.log(result);
          dispatch(setStore(data));
          const tokenExpiration = 7 * 24 * 60 * 60 * 1000;
          const expireIn = Date.now() + tokenExpiration;
          localStorage.setItem(
            "store",
            JSON.stringify({
              token: result.data.token,
              store: result.data.store,
              expireIn,
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),
    sendResetPasswordEmail: builder.mutation({
      query: (data) => ({
        url: "/stores/reset",
        method: "POST",
        body: data,
      }),
    }),
    resetPassword: builder.mutation({
      query: (data) => ({
        url: "/stores/reset",
        method: "PATCH",
        body: data,
      }),
    }),
    updateAdmin: builder.mutation({
      query: ({ data, id }) => ({
        url: `/stores/update/${id}`,
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          if (result?.data) {
            console.log(result?.data);
            const { fileUrl } = result?.data || {};
            dispatch(updateStore({ fileUrl }));
            console.log(fileUrl);
            const localAuth = localStorage?.getItem("store");
            const auth = JSON.parse(localAuth);
            console.log(auth);
            const { token, store, expireIn } = auth || {};
            store.fileUrl = fileUrl;
            localStorage.setItem(
              "store",
              JSON.stringify({
                token,
                store,
                expireIn,
              })
            );
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useSendResetPasswordEmailMutation,
  useResetPasswordMutation,
  useUpdateAdminMutation,
} = authApi;
