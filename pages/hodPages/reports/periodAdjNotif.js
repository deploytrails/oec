import React, { useState,useEffect } from "react";
import Layout from "../../../components/layout";
import css from "@emotion/css";
import Cookies from "js-cookie";
import { COLORS } from "../../../constants";
import { getFacultyData } from "../../../services/reportsService";

const PeriodAdjNotif = () => {
  const deptId=Cookies.get("departId");
  const handleDownloadAdjustmentNotificationReport=(e)=>{
    window.open("http://15.206.189.30:8081/faculty/getAdjustmentNotificationReport?departmentID=" + deptId);     
  }
  return (
    <React.Fragment>
      <Layout>
        <div>Period Adjustment Notification Report</div>
        <button
              type="button"
              className="bg-green-400 block  mx-auto px-2 py-1 rounded mb-2"
              onClick={(event) => handleDownloadAdjustmentNotificationReport(event)}
            >
              Download  Period Adjustment Notification Report
                                  </button>
      </Layout>
    </React.Fragment>
  );
};

export default PeriodAdjNotif;
