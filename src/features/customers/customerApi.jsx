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
          const formData = JSON.parse(data.get("data"));
          if (result?.data) {
            dispatch(
              apiSlice.util.updateQueryData(
                "getCustomers",
                undefined,
                (draft) => {
                  const changeObj = draft.find(
                    (customer) => customer.customerPhone === id
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
