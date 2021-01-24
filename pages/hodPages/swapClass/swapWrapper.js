import React, { useState } from "react";
import Layout from "../../../components/layout";
import PrevSwap from "./prevSwap";
import SwapClasses from "./swapClasses";

const SwapWrapper = () => {
  const [isNavigatePage, setIsNavigatePage] = useState(false);
  const navigatePages = () => {
    setIsNavigatePage(!isNavigatePage);
  };
  return (
    <React.Fragment>
      <Layout>
        <div className="grid grid-rows-1 grid-flow-col gap-4">
          <div>
            <h1 className="text-2xl font-bold leading-tight text-gray-900">
              Time Table Swap Requests
            </h1>
          </div>
          <div>
            <button
              className=" float-right bg-blue-400 block  mx-auto px-2 py-1 rounded"
              onClick={() => navigatePages()}
            >
              {isNavigatePage === false
                ? "Click Here For All Swap Records"
                : "Click Here For, Requests Waiting For Approval"}
            </button>
          </div>
        </div>
        {isNavigatePage ? <PrevSwap /> : <SwapClasses />}
      </Layout>
    </React.Fragment>
  );
};

export default SwapWrapper;
