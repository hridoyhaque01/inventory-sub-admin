import React from "react";

const CustomerModal = ({ item }) => {
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
    };
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
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
                <div className="flex items-center gap-3">
                  <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-right">
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
                <div className="flex items-center gap-3">
                  <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-right">
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
                <div className="flex items-center gap-3">
                  <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-right">
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
                <div className="flex items-center gap-3 mt-4">
                  <span className="w-[140px]"></span>
                  <div className="flex items-center gap-3">
                    <label
                      htmlFor="customerModal"
                      className="w-[160px] p-4 rounded-full border border-errorLightColor text-errorLightColor font-medium text-center cursor-pointer"
                    >
                      Cancel
                    </label>
                    <button
                      htmlFor="customerModal"
                      className="w-[160px] p-4 rounded-full bg-primaryMainLight font-medium text-whiteHigh text-center"
                    >
                      Save
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
