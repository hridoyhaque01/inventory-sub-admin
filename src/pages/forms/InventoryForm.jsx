import React from "react";
import { Link, useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function InventoryForm() {
  const { state } = useLocation() || {};
  const { payload, type } = state || {};

  return (
    <section className="h-full w-full overflow-auto px-6 md:px-10 py-6">
      <div className="shadow-sm w-full rounded-2xl overflow-hidden">
        <div className="bg-primaryMainDarkest p-4">
          <h4 className=" text-whiteHigh text-lg md:text-2xl font-bold">
            Inventory
          </h4>
        </div>
        <div className="bg-whiteHigh w-full px-6">
          <div className=" w-full max-w-[620px] mx-auto py-6">
            <form action="">
              <div className="flex flex-col justify-start gap-6">
                {/* productId */}
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-sm sm:text-base text-left md:text-right">
                    Product ID :
                  </span>
                  <input
                    type="text"
                    placeholder="Enter product ID"
                    name="productId"
                    readOnly
                    className="w-full py-3 px-4 border border-whiteLow outline-none rounded text-fadeColor text-sm bg-whiteMid"
                    defaultValue={payload?.productId}
                  />
                </div>

                {/* Product Name */}
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-sm sm:text-base text-left md:text-right">
                    Product Name:
                  </span>
                  <input
                    type="text"
                    placeholder="Enter product name"
                    name="productName"
                    readOnly
                    className="w-full py-3 px-4 border border-whiteLow outline-none rounded text-fadeColor text-sm bg-whiteMid"
                    defaultValue={payload?.productName}
                  />
                </div>

                {/* Product Category: */}
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-sm sm:text-base text-left md:text-right">
                    Product Category:
                  </span>
                  <div className="relative w-full">
                    <input
                      type="text"
                      placeholder="Enter product name"
                      name="productCategory"
                      readOnly
                      className="w-full py-3 px-4 border border-whiteLow outline-none rounded text-fadeColor text-sm bg-whiteMid"
                      defaultValue={payload?.productCategory}
                    />
                  </div>
                </div>

                {/* Shop name */}
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-sm sm:text-base text-left md:text-right">
                    Shop Name :
                  </span>
                  <div className="relative w-full">
                    <input
                      type="text"
                      placeholder="Enter product name"
                      name="productCategory"
                      readOnly
                      className="w-full py-3 px-4 border border-whiteLow outline-none rounded text-fadeColor text-sm bg-whiteMid"
                      defaultValue={payload?.storeName}
                    />
                  </div>
                </div>

                {/* Buying Price/Unit: */}
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-sm sm:text-base text-left md:text-right">
                    Quantity:
                  </span>
                  <div className="w-full py-3 px-4 flex items-center border border-whiteLow outline-none rounded text-fadeColor text-sm bg-whiteMid">
                    <input
                      type="number"
                      name="productQuantity"
                      className="w-28 border-none outline-none bg-transparent"
                      placeholder="Enter quantity"
                      defaultValue={`${payload?.productQuantity}`}
                      readOnly
                    />

                    <div className="relative w-full max-w-max">
                      <select
                        className="appearance-none outline-none bg-transparent w-16"
                        name="unit"
                        defaultValue=""
                        disabled
                      >
                        <option value="">{payload?.unit}</option>
                      </select>
                      <div className="absolute inset-y-0 right-1 flex items-center text-secondaryColor pointer-events-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="16"
                          viewBox="0 0 17 16"
                          fill="none"
                        >
                          <path
                            d="M12.0561 5.53003L8.99609 8.58336L5.93609 5.53003L4.99609 6.47003L8.99609 10.47L12.9961 6.47003L12.0561 5.53003Z"
                            fill="#808080"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* <input
                    type="number"
                    name="buyingPrice"
                    placeholder="Buying price"
                    className="w-full py-3 px-4 border border-whiteLow outline-none rounded text-fadeColor text-sm bg-whiteMid"
                  /> */}
                </div>
                {/* Buying Price/Unit: */}
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-sm sm:text-base text-left md:text-right">
                    Buying Price/Unit:
                  </span>
                  <input
                    type="number"
                    name="buyingPrice"
                    placeholder="Enter buying price"
                    readOnly
                    className="w-full py-3 px-4 border border-whiteLow outline-none rounded text-fadeColor text-sm bg-whiteMid"
                    defaultValue={payload?.buyingPrice}
                  />
                </div>

                {/* Selling Price/Unit: */}
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-sm sm:text-base text-left md:text-right">
                    Selling Price/Unit:
                  </span>
                  <input
                    type="number"
                    name="sellingPrice"
                    placeholder="Enter selling price"
                    readOnly
                    className="w-full py-3 px-4 border border-whiteLow outline-none rounded text-fadeColor text-sm bg-whiteMid"
                    defaultValue={payload?.sellingPrice}
                  />
                </div>
                {/* edit button */}
                <div className="flex flex-col md:flex-row md:items-center gap-3 mt-4">
                  <span className="w-[140px]"></span>
                  <div className="flex flex-col md:flex-row md:items-center gap-3">
                    <Link
                      to="/inventory"
                      className="w-[140px] sm:w-[160px] p-3 sm:p-4 rounded-full border bg-primaryMainLight text-whiteHigh font-medium text-center"
                    >
                      Back
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InventoryForm;
