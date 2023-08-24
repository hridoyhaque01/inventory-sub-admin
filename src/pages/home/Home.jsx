import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HomeTopCard from "../../Components/Cards/HomeTopCard";
import Charts from "../../components/Charts/Charts";
import SearchLoader from "../../components/loaders/SearchLoader";
import NoData from "../../components/shared/ui/NoData";
import SomethingWrong from "../../components/shared/ui/SomethingWrong";
import DashboardTable from "../../components/tables/DashboardTable/DashboardTable";
import {
  useGetDashboardResultQuery,
  useGetStoreResultQuery,
} from "../../features/dashboard/dashboardApi";

const Dashboard = () => {
  const { store } = useSelector((state) => state.auth);
  const { data, isLoading, isError } = useGetDashboardResultQuery(store?.name);
  const [dashboardData, setDashboardData] = useState([]);

  const {
    data: storeData,
    isLoading: storeLoading,
    isError: storeError,
  } = useGetStoreResultQuery(store?._id);

  console.log(storeData);

  const { salesData, totalSales, costsData, totalCosts, totalDues } =
    data || {};

  let content = null;

  if (isLoading || storeLoading) {
    content = <SearchLoader></SearchLoader>;
  } else if (!isLoading && !storeLoading && (isError || storeError)) {
    content = <SomethingWrong></SomethingWrong>;
  } else if (
    !isLoading &&
    !storeLoading &&
    (isError || storeError) &&
    !totalSales
  ) {
    content = <NoData></NoData>;
  } else if (!isLoading && !isError && totalSales) {
    content = (
      <>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dashboardData.map((dashboardData, index) => (
            <HomeTopCard data={dashboardData} key={index}></HomeTopCard>
          ))}
        </section>
        <Charts salesData={salesData} costsData={costsData}></Charts>

        <section>
          <DashboardTable results={storeData}></DashboardTable>
        </section>
      </>
    );
  }

  useEffect(() => {
    if (!isLoading && !isError && totalSales) {
      setDashboardData((prev) => [
        {
          title: "Total Sales",
          number: totalSales,
          color: "bg-successColor",
        },
        {
          title: "Total Costs",
          number: totalCosts,
          color: "bg-secondaryMainLight",
        },
        {
          title: "Total Revenue",
          number: totalSales - totalDues,
          color: "bg-infoColor",
        },
        {
          title: "Total Dues",
          number: totalDues,
          color: "bg-errorMidColor",
        },
      ]);
    }
  }, [isLoading, isError, totalSales]);

  return (
    <div className="w-full overflow-auto pt-10 pb-6 pr-6">
      <div className="flex flex-col justify-around gap-8 w-full">
        {/* 4 top cards */}
        {content}
      </div>
    </div>
  );
};

export default Dashboard;
