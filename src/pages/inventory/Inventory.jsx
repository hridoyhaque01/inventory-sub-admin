import React, { useState } from "react";
import { useSelector } from "react-redux";
import SearchBar from "../../components/shared/searchbar/SearchBar";
import NoData from "../../components/shared/ui/NoData";
import InventoryTable from "../../components/tables/inventory/InventoryTable";

function Inventory() {
  // const { data, isLoading, isError } = useGetInventoriesQuery();
  const { store } = useSelector((state) => state.auth);
  const { products: data } = store || {};
  // console.log(products);

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

  let content = null;
  if (data?.length === 0) {
    content = <NoData></NoData>;
  } else if (data?.length > 0) {
    const newData = data?.filter(filterBySearch);
    content = <InventoryTable data={newData}></InventoryTable>;
  }

  return (
    <section className="h-full w-full overflow-auto px-10 py-6">
      <div className="bg-whiteHigh shadow-sm w-full h-full rounded-2xl overflow-hidden">
        <SearchBar
          title="Inventory"
          path="/inventory-add"
          value={searchValue}
          onChange={onChange}
          isNotAddable={true}
        ></SearchBar>
        <div className="h-[calc(100%-80px)] overflow-auto flex flex-col justify-between pb-4">
          {content}
        </div>
      </div>
    </section>
  );
}

export default Inventory;
