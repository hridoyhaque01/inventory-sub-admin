import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetPdfData } from "../../features/sales/salesSlice";
const Invoice = () => {
  const { pdfData, isDownloadPdf } = useSelector((state) => state.sales);
  const dispatch = useDispatch();
  const targetRef = useRef();
  const [loader, setLoader] = useState(false);

  const downloadPDF = () => {
    const capture = targetRef.current;
    setLoader(true);
    html2canvas(capture, { scale: 3 }).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("p", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save("receipt.pdf");
      dispatch(resetPdfData());
    });
  };

  return (
    <>
      <div
        ref={targetRef}
        className="max-w-[595px] mx-auto px-8 py-6 bg-whiteHigh"
      >
        <article className="overflow-">
          <div className="">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <h2 className="text-base font-medium">COMPANY NAME</h2>
                <p className="text-xs">160/68 California</p>
                <p className="text-xs">1-888-123-8910</p>
              </div>
              <div className="">
                <h2 className="text-3xl text-primaryMainDarkest font-bold tracking-tight uppercase">
                  INVOICE
                </h2>
              </div>
            </div>
            <div className="flex items-start justify-between  mt-11">
              <div className="flex flex-col gap-1">
                <h2 className="text-base font-semibold text-primaryMainDarkest">
                  Invoice to:
                </h2>
                <p className="text-primaryMainDarkest font-medium">
                  Mahmud Saimon
                </p>
                <p className="text-xs">256/8 California</p>
                <p className="text-xs">1-888-123-8910</p>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-xs font-semibold text-primaryMainDarkest flex items-center gap-2">
                  <span className="inline-block w-28 text-right">
                    Invoice number:
                  </span>
                  <span className="text-fadeColor">INV 10012</span>
                </h2>
                <h2 className="text-xs font-semibold text-primaryMainDarkest flex items-center gap-2">
                  <span className="inline-block w-28 text-right">
                    Date Issued:
                  </span>
                  <span className="text-fadeColor">26/03/2021</span>
                </h2>
                <h2 className="text-xs font-semibold text-primaryMainDarkest flex items-center gap-2">
                  <span className="inline-block w-28 text-right">
                    Due Date:
                  </span>
                  <span className="text-fadeColor">25/04/2021</span>
                </h2>
              </div>
            </div>
            <div className="">
              <div className="flex flex-col mx-0 mt-8">
                <table className="min-w-full divide-y divide-slate-500tk">
                  <thead>
                    <tr className="text-whiteHigh">
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-normal   bg-primaryMainDarkest"
                      >
                        Description
                      </th>
                      <th
                        scope="col"
                        className=" py-3.5 px-3 text-right text-sm font-normal  table-cell bg-primaryMainDarkest"
                      >
                        Quantity
                      </th>
                      <th
                        scope="col"
                        className=" py-3.5 px-3 text-right text-sm font-normal  table-cell bg-primaryMainDarkest"
                      >
                        Rate
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-3 pr-4 text-right text-sm font-normal   bg-primaryMainDarkest"
                      >
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-whiteLow">
                      <td className="py-4 pl-4 pr-3 text-sm ">
                        <div className="font-medium ">Tesla Truck</div>
                        <div className="mt-0.5  ">1 unit at 0.00tk</div>
                      </td>
                      <td className=" px-3 py-4 text-sm text-right  table-cell">
                        48
                      </td>
                      <td className=" px-3 py-4 text-sm text-right  table-cell">
                        0.00tk
                      </td>
                      <td className="py-4 pl-3 pr-4 text-sm text-right  ">
                        0.00tk
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th
                        scope="row"
                        colSpan="3"
                        className="pt-6 pl-6 pr-3 text-sm font-light text-right  table-cell"
                      >
                        Subtotal
                      </th>

                      <td className="pt-6 pl-3 pr-4 text-sm text-right  ">
                        0.00tk
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        colSpan="3"
                        className="hidd pt-6 pl-6 pr-3 text-sm font-light text-right  table-cell"
                      >
                        Discount
                      </th>

                      <td className="pt-6 pl-3 pr-4 text-sm text-right  ">
                        -0.00tk
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        colSpan="3"
                        className="hidd pt-6 pl-6 pr-3 text-sm font-light text-right  table-cell"
                      >
                        Total
                      </th>

                      <td className="pt-6 pl-3 pr-4 text-sm text-right  ">
                        0.00tk
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        colSpan="3"
                        className="hidd py-6 pl-6 pr-3 text-sm font-light text-right  table-cell"
                      >
                        Paid Amount
                      </th>

                      <td className="py-6 pl-3 pr-4 text-sm text-right  ">
                        -0.00tk
                      </td>
                    </tr>
                    <tr className="">
                      <th></th>
                      <th></th>
                      <th
                        scope="row"
                        className="py-3 pl-3 pr-4 text-sm text-right text-whiteHigh bg-primaryMainDarkest"
                      >
                        Due Amount
                      </th>

                      <td className="py-3 pl-3 pr-4 text-sm text-right text-whiteHigh bg-primaryMainDarkest">
                        0.00tk
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
            <div className="mt-16">
              <div>
                <h4 className="text-xs font-medium border-t border-primaryMainDarkest inline-block px-4 pt-1">
                  Signature
                </h4>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};
export default Invoice;
