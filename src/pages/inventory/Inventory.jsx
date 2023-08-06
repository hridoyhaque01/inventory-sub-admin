import React from "react";
import { useSelector } from "react-redux";
import { Pagination } from "../../components/shared/pagination/Pagination";
import SearchBar from "../../components/shared/searchbar/SearchBar";
import InventoryTable from "../../components/tables/inventory/InventoryTable";
import { useGetPostsQuery } from "../../features/inventory/inventoryApi";

function Inventory() {
  const { data, isLoading, isError } = useGetPostsQuery();
  const { data: newData } = useSelector((state) => state.inventories);

  let content = null;

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (!isLoading && isError) {
    content = <div>Something went wrong</div>;
  } else if (!isLoading && !isError && data?.length === 0) {
    content = <div>No data found</div>;
  } else if (!isLoading && !isError && data?.length > 0) {
    content = <InventoryTable data={data}></InventoryTable>;
  }

  return (
    <section className="h-full w-full overflow-auto px-10 py-6">
      <div className="shadow-sm w-full h-full rounded-2xl overflow-hidden">
        <SearchBar title="Inventory" path="/inventory-add"></SearchBar>

        <div className="h-[calc(100%-80px)] overflow-auto flex flex-col justify-between pb-4">
          <div>
            {content}
            {/* <InventoryTable></InventoryTable>; */}
          </div>
          <Pagination></Pagination>
        </div>
      </div>
    </section>
  );
}

export default Inventory;
