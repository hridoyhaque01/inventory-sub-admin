import { apiSlice } from "../api/apiSlice";

const customerApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCustomers: builder.query({
      query: (id) => ({
        url: `customers/store/${id}`,
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
          if (result?.data) {
            // storeApi.endpoints.getStore
            dispatch(
              apiSlice.util.updateQueryData(
                "getCustomers",
                result?.data?.storeId,
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
      invalidatesTags: ["stores"],
    }),

    updateCustomers: builder.mutation({
      query: ({ data, storeId }) => ({
        url: `/customers/update/${storeId}`,
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
                "getCustomers",
                storeId,
                (draft) => {
                  const changeObj = draft.find(
                    (customer) =>
                      customer.customerPhone === formData?.customerPhone
                  );
                  if (changeObj) {
                    changeObj.customerName = formData.customerName;
                    changeObj.customerAddress = formData.customerAddress;
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
