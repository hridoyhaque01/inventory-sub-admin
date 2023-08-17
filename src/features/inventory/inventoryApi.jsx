import { apiSlice } from "../api/apiSlice";

export const inventoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getInventories: builder.query({
      query: (id) => ({
        url: `/products/store/${id}`,
      }),
      // providesTags: ["products"],
    }),
    updateProducts: builder.mutation({
      query: ({ data, storeId }) => ({
        url: `/products/update/${storeId}`,
        method: "PATCH",
        body: data,
      }),
      // invalidatesTags: ["products"],
      async onQueryStarted({ data, storeId }, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          const formData = JSON.parse(data.get("data"));
          if (result?.data) {
            dispatch(
              apiSlice.util.updateQueryData(
                "getInventories",
                storeId,
                (draft) => {
                  const changeObj = draft.find(
                    (prdouct) => prdouct.productId === formData?.productId
                  );

                  if (changeObj) {
                    changeObj.unitLeft = formData.unitLeft;
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
  useGetInventoriesQuery,
  useAddProductsMutation,
  useUpdateProductsMutation,
} = inventoryApi;
