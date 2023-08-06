import React, { useState } from "react";
import { Pagination } from "../../components/shared/pagination/Pagination";
import SearchBar from "../../components/shared/searchbar/SearchBar";
import SellTable from "../../components/tables/sell/SellTable";

function Sell() {
  const [selectedShop, setSelectedShop] = useState("");

  return (
    <section className="h-full w-full overflow-auto px-10 py-6">
      <div className="shadow-sm w-full h-full rounded-2xl overflow-hidden">
        <SearchBar title="Sell" path="/sell-add">
          <div className="dropdown dropdown-bottom">
            <label
              tabIndex={0}
              className="text-whiteHigh flex items-center gap-1 cursor-pointer"
            >
              <span>{selectedShop ? selectedShop : "Shop Name"}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11.6468 13.229L12 13.5814L12.3532 13.229L16.5896 9.00173L17.2929 9.70501L12 14.9979L6.70711 9.70501L7.41039 9.00173L11.6468 13.229Z"
                  fill="white"
                  stroke="white"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-whiteHigh rounded w-52"
            >
              <li onClick={() => setSelectedShop("Item 1")}>
                <a>Item 1</a>
              </li>
              <li onClick={() => setSelectedShop("Item 2")}>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </SearchBar>

        <div className="h-[calc(100%-80px)] overflow-auto flex flex-col justify-between pb-4">
          <div>
            <SellTable></SellTable>
          </div>
          <Pagination></Pagination>
        </div>
      </div>
    </section>
  );
}

export default Sell;
