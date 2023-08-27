import { apiSlice } from "../api/apiSlice";

const dashboardApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getStoreResult: builder.query({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        // get a random user
        const { data } = await fetchWithBQ(`/stores/find/${_arg}`);

        const groupedPayments = {};

        let totalSales = 0;
        let totalRevenue = 0;
        let totalCustomers = data?.customers?.length;
        let totalProducts = 0;

        totalProducts = data?.products?.reduce(
          (acc, item) => acc + parseInt(item?.productQuantity),
          0
        );

        totalRevenue = data?.invoices?.reduce(
          (acc, invoice) => acc + parseInt(invoice?.paidAmount),
          0
        );

        totalSales = data?.invoices?.reduce(
          (acc, item) => acc + parseInt(item?.unitCount),
          0
        );

        const cardData = {
          totalSales,
          totalRevenue,
          totalCustomers,
          totalProducts,
        };

        data?.paidToOwner?.forEach((payment) => {
          const date = new Date(payment.timestamp * 1000).toLocaleDateString(
            "en-US"
          );
          if (!groupedPayments[date]) {
            groupedPayments[date] = 0; // Initialize totalPaid for the date
          }
          groupedPayments[date] += parseInt(payment.payment);
        });

        // Group invoices by date
        const groupedInvoices = {};
        data?.invoices?.forEach((invoice) => {
          const date = new Date(invoice?.timestamp * 1000).toLocaleDateString(
            "en-US"
          );
          if (!groupedInvoices[date]) {
            groupedInvoices[date] = [];
          }
          groupedInvoices[date].push(invoice);
        });

        // Calculate required values for each date
        const storeDetails = [];
        for (const date in groupedInvoices) {
          const invoiceGroup = groupedInvoices[date];
          const totalDue = invoiceGroup?.reduce(
            (acc, invoice) => acc + parseInt(invoice?.dueAmount),
            0
          );
          const totalSales = invoiceGroup?.reduce(
            (acc, invoice) => acc + parseInt(invoice?.totalAmount),
            0
          );
          const totalCost = invoiceGroup?.reduce(
            (acc, invoice) =>
              acc +
              parseInt(invoice?.buyingPrice) * parseInt(invoice?.unitCount),
            0
          );

          const totalPaidToOwner = groupedPayments[date] || 0;
          const invoiceRevenue = invoiceGroup?.reduce(
            (acc, invoice) => acc + parseInt(invoice?.paidAmount),
            0
          );
          const paymentRevenue = totalPaidToOwner;
          const revenue = invoiceRevenue;
          const remaining = revenue - totalPaidToOwner;

          const storeDetailsEntry = {
            totalDue: totalDue,
            revenue: revenue,
            totalCost: totalCost,
            totalSales: totalSales,
            date: date,
            totalPaidToOwner: totalPaidToOwner,
            remaining: remaining,
            storeName: data?.name,
          };
          storeDetails.push(storeDetailsEntry);
        }

        storeDetails.sort((a, b) => new Date(b.date) - new Date(a.date));

        return {
          data: { storeDetails, cardData },
        };
      },
    }),
  }),
});

export const { useGetDashboardResultQuery, useGetStoreResultQuery } =
  dashboardApi;
