import React, { useState, useEffect } from "react";
import Layout from "../../../components/layout";
import { getMentorData } from "../../../services/hodServices/mentorService";
import MentorTabsWrap from "./mentorTabs";

import Cookies from "js-cookie";
const Mentor = () => {
  const ProfileId = Cookies.get("employeeID");

  return (
    <React.Fragment>
      <Layout>
        <div className=" bg-white mt-8">
          <MentorTabsWrap profileId={ProfileId} />
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default Mentor;
