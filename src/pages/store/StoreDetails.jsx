import React from "react";
import { useNavigate } from "react-router-dom";
import StoreCard from "../../components/Cards/StoreCard";
import ResetPasswordModal from "../../components/modals/ResetPasswordModal";

function StoreDetails() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/store-details");
  };

  const data = [
    {
      title: "Total Reserve",
      number: 784645,
      color: "bg-successColor",
    },
    {
      title: "Total Cost",
      number: 327,
      color: "bg-secondaryMainLight",
    },
  ];

  return (
    <div className="w-full overflow-auto pt-10 pb-6 pr-10">
      <div className="flex flex-col justify-around pty-10 gap-4 w-full">
        {/* 4 top cards */}
        <section className="flex items-stretch gap-8 px-4">
          {data.map((data, index) => (
            <StoreCard data={data} key={index}></StoreCard>
          ))}
        </section>
        {/* single store details */}
        <div className="p-6 rounded-2xl bg-whiteHigh shadow-md mt-6">
          <h4 className="text-xl font-bold">Staff </h4>
          <div className="mt-6">
            <table className="table w-full">
              <thead className=" p-0">
                <tr className="font-bold text-3xl">
                  <th className="bg-primaryMainLightest text-bold normal-case p-2">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-accent border-fadeHigh text-base  checkbox-sm rounded "
                      name="checkbox"
                    />
                  </th>

                  <th className="bg-primaryMainLightest text-blackHigh text-base normal-case">
                    Serial
                  </th>
                  <th className="bg-primaryMainLightest text-blackHigh text-base normal-case">
                    Created
                  </th>
                  <th className="bg-primaryMainLightest text-blackHigh text-base normal-case">
                    Name
                  </th>

                  <th className="bg-primaryMainLightest text-blackHigh text-base normal-case">
                    Email
                  </th>

                  <th className="bg-primaryMainLightest text-blackHigh text-base normal-case">
                    Password
                  </th>

                  <th className="bg-primaryMainLightest text-blackHigh text-base normal-case text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="">
                <tr className="border-none">
                  <th className="p-2">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-accent border-fadeHigh  checkbox-sm rounded "
                      name="checkbox"
                    />
                  </th>
                  <td className="py-3">1</td>
                  <td className="py-3">11/12/2019</td>

                  <td className="py-3">Shop Name</td>
                  <td className="py-3">user@gmail.com</td>
                  <td className="py-3">*************</td>
                  <td className="py-3 text-center">
                    <label
                      htmlFor="resetPasswordModal"
                      className="inline-flex bg-successLight px-4 py-3 rounded-xl text-successColor cursor-pointer"
                    >
                      Reset Password
                    </label>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div>
        <ResetPasswordModal></ResetPasswordModal>
      </div>
    </div>
  );
}

export default StoreDetails;
