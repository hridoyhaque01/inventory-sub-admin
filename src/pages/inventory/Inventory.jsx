import React from "react";
import { Pagination } from "../../components/shared/pagination/Pagination";
import SearchBar from "../../components/shared/searchbar/SearchBar";
import InventoryTable from "../../components/tables/inventory/InventoryTable";

function Inventory() {
  return (
    <section className="h-full w-full overflow-auto px-10 py-6">
      <div className="shadow-sm w-full h-full rounded-2xl overflow-hidden">
        <SearchBar title="Inventory" path="/inventory-add"></SearchBar>

        <div className="h-[calc(100%-80px)] overflow-auto flex flex-col justify-between pb-4">
          <div>
            <InventoryTable></InventoryTable>
          </div>
          <Pagination></Pagination>
        </div>
      </div>
    </section>
  );
}

export default Inventory;
