import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function InventoryForm() {
  const { state } = useLocation() || {};
  const { payload } = state || {};
  const { t } = useTranslation();

  return (
    <section className="h-full w-full overflow-auto px-6 md:px-10 py-6">
      <div className="shadow-sm w-full rounded-2xl overflow-hidden">
        <div className="bg-primaryMainDarkest p-4">
          <h4 className=" text-whiteHigh text-lg md:text-2xl font-bold">
            {t("tableTitle.inventory")}
          </h4>
        </div>
        <div className="bg-whiteHigh w-full px-6">
          <div className=" w-full max-w-[620px] mx-auto py-6">
            <form action="">
              <div className="flex flex-col justify-start gap-6">
                {/* productId */}
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-sm sm:text-base text-left md:text-right">
                    {t("tables.productId")} :
                  </span>
                  <input
                    type="text"
                    placeholder={t("placeholders.enterProductId")}
                    name="productId"
                    readOnly
                    className="w-full py-3 px-4 border border-whiteLow outline-none rounded text-fadeColor text-sm bg-whiteMid"
                    defaultValue={payload?.productId}
                  />
                </div>

                {/* Product Name */}
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-sm sm:text-base text-left md:text-right">
                    {t("tables.productName")} :
                  </span>
                  <input
                    type="text"
                    placeholder={t("tables.productName")}
                    name="productName"
                    readOnly
                    className="w-full py-3 px-4 border border-whiteLow outline-none rounded text-fadeColor text-sm bg-whiteMid"
                    defaultValue={payload?.productName}
                  />
                </div>

                {/* Product Category: */}
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-sm sm:text-base text-left md:text-right">
                    {t("tables.productCategory")} :
                  </span>
                  <div className="relative w-full">
                    <input
                      type="text"
                      placeholder={t("tables.productCategory")}
                      name="productCategory"
                      readOnly
                      className="w-full py-3 px-4 border border-whiteLow outline-none rounded text-fadeColor text-sm bg-whiteMid"
                      defaultValue={payload?.productCategory}
                    />
                  </div>
                </div>

                {/* Shop name */}
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-sm sm:text-base text-left md:text-right">
                    {t("tables.shopName")} :
                  </span>
                  <div className="relative w-full">
                    <input
                      type="text"
                      placeholder={t("tables.shopName")}
                      name="productCategory"
                      readOnly
                      className="w-full py-3 px-4 border border-whiteLow outline-none rounded text-fadeColor text-sm bg-whiteMid"
                      defaultValue={payload?.storeName}
                    />
                  </div>
                </div>

                {/* quantity*/}
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-sm sm:text-base text-left md:text-right">
                    {t("tables.quantity")} :
                  </span>
                  <div className="w-full py-3 px-4 flex items-center border border-whiteLow outline-none rounded text-fadeColor text-sm bg-whiteMid">
                    <input
                      type="number"
                      name="productQuantity"
                      className="w-28 border-none outline-none bg-transparent"
                      placeholder={t("tables.quantity")}
                      defaultValue={`${payload?.productQuantity}`}
                      readOnly
                    />
                    <div className="relative w-full max-w-max">
                      <input
                        type="text"
                        className="appearance-none outline-none bg-transparent w-16 text-fadeColor"
                        readOnly
                        defaultValue={payload?.unit}
                      />
                    </div>
                  </div>
                </div>
                {/* Buying Price/Unit: */}
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-sm sm:text-base text-left md:text-right">
                    {t("tables.buyingPrice")} :
                  </span>
                  <input
                    type="number"
                    name="buyingPrice"
                    placeholder={t("tables.buyingPrice")}
                    readOnly
                    className="w-full py-3 px-4 border border-whiteLow outline-none rounded text-fadeColor text-sm bg-whiteMid"
                    defaultValue={payload?.buyingPrice}
                  />
                </div>

                {/* Selling Price/Unit: */}
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <span className="inline-block w-[140px] shrink-0 whitespace-nowrap text-sm sm:text-base text-left md:text-right">
                    {t("tables.sellingPrice")} :
                  </span>
                  <input
                    type="number"
                    name="sellingPrice"
                    placeholder={t("tables.sellingPrice")}
                    readOnly
                    className="w-full py-3 px-4 border border-whiteLow outline-none rounded text-fadeColor text-sm bg-whiteMid"
                    defaultValue={payload?.sellingPrice}
                  />
                </div>
                {/* edit button */}
                <div className="flex flex-col md:flex-row md:items-center gap-3 mt-4">
                  <span className="w-[140px]"></span>
                  <div className="flex flex-col md:flex-row md:items-center gap-3">
                    <Link
                      to="/inventory"
                      className="w-[140px] sm:w-[160px] p-3 sm:p-4 rounded-full border bg-primaryMainLight text-whiteHigh font-medium text-center"
                    >
                      {t("buttons.back")}
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InventoryForm;
