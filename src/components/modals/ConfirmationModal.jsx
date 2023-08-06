import React from "react";

const ConfirmationModal = ({ handleStatus, status, modalClose }) => {
  return (
    <section>
      <input type="checkbox" id="confirmationPopup" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle ">
        <div className="modal-box flex flex-col items-center justify-center gap-4 bg-white">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
            >
              <path
                d="M60 10C32.4 10 10 32.4 10 60C10 87.6 32.4 110 60 110C87.6 110 110 87.6 110 60C110 32.4 87.6 10 60 10ZM65 85H55V75H65V85ZM65 65H55V35H65V65Z"
                fill="url(#paint0_linear_30_3672)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_30_3672"
                  x1="60"
                  y1="10"
                  x2="60"
                  y2="110"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#234B4C" />
                  <stop offset="1" stopColor="#2ED3D2" stopOpacity="0.48" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div>
            <p className="font-bold text-lg">
              Do you want to <span className="capitalize">{status}</span>?
            </p>
          </div>
          <div className="modal-action flex items-center justify-center">
            <label
              htmlFor="confirmationPopup"
              className="btn rounded-full bg-primaryMainLight hover:bg-primaryMainLight border-secondaryColor hover:border-primaryMainLight text-whiteHigh  w-full"
              onClick={handleStatus}
              data-hs-overlay={modalClose || ""}
            >
              Confirm
            </label>
            <label
              htmlFor="confirmationPopup"
              className="btn rounded-full bg-transparent text-errorLowColor w-full border-errorLowColor hover:border-errorLowColor hover:bg-transparent"
            >
              Cancel
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfirmationModal;
