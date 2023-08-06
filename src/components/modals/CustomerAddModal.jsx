import React from "react";

const CustomerAddModal = ({ handleStatus, status, modalClose }) => {
  return (
    <section>
      <input type="checkbox" id="customerAddModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl flex flex-col items-center justify-center gap-4 bg-white">
          <div className="w-full max-w-[618px]">
            <div className="flex justify-center mb-6">
              <span className="inline-block p-3 rounded-full font-medium bg-warningLowColor">
                Add Customer
              </span>
            </div>
            <form action="" className="w-full">
              <div className="w-full flex flex-col justify-start gap-6">
                {/* New Password */}
                <div className="flex items-center gap-3">
                  <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-right">
                    Mobile Number :
                  </span>
                  <input
                    type="number"
                    placeholder="Mobile number"
                    name="phone"
                    className="w-full py-3 px-4 border border-whiteLow outline-none rounded text-blackLow text-sm"
                  />
                </div>

                {/* Full Name */}
                <div className="flex items-center gap-3">
                  <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-right">
                    Name :
                  </span>
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="fullName"
                    className="w-full py-3 px-4 border border-whiteLow outline-none rounded text-blackLow text-sm"
                  />
                </div>
                {/* Confirm Password */}
                <div className="flex items-center gap-3">
                  <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-right">
                    Address :
                  </span>
                  <input
                    type="text"
                    placeholder="Address"
                    name="address"
                    className="w-full py-3 px-4 border border-whiteLow outline-none rounded text-blackLow text-sm"
                  />
                </div>

                {/* submit button  */}

                <div className="flex items-center gap-3">
                  <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-right"></span>
                  <div className="modal-action flex items-center justify-center">
                    <label
                      htmlFor="customerAddModal"
                      className="btn rounded-full w-[160px] bg-transparent text-errorLowColor border-errorLowColor hover:border-errorLowColor hover:bg-transparent"
                    >
                      Cancel
                    </label>
                    <label
                      htmlFor="customerAddModal"
                      className="btn rounded-full w-[160px] bg-primaryMainLight hover:bg-primaryMainLight border-secondaryColor hover:border-primaryMainLight text-whiteHigh"
                    >
                      Save
                    </label>
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

export default CustomerAddModal;
