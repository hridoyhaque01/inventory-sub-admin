import React from "react";
import { Pagination } from "../../components/shared/pagination/Pagination";
import SearchBar from "../../components/shared/searchbar/SearchBar";
import ExpensesTable from "../../components/tables/expenses/ExpensesTable";

function Expenses() {
  return (
    <section className="h-full w-full overflow-auto px-10 py-6">
      <div className="shadow-sm w-full h-full rounded-2xl overflow-hidden">
        <SearchBar title="My Expenses" path="/expenses-add"></SearchBar>

        <div className="h-[calc(100%-80px)] overflow-auto flex flex-col justify-between pb-4">
          <div>
            <ExpensesTable></ExpensesTable>
          </div>
          <Pagination></Pagination>
        </div>
      </div>
    </section>
  );
}

export default Expenses;
