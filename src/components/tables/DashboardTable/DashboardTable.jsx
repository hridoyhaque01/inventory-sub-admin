import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { Pagination } from "../../shared/pagination/Pagination";

const DashboardTable = ({ results, setActiveStore }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = results?.slice(indexOfFirstRow, indexOfLastRow);
  const { t } = useTranslation();

  const totalPaidToOwner = results.reduce(
    (acc, result) => acc + result.totalPaidToOwner,
    0
  );
  const totalRemaining = results.reduce(
    (acc, result) => acc + result.remaining,
    0
  );
  const totalrevenue = results.reduce((acc, result) => acc + result.revenue, 0);
  const totalDue = results.reduce((acc, result) => acc + result.totalDue, 0);
  const totalCost = results.reduce((acc, result) => acc + result.totalCost, 0);
  const totalSales = results.reduce(
    (acc, result) => acc + result.totalSales,
    0
  );

  return (
    <section>
      <div className="flex flex-col h-[640px]">
        <section className="flex items-center bg-primaryMainDarkest px-6 py-3.5 rounded-t-md">
          <p className="text-right text-2xl text-whiteHigh font-bold capitalize">
            {results[0].storeName}
          </p>
        </section>
        <div className="h-full w-full overflow-auto flex flex-col items-end flex-wrap justify-between pb-4 gap-4 bg-whiteHigh rounded-b-md">
          <table className="table w-full overflow-auto">
            <thead className=" p-0">
              <tr className="font-bold text-center text-3xl">
                <th className="bg-primaryMainLightest text-blackHigh text-base normal-case">
                  {t("tables.serial")}
                </th>

                <th className="bg-primaryMainLightest text-blackHigh text-base normal-case">
                  {t("tables.totalDue")}
                </th>

                <th className="bg-primaryMainLightest text-blackHigh text-base normal-case">
                  {t("tables.totalRevenue")}
                </th>
                <th className="bg-primaryMainLightest text-blackHigh text-base normal-case">
                  {t("tables.totalCost")}
                </th>
                <th className="bg-primaryMainLightest text-blackHigh text-base normal-case">
                  {t("tables.totalSales")}
                </th>
                <th className="bg-primaryMainLightest text-blackHigh text-base normal-case">
                  {t("date")}
                </th>
              </tr>
            </thead>
            {currentRows?.length === 0 ? (
              <tbody>
                <tr>
                  <td colSpan="6" className="">
                    {t("noData")}
                  </td>
                </tr>
              </tbody>
            ) : (
              <tbody className="text-center">
                {/* {currentRows?.map((customer, i)=>) */}
                {currentRows?.map((result, i) => (
                  <tr className="text-center" key={i}>
                    <td className="py-2">
                      {currentPage === 1 && i + 1 < 10
                        ? "0" + (rowsPerPage * (currentPage - 1) + i + 1)
                        : rowsPerPage * (currentPage - 1) + i + 1}
                    </td>
                    <td className="py-2">{result?.totalDue}</td>
                    <td className="py-2">{result?.revenue}</td>
                    <td className="py-2">{result?.totalCost}</td>
                    <td className="py-2">{result?.totalSales}</td>
                    <td className="py-2">{result?.date}</td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>

          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            rowsPerPage={rowsPerPage}
            setRowsPerPage={setRowsPerPage}
            totalRows={results?.length}
          ></Pagination>
        </div>
      </div>
      <div className=" w-full overflow-auto flex flex-col items-end flex-wrap justify-between gap-4 bg-whiteHigh rounded-b-md">
        <table className="table w-full overflow-auto">
          <thead className=" p-0">
            <tr className="font-bold text-center text-3xl">
              <th className="bg-primaryMainLightest text-blackHigh text-base normal-case">
                {/* {t("tables.serial")} */}
              </th>
              <th className="bg-primaryMainLightest text-blackHigh text-base normal-case p-2">
                {t("tables.totalPaidOwner")}
              </th>

              <th className="bg-primaryMainLightest text-blackHigh text-base normal-case">
                {t("tables.totalRemaining")}
              </th>

              <th className="bg-primaryMainLightest text-blackHigh text-base normal-case">
                {t("tables.totalDue")}
              </th>

              <th className="bg-primaryMainLightest text-blackHigh text-base normal-case">
                {t("tables.totalRevenue")}
              </th>
              <th className="bg-primaryMainLightest text-blackHigh text-base normal-case">
                {t("tables.totalCost")}
              </th>
              <th className="bg-primaryMainLightest text-blackHigh text-base normal-case">
                {t("tables.totalSales")}
              </th>
            </tr>
            <tr className="font-bold text-center text-3xl">
              <th className="bg-secondaryMain text-blackHigh text-base normal-case py-6">
                {t("tables.total")}
              </th>
              <th className="bg-secondaryMain text-blackHigh text-base normal-case  py-6">
                {totalPaidToOwner}
              </th>

              <th className="bg-secondaryMain text-blackHigh text-base normal-case  py-6">
                {totalRemaining}
              </th>

              <th className="bg-secondaryMain text-blackHigh text-base normal-case  py-6">
                {totalDue}
              </th>

              <th className="bg-secondaryMain text-blackHigh text-base normal-case  py-6">
                {totalrevenue}
              </th>
              <th className="bg-secondaryMain text-blackHigh text-base normal-case  py-6">
                {totalCost}
              </th>
              <th className="bg-secondaryMain text-blackHigh text-base normal-case  py-6">
                {totalSales}
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </section>
  );
};

export default DashboardTable;
