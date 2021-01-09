import React, { useState, useEffect } from "react";
import Layout from "../../../components/layout";
import { getMentorData } from "../../../services/hodServices/mentorService";
import MentorTabsWrap from "./mentorTabs";

import Cookies from "js-cookie";
const Mentor = () => {
  const ProfileId = Cookies.get("employeeID");

  useEffect(() => {
    // getMentorList();
  }, []);

  // const getMentorList = async () => {
  //   const cData = await getMentorData(ProfileId);
  //   console.log(cData);
  //   setIsMentorsData(cData?.MentorsDetailList);
  // };
  return (
    <React.Fragment>
      <Layout>
        {/* <div>HOD Mentor Component</div> */}
        <div className=" bg-white mt-8">
          <MentorTabsWrap profileId={ProfileId} />
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default Mentor;
