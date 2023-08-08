import React from "react";
import { noData } from "../../../assets/getAssets";

function NoData() {
  return (
    <div className="w-full py-10 bg-whiteHigh shadow-sm rounded-b-lg">
      <div>
        <img src={noData} alt="" />
      </div>
    </div>
  );
}

export default NoData;
