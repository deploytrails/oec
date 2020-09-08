import React from "react";
import SideLogo from "./sideLogo";
import SideProfile from "./sideProfile";
import SideNavLinks from "./sideNavLinks";

const SideNav = () => {
  return (
    <React.Fragment>
      <SideLogo />
      <SideProfile />
      <SideNavLinks />
    </React.Fragment>
  );
};

export default SideNav;
