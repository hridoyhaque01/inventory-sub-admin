import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequestLoader from "../../components/loaders/RequestLoader";
import {
  useAddCustomersMutation,
  useUpdateCustomersMutation,
} from "../../features/customers/customerApi";

function CustomerForm() {
  const { store } = useSelector((state) => state.auth);
  const { _id: id } = store || {};
  const [addCustomers, { isLoading }] = useAddCustomersMutation();
  const [updateCustomers, { isLoading: updateLoading }] =
    useUpdateCustomersMutation();
  const { state } = useLocation();
  const { payload, type } = state || {};
  const navigate = useNavigate();

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const customerPhone = form.customerPhone.value;
    const customerName = form.customerName.value;
    const customerAddress = form.customerAddress.value;

    if (type === "edit") {
      const data = {
        customerName,
        customerAddress,
      };
      const formData = new FormData();
      formData.append("data", JSON.stringify(data));
      updateCustomers({ data: formData, id: payload?.customerPhone })
        .unwrap()
        .then((res) => {
          form.reset();
          navigate("/customer");
        })
        .catch((error) => {
          console.log(error);
          errorNotify("Customer update failed");
        });
    } else {
      const data = {
        storeId: id,
        customerPhone,
        customerName,
        customerAddress,
      };
      const formData = new FormData();
      formData.append("data", JSON.stringify(data));
      addCustomers(formData)
        .unwrap()
        .then((res) => {
          form.reset();
          infoNotify("Customer add successfull");
        })
        .catch((error) => {
          console.log(error);
          errorNotify("Customer add failed");
        });
    }
  };

  return (
    <section className="h-full w-full overflow-auto px-6 md:px-10 py-6">
      <div className="shadow-sm w-full rounded-2xl overflow-hidden">
        <div className="bg-primaryMainDarkest p-4">
          <h4 className=" text-whiteHigh text-lg md:text-2xl font-bold">
            Customer
          </h4>
        </div>
        <div className="bg-whiteHigh w-full px-4">
          <div className=" w-full max-w-[620px] mx-auto py-6">
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
                    readOnly={type === "edit" ? true : false}
                    required
                    className="w-full py-3 px-4 border border-whiteLow outline-none rounded text-blackLow text-sm"
                    defaultValue={payload?.customerPhone}
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
                    defaultValue={payload?.customerName}
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
                    defaultValue={payload?.customerAddress}
                  />
                </div>

                {/* submit buttons  */}

                <div className="flex flex-col md:flex-row md:items-center gap-3 mt-4">
                  <span className="w-[140px]"></span>
                  <div className="flex items-center gap-3">
                    <Link
                      to="/customer"
                      className="w-[140px] sm:w-[160px] p-3 sm:p-4 rounded-full border border-errorLightColor text-errorLightColor font-medium text-center"
                    >
                      Back
                    </Link>
                    <button
                      type="submit"
                      className="w-[140px] sm:w-[160px] p-3 sm:p-4 rounded-full border bg-primaryMainLight text-whiteHigh font-medium text-center"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {(isLoading || updateLoading) && <RequestLoader></RequestLoader>}
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
    </section>
  );
}

export default CustomerForm;
