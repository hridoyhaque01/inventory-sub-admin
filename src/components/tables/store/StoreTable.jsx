import React from "react";
import { useNavigate } from "react-router-dom";

function StoreTable() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/store-details");
  };

  return (
    <div>
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
              Location
            </th>

            <th className="bg-primaryMainLightest text-blackHigh text-base normal-case text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="">
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
            <td className="py-3">Rajpara, Rajshahi</td>
            <td className="py-3 text-center">
              <button
                type="button"
                className="inline-flex bg-successLight px-4 py-3 rounded-xl text-successColor cursor-pointer"
                onClick={handleNavigate}
              >
                See Details
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StoreTable;
