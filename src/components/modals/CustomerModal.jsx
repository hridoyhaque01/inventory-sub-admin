import React from "react";

const CustomerModal = ({
  handler,
  errorNotify,
  infoNotify,
  setSelectedCustomer,
  setCustomerValue,
  storeId,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const customerPhone = form.customerPhone.value;
    const customerName = form.customerName.value;
    const customerAddress = form.customerAddress.value;

    const data = {
      customerPhone,
      customerName,
      customerAddress,
      storeId,
    };
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
    handler(formData)
      .unwrap()
      .then((res) => {
        setSelectedCustomer(res);
        setCustomerValue(res?.customerPhone);
        infoNotify("Customer add successfull");
      })
      .catch((error) => {
        errorNotify("Customer add failed");
      });
  };
  return (
    <section>
      <input type="checkbox" id="customerModal" className="modal-toggle" />
      <div className="modal flex flex-col justify-center items-center">
        <div className="modal-box w-11/12 max-w-5xl flex flex-col items-center justify-center gap-4 bg-white">
          <div className="w-full max-w-[618px]">
            <div className="flex justify-center mb-6">
              <span className="inline-block p-3 rounded-full font-medium bg-warningLowColor">
                Add Customer
              </span>
            </div>
            <form action="" onSubmit={handleSubmit}>
              <div className="flex flex-col justify-start gap-6">
                {/* productId */}
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-sm sm:text-base text-left md:text-right">
                    Mobile Number :
                  </span>
                  <input
                    type="number"
                    placeholder="Enter mobile number"
                    name="customerPhone"
                    required
                    className="w-full py-3 px-4 border border-whiteLow outline-none rounded text-blackLow text-sm"
                  />
                </div>

                {/* Product Name */}
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-sm sm:text-base text-left md:text-right">
                    Name:
                  </span>
                  <input
                    type="text"
                    placeholder="Enter fullname"
                    name="customerName"
                    required
                    className="w-full py-3 px-4 border border-whiteLow outline-none rounded text-blackLow text-sm"
                  />
                </div>

                {/* Shop Name: */}
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-sm sm:text-base text-left md:text-right">
                    Address:
                  </span>
                  <input
                    type="text"
                    placeholder="Enter address"
                    name="customerAddress"
                    required
                    className="w-full py-3 px-4 border border-whiteLow outline-none rounded text-blackLow text-sm"
                  />
                </div>

                {/* edit button */}
                <div className="flex flex-col md:flex-row md:items-center gap-3 mt-4">
                  <span className="w-[140px]"></span>
                  <div className="flex items-center gap-3">
                    <label
                      htmlFor="customerModal"
                      className="btn rounded-full w-[100px] sm:w-[160px] p-2 text-xs sm:text-base bg-transparent text-errorLowColor border-errorLowColor hover:border-errorLowColor hover:bg-transparent cursor-pointer"
                    >
                      Cancel
                    </label>
                    <button type="submit">
                      <label
                        htmlFor="customerModal"
                        className="btn rounded-full w-[100px] sm:w-[160px] p-2 text-xs sm:text-base bg-primaryMainLight hover:bg-primaryMainLight border-secondaryColor hover:border-primaryMainLight text-whiteHigh cursor-pointer"
                      >
                        Save
                      </label>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerModal;
