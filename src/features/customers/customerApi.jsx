import { apiSlice } from "../api/apiSlice";

const customerApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCustomers: builder.query({
      query: () => ({
        url: "/customers",
      }),

      // providesTags: ["products"],
    }),

    addCustomers: builder.mutation({
      query: (data) => ({
        url: "/customers/add",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          console.log(result);
          if (result?.data) {
            dispatch(
              apiSlice.util.updateQueryData(
                "getCustomers",
                undefined,
                (draft) => {
                  draft?.push(result?.data);
                }
              )
            );
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),

    updateCustomers: builder.mutation({
      query: ({ data, id }) => ({
        url: `/customers/update/${id}`,
        method: "PATCH",
        body: data,
      }),
      // invalidatesTags: ["products"],
      async onQueryStarted({ data, id }, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          console.log(result);
          if (result?.data) {
            dispatch(
              apiSlice.util.updateQueryData(
                "getCustomers",
                undefined,
                (draft) => {
                  const index = draft.findIndex(
                    (prdouct) => prdouct.productId === id
                  );
                  // console.log(JSON.stringify(draft));
                  if (index !== -1) {
                    draft[index] = result?.data;
                  }
                }
              )
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
  useGetCustomersQuery,
  useAddCustomersMutation,
  useUpdateCustomersMutation,
} = customerApi;
