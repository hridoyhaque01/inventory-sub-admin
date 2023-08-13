import ReactPDF from "@react-pdf/renderer";
import React, { useState } from "react";
import SearchLoader from "../../components/loaders/SearchLoader";
import SearchBar from "../../components/shared/searchbar/SearchBar";
import NoData from "../../components/shared/ui/NoData";
import SalesTable from "../../components/tables/sales/SalesTable";
import { useGetSalesQuery } from "../../features/sales/salesApi";
import Invoice from "../invoice/Invoice";
function Sales() {
  const { data, isLoading, isError } = useGetSalesQuery();

  const [searchValue, setSearchValue] = useState("");

  const onChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const filterBySearch = (data) => {
    if (searchValue.trim().length > 0) {
      return data?.productName
        ?.toLowerCase()
        .includes(searchValue?.toLowerCase());
    } else {
      return true;
    }
  };

  const handlePdfSave = () => {
    ReactPDF.render(<Invoice></Invoice>, `../../assets/example.pdf`);
  };

  let content = null;

  if (isLoading) {
    content = <SearchLoader></SearchLoader>;
  } else if (!isLoading && isError) {
    content = <div>Something went wrong</div>;
  } else if (!isLoading && !isError && data?.length === 0) {
    content = <NoData></NoData>;
  } else if (!isLoading && !isError && data?.length > 0) {
    const newData = data?.filter(filterBySearch);
    content = <SalesTable data={newData}></SalesTable>;
  }

  return (
    <section className="h-full w-full overflow-auto px-10 py-6">
      <div className="bg-whiteHigh shadow-sm w-full h-full rounded-2xl overflow-hidden">
        <SearchBar
          title="Sales"
          path="/sales-add"
          value={searchValue}
          onChange={onChange}
        ></SearchBar>

        <div className="h-[calc(100%-80px)] overflow-auto flex flex-col justify-between pb-4">
          {content}
        </div>
      </div>
    </section>
  );
}

export default Sales;
