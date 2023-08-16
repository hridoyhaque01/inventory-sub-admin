import { apiSlice } from "../api/apiSlice";

export const owesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllOwes: builder.query({
      query: () => ({
        url: "/owes",
      }),
    }),
    updateOwes: builder.mutation({
      query: ({ data, id }) => ({
        url: `/owes/update/${id}`,
        method: "PATCH",
        body: data,
      }),
      // invalidatesTags: ["products"],
      async onQueryStarted({ data, id }, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          const formData = JSON.parse(data.get("data"));
          console.log(result);
          if (result?.data) {
            dispatch(
              apiSlice.util.updateQueryData(
                "getAllOwes",
                undefined,
                (draft) => {
                  const changeObj = draft.find(
                    (customer) => customer._id === id
                  );
                  if (changeObj) {
                    changeObj.dueAmount = formData.dueAmount;
                    changeObj.paidAmount = formData.paidAmount;
                    changeObj.payDate = formData.payDate;
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

export const { useGetAllOwesQuery, useUpdateOwesMutation } = owesApi;
