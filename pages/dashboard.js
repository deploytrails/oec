import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import Cookies from "js-cookie";
import Attendance from "../components/dashboards/attendance";
import { getNonPostedAttendance } from "../services/dashboardService";

const Dashboard = () => {
  const [nonAttenData, setNonAttenData] = useState([]);
  const facultyId = Cookies.get("employeeID");

  const getNonPostAtten = async () => {
    const data = await getNonPostedAttendance(facultyId);
    setNonAttenData(data);
  };

  useEffect(() => {
    getNonPostAtten();
  }, []);

  return (
    <React.Fragment>
      <Layout>
        <div>
          <Attendance nonAttenData={nonAttenData?.datesData} />
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default Dashboard;
