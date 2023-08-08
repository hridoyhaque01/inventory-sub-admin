import { apiSlice } from "../api/apiSlice";

const salesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSales: builder.query({
      query: () => ({
        url: "/invoices",
      }),

      // providesTags: ["products"],
    }),

    addSales: builder.mutation({
      query: (data) => ({
        url: "/invoices/add",
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
                "getInventories",
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

    updateSales: builder.mutation({
      query: ({ data, id }) => ({
        url: `/invoices/update/${id}`,
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
                "getInventories",
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

export const { useGetSalesQuery, useAddSalesMutation, useUpdateSalesMutation } =
  salesApi;
