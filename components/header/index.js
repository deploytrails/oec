import React from "react";
import css from "@emotion/css";
import TopHeader from "./topHeader";
import PageTitle from "./pageTitle";

const Header = () => {
  return (
    <React.Fragment>
      <div className="block">
        <TopHeader />
        {/* <PageTitle /> */}
      </div>
    </React.Fragment>
  );
};

export default Header;
