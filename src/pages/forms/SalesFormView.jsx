import React from "react";
import { Link, useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function SalesFormView() {
  const { state } = useLocation();
  const { payload } = state || {};
  return (
    <section className="h-full w-full overflow-auto px-6 md:px-10 py-6">
      <div className="shadow-sm w-full rounded-2xl">
        <div className="bg-primaryMainDarkest p-4 rounded-t-2xl">
          <h4 className=" text-whiteHigh text-lg md:text-2xl font-bold">
            Sales
          </h4>
        </div>
        <div className="bg-whiteHigh w-full px-4 rounded-b-2xl">
          <div className=" w-full max-w-[620px] mx-auto py-6">
            <form action="">
              <div className="flex flex-col justify-start gap-6">
                {/* productId */}
                <div className="flex flex-col md:flex-row md:items-center gap-3 relative">
                  <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-sm sm:text-base text-left md:text-right">
                    Product ID :
                  </span>
                  <input
                    type="text"
                    placeholder="Product name"
                    name="productName"
                    className="w-full py-3 px-4 border border-whiteLow outline-none rounded text-blackLow text-sm"
                    readOnly
                    defaultValue={payload?.productId}
                  />
                </div>

                {/* Product Name */}
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-sm sm:text-base text-left md:text-right">
                    Product Name :
                  </span>
                  <input
                    type="text"
                    placeholder="Product name"
                    name="productName"
                    className="w-full py-3 px-4 border border-whiteLow outline-none rounded text-blackLow text-sm"
                    readOnly
                    defaultValue={payload?.productName}
                  />
                </div>

                {/* Product Category */}
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-sm sm:text-base text-left md:text-right">
                    Product Category :
                  </span>
                  <input
                    type="text"
                    placeholder="Product category"
                    name="productCategory"
                    className="w-full py-3 px-4 border border-whiteLow outline-none rounded text-blackLow text-sm"
                    readOnly
                    defaultValue={payload?.productCategory}
                  />
                </div>

                {/* Shop Name: */}
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-sm sm:text-base text-left md:text-right">
                    Shop Name :
                  </span>
                  <input
                    type="text"
                    placeholder="Shop name"
                    name="shopName"
                    className="w-full py-3 px-4 border border-whiteLow outline-none rounded text-blackLow text-sm"
                    readOnly
                    defaultValue={payload?.storeName}
                  />
                </div>

                {/* Selling Price/Unit: */}
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-sm sm:text-base text-left md:text-right">
                    Selling Price/Unit :
                  </span>
                  <input
                    type="number"
                    name="sellingPrice"
                    placeholder="Selling price"
                    className="w-full py-3 px-4 border border-whiteLow outline-none rounded text-blackLow text-sm"
                    readOnly
                    defaultValue={payload?.unitPrice}
                  />
                </div>

                {/* Quantity */}
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-sm sm:text-base text-left md:text-right">
                    Quantity :
                  </span>
                  <div className="w-full py-3 px-4 flex items-center border border-whiteLow outline-none rounded text-blackLow text-sm">
                    <input
                      type="number"
                      name="quantity"
                      className="w-20 border-none outline-none"
                      placeholder="Quantity"
                      step="any"
                      defaultValue={payload?.unitCount}
                    />

                    <div className="relative w-full max-w-max">
                      <select
                        className="appearance-none outline-none  w-16"
                        name="quantityAction"
                        defaultValue=""
                        disabled
                      >
                        <option value="">{payload?.unit}</option>
                      </select>
                      <label
                        htmlFor="customerModal"
                        className="absolute inset-y-0 right-1 flex items-center text-secondaryColor pointer-events-none"
                      >
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
                      </label>
                    </div>
                  </div>
                  {/* <input
                    type="number"
                    name="buyingPrice"
                    placeholder="Buying price"
                    className="w-full py-3 px-4 border border-whiteLow outline-none rounded text-blackLow text-sm"
                  /> */}
                </div>

                {/* Total Price: */}
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-sm sm:text-base text-left md:text-right">
                    Total Price :
                  </span>
                  <input
                    type="text"
                    placeholder="Total price"
                    name="totalPrice"
                    className="w-full py-3 px-4 border border-whiteLow outline-none rounded text-blackLow text-sm"
                    readOnly
                    defaultValue={payload?.totalAmount}
                    // onChange={() => console.log("")}
                  />
                </div>

                {/* checkbox   */}

                {/* <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-sm sm:text-base text-left md:text-right"></span>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-accent border-fadeHigh  checkbox-sm rounded "
                    name="checkbox"
                    id="fullPaid"
                  />
                  <label htmlFor="fullPaid">Full Paid</label>
                </div> */}

                {/* pay and due  */}
                <div className="w-full flex flex-col gap-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-3">
                    <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-sm sm:text-base text-left md:text-right">
                      Pay :
                    </span>
                    <input
                      type="number"
                      placeholder="Pay amount"
                      name="payAmount"
                      step="any"
                      className="w-full py-3 px-4 border border-whiteLow outline-none rounded text-blackLow text-sm"
                      defaultValue={payload?.paidAmount}
                    />
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-3">
                    <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-sm sm:text-base text-left md:text-right">
                      Due :
                    </span>
                    <input
                      type="number"
                      placeholder="Due amount"
                      name="dueAmount"
                      step="any"
                      className="w-full py-3 px-4 border border-whiteLow outline-none rounded text-blackLow text-sm"
                      readOnly
                      defaultValue={payload?.dueAmount}
                    />
                  </div>
                </div>
                {/* customer */}

                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-sm sm:text-base text-left md:text-right">
                    Customer :
                  </span>
                  <input
                    type="number"
                    placeholder="Due amount"
                    name="dueAmount"
                    step="any"
                    className="w-full py-3 px-4 border border-whiteLow outline-none rounded text-blackLow text-sm"
                    readOnly
                    defaultValue={payload?.customerId}
                  />
                </div>

                {/* edit button */}
                <div className="flex flex-col md:flex-row md:items-center gap-3 mt-4">
                  <span className="w-[140px]"></span>
                  <div className="flex items-center gap-3">
                    <Link
                      to="/sales"
                      className="w-[140px] sm:w-[160px] p-3 sm:p-4 rounded-full bg-primaryMainLight font-medium text-center text-whiteHigh"
                    >
                      Back
                    </Link>

                    {/* <button
                      type="submit"
                      className="w-[160px] p-4 rounded-full bg-primaryMainLight font-medium text-whiteHigh text-center"
                    >
                      Save
                    </button> */}
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

export default SalesFormView;
