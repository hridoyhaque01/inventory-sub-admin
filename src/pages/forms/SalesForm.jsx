import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomerModal from "../../components/modals/CustomerModal";
import { useGetCustomersQuery } from "../../features/customers/customerApi";

function SalesForm() {
  const {
    data: customers,
    isLoading,
    isError: customerFetchError,
  } = useGetCustomersQuery();
  const { store } = useSelector((state) => state.auth);
  const { products: data } = store || {};

  const { state } = useLocation();
  const { payload } = state || {};
  const [isFullPaid, setIsFullPaid] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const [isType, setIsType] = useState(false);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const onProductIdChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    setIsType(value?.trim()?.length > 0 ? true : false);
    const newData = data?.filter((item) =>
      item?.productId?.toLowerCase().includes(value?.toLowerCase())
    );
    setFilteredProduct(newData);
  };

  const errorNotify = (message) =>
    toast.error(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const infoNotify = (message) =>
    toast.info(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const handleProductSelect = (item) => {
    setSelectedProduct(item);
    setIsType(false);
    setSearchValue(item?.productId);
  };

  return customerFetchError ? (
    <div>Something went wrong </div>
  ) : (
    <section className="h-full w-full overflow-auto px-10 py-6">
      <div className="shadow-sm w-full rounded-2xl overflow-hidden">
        <div className="bg-primaryMainDarkest p-4">
          <h4 className=" text-whiteHigh text-2xl font-bold">Sales</h4>
        </div>
        <div className="bg-whiteHigh w-full">
          <div className=" w-full max-w-[620px] mx-auto py-6">
            <form action="">
              <div className="flex flex-col justify-start gap-6">
                {/* productId */}
                <div className="flex items-center gap-3 relative">
                  <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-right">
                    Product ID :
                  </span>
                  <div className="w-full relative">
                    <input
                      type="text"
                      placeholder="Enter product ID"
                      name="productId"
                      className="w-full py-3 px-4 text-blackLow border border-whiteLow outline-none rounded text-sm"
                      value={searchValue}
                      onChange={onProductIdChange}
                    />
                    {isType ? (
                      filteredProduct?.length > 0 ? (
                        <div className="absolute left-0 right-0 top-12 py-2 bg-whiteHigh shadow-md rounded-md divide-y divide-fadeLight">
                          {filteredProduct?.map((item) => (
                            <div
                              className="w-full px-6 py-2 cursor-pointer hover:bg-whiteSemi"
                              key={item?.productId}
                              onClick={() => handleProductSelect(item)}
                            >
                              {item?.productId}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="absolute left-0 right-0 top-12 p-4 bg-whiteHigh shadow-md rounded-md divide-y divide-fadeLight">
                          <div>No product found</div>
                        </div>
                      )
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                {/* Product Name */}
                <div className="flex items-center gap-3">
                  <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-right">
                    Product Name :
                  </span>
                  <input
                    type="text"
                    placeholder="Product name"
                    name="productName"
                    className="w-full py-3 px-4 border border-whiteLow outline-none rounded text-blackLow text-sm"
                    readOnly
                    defaultValue={selectedProduct?.productName}
                  />
                </div>

                {/* Product Category */}
                <div className="flex items-center gap-3">
                  <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-right">
                    Product Category :
                  </span>
                  <input
                    type="text"
                    placeholder="Product category"
                    name="productCategory"
                    className="w-full py-3 px-4 border border-whiteLow outline-none rounded text-blackLow text-sm"
                    readOnly
                    defaultValue={selectedProduct?.productCategory}
                  />
                </div>

                {/* Shop Name: */}
                <div className="flex items-center gap-3">
                  <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-right">
                    Shop Name :
                  </span>
                  <input
                    type="text"
                    placeholder="Shop name"
                    name="shopName"
                    className="w-full py-3 px-4 border border-whiteLow outline-none rounded text-blackLow text-sm"
                    readOnly
                    defaultValue={selectedProduct?.storeName}
                  />
                </div>

                {/* Selling Price/Unit: */}
                <div className="flex items-center gap-3">
                  <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-right">
                    Selling Price/Unit :
                  </span>
                  <input
                    type="number"
                    name="sellingPrice"
                    placeholder="Selling price"
                    className="w-full py-3 px-4 border border-whiteLow outline-none rounded text-blackLow text-sm"
                    readOnly
                    defaultValue={selectedProduct?.sellingPrice}
                  />
                </div>

                {/* Quantity */}
                <div className="flex items-center gap-3">
                  <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-right">
                    Quantity :
                  </span>
                  <div className="w-full py-3 px-4 flex items-center border border-whiteLow outline-none rounded text-blackLow text-sm">
                    <input
                      type="number"
                      name="quantity"
                      className="w-20 border-none outline-none"
                      placeholder="Quantity"
                      value={`${quantity}`}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                    />

                    <div className="relative w-full max-w-max">
                      <select
                        className="appearance-none outline-none  w-16"
                        name="quantityAction"
                        defaultValue=""
                        disabled
                      >
                        <option value="">{selectedProduct?.unit}</option>
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
                <div className="flex items-center gap-3">
                  <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-right">
                    Total Price :
                  </span>
                  <input
                    type="text"
                    placeholder="Total price"
                    name="totalPrice"
                    className="w-full py-3 px-4 border border-whiteLow outline-none rounded text-blackLow text-sm"
                    readOnly
                    value={
                      selectedProduct?.sellingPrice === undefined
                        ? 0
                        : selectedProduct?.sellingPrice * quantity
                    }
                    // onChange={() => console.log("")}
                  />
                </div>

                {/* checkbox   */}

                <div className="flex items-center gap-3">
                  <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-right"></span>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-accent border-fadeHigh  checkbox-sm rounded "
                    name="checkbox"
                    checked={isFullPaid}
                    onChange={() => setIsFullPaid((prev) => !prev)}
                    id="fullPaid"
                  />
                  <label htmlFor="fullPaid">Full Paid</label>
                </div>

                {/* pay and due  */}
                {!isFullPaid && (
                  <div className="w-full flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                      <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-right">
                        Pay :
                      </span>
                      <input
                        type="text"
                        placeholder="Pay amount"
                        name="payAmount"
                        className="w-full py-3 px-4 border border-whiteLow outline-none rounded text-blackLow text-sm"
                      />
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-right">
                        Due :
                      </span>
                      <input
                        type="text"
                        placeholder="Due amount"
                        name="dueAmount"
                        className="w-full py-3 px-4 border border-whiteLow outline-none rounded text-blackLow text-sm"
                      />
                    </div>
                  </div>
                )}
                {/* customer */}

                <div className="flex items-center gap-3">
                  <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-right">
                    Customer :
                  </span>
                  <div className="w-full py-3 px-4 border border-whiteLow  rounded text-blackLow text-sm flex items-center gap-1">
                    <input
                      type="text"
                      placeholder="Type customer number"
                      name="shopName"
                      className="w-full outline-none"
                    />
                    <label htmlFor="customerModal" className="cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M10.0003 1.66666C5.40033 1.66666 1.66699 5.39999 1.66699 9.99999C1.66699 14.6 5.40033 18.3333 10.0003 18.3333C14.6003 18.3333 18.3337 14.6 18.3337 9.99999C18.3337 5.39999 14.6003 1.66666 10.0003 1.66666ZM14.167 10.8333H10.8337V14.1667H9.16699V10.8333H5.83366V9.16666H9.16699V5.83332H10.8337V9.16666H14.167V10.8333Z"
                          fill="#797979"
                        />
                      </svg>
                    </label>
                  </div>
                </div>

                {/* edit button */}
                <div className="flex items-center gap-3 mt-4">
                  <span className="w-[140px]"></span>
                  <div className="flex items-center gap-3">
                    <Link
                      to="/sales"
                      className="w-[160px] p-4 rounded-full border border-errorLightColor text-errorLightColor font-medium text-center"
                    >
                      Back
                    </Link>
                    <button
                      type="submit"
                      className="w-[160px] p-4 rounded-full border bg-primaryMainLight text-whiteHigh font-medium text-center"
                    >
                      Back
                    </button>
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

        {/* {(isLoading || updateProductLoading) && <RequestLoader></RequestLoader>} */}
        <div>
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          ></ToastContainer>
        </div>

        <CustomerModal></CustomerModal>
      </div>
    </section>
  );
}

export default SalesForm;
