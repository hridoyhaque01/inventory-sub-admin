import React, { useState } from "react";
import { useSelector } from "react-redux";
import SearchLoader from "../../components/loaders/SearchLoader";
import SearchBar from "../../components/shared/searchbar/SearchBar";
import NoData from "../../components/shared/ui/NoData";
import MoneyOwedTable from "../../components/tables/moneyOwed/MoneyOwedTable";
import { useGetAllOwesQuery } from "../../features/owes/owesApi";

function Expenses() {
  const { store } = useSelector((state) => state.auth);
  const { data, isLoading, isError } = useGetAllOwesQuery(store?._id);
  const [searchValue, setSearchValue] = useState("");

  const onChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const filterByDue = (data) => {
    return data?.dueAmount !== "0";
  };

  const filterBySearch = (data) => {
    if (searchValue.trim().length > 0) {
      return data?.customerId
        ?.toLowerCase()
        .includes(searchValue?.toLowerCase());
    } else {
      return true;
    }
  };

  let content = null;

  if (isLoading) {
    content = <SearchLoader></SearchLoader>;
  } else if (!isLoading && isError) {
    content = <div>Something went wrong</div>;
  } else if (!isLoading && !isError && data?.length === 0) {
    content = <NoData></NoData>;
  } else if (!isLoading && !isError && data?.length > 0) {
    const newData = data?.filter(filterByDue).filter(filterBySearch);
    content = <MoneyOwedTable data={newData}></MoneyOwedTable>;
  }
  return (
    <section className="h-full w-full overflow-auto px-4 md:px-6 py-6 ">
      <div className="shadow-sm w-full h-full rounded-2xl overflow-hidden bg-whiteHigh">
        <SearchBar
          title="Money Owed"
          path="/moneyOwed-add"
          value={searchValue}
          onChange={onChange}
          isNotAddable={true}
        ></SearchBar>
        <div className="h-[calc(100%-80px)] overflow-auto flex flex-col justify-between flex-wrap pb-4">
          {content}
        </div>
      </div>
    </section>
  );
}

export default Expenses;
