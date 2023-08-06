import React from "react";
import { useNavigate } from "react-router-dom";
import ConfirmationModal from "../../modals/ConfirmationModal";

function MoneyOwedTable() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/moneyOwed-edit");
  };

  return (
    <div>
      <table className="table w-full">
        <thead className=" p-0">
          <tr className="font-bold text-center text-3xl">
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
            <th className="bg-primaryMainLightest text-blackHigh text-base normal-case p-2">
              Customer Id
            </th>

            <th className="bg-primaryMainLightest text-blackHigh text-base normal-case">
              Due Amount
            </th>

            <th className="bg-primaryMainLightest text-blackHigh text-base normal-case">
              Pay Date
            </th>

            <th className="bg-primaryMainLightest text-blackHigh text-base normal-case">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr className="text-center">
            <th className="py-3">
              <input
                type="checkbox"
                className="checkbox checkbox-accent border-fadeHigh  checkbox-sm rounded "
                name="checkbox"
              />
            </th>
            <td className="py-3">1</td>
            <td className="py-3">019456654265</td>

            <td className="py-3">6654145645</td>
            <td className="py-3">25/06/2023</td>
            <td className="py-3">
              <div className="dropdown dropdown-end">
                <label
                  tabIndex={0}
                  className="inline-flex bg-successLight px-4 py-3 rounded-xl text-successColor cursor-pointer"
                >
                  Pay
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-28"
                >
                  <li>
                    <label onClick={handleNavigate}>
                      <p
                        className={`text-warningColor active:bg-blackLow w-full rounded-t-md`}
                      >
                        Edit
                      </p>
                    </label>
                  </li>
                  <li className="active:bg-whiteHigh">
                    <label
                      className="active:bg-whiteHigh"
                      htmlFor="confirmationPopup"
                    >
                      <p className={`text-errorColor  w-full rounded-t-md`}>
                        Delete
                      </p>
                    </label>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div>
        <ConfirmationModal status="delete"></ConfirmationModal>
      </div>
    </div>
  );
}

export default MoneyOwedTable;
