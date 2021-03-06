import React, { useState, useEffect } from "react";
import { css } from "@emotion/core";
import dynamic from "next/dynamic";
import Layout from "../components/layout";
import Link from "next/link";
import Cookies from "js-cookie";
import Attendance from "../components/dashboards/attendance";
import { getNonPostedAttendance } from "../services/dashboardService";
import { useRouter } from "next/router";

const DynAdminDashboard = dynamic({
  loader: () => import("./admin-dashboard"),
  ssr: false,
});
const DynHodDashboard = dynamic({
  loader: () => import("./hod-dashboard"),
  ssr: false,
});
const DynStuDashboard = dynamic({
  loader: () => import("./student-dashboard"),
  ssr: false,
});

const Dashboard = () => {
  const [nonAttenData, setNonAttenData] = useState([]);
  const facultyId = Cookies.get("employeeID");
  const roleCheck = Cookies.get("roleFinder");
  Cookies.set("routeName", "Dashboard");

  const getNonPostAtten = async () => {
    const data = await getNonPostedAttendance(facultyId);
    setNonAttenData(data);
  };

  useEffect(() => {
    //  getNonPostAtten();
  }, []);

  const storeRouteName = (routeName) => {
    Cookies.set("routeName", routeName);
  };
  const dashBoardLinks = [
    // {
    //   name: "Dashboard",
    //   url: "/dashboard",
    //   icon: <img src="/dash-icon-1.png" width="100" />,
    // },
    {
      name: "Imports",
      url: "/imports",
      icon: <img src="/dash-icon-2.png" width="100" />,
    },
    {
      name: "Notifications",
      url: "/notifications",
      icon: <img src="/dash-icon-3.png" width="100" />,
    },
    {
      name: "Profile",
      url: "/profile",
      icon: <img src="/dash-icon-4.png" width="100" />,
    },
    {
      name: "Allocated Courses", //TBD path change
      url: "/allocated-cources/attendance",
      icon: <img src="/dash-icon-5.png" width="100" />,
    },
    {
      name: "Course Coordinator Allocation",
      url: "/courseCoordinatorAllocation",
      icon: <img src="/dash-icon-6.png" width="100" />,
    },
    {
      name: "Class Schedule",
      url: "/class-schedule",
      icon: <img src="/dash-icon-7.png" width="100" />,
    },
    {
      name: "Mentoring",
      url: "/dashboard",
      icon: <img src="/dash-icon-2.png" width="100" />,
    },
    {
      name: "Exam Schedule",
      url: "/dashboard",
      icon: <img src="/dash-icon-8.png" width="100" />,
    },
    {
      name: "Reports",
      url: "/dashboard",
      icon: <img src="/dash-icon-9.png" width="100" />,
    },
    // {
    //   name: "QueryForm",
    //   url: "/query-form",
    //   icon: <img src="/dash-icon-10.png" width="100" />,
    // },
    // {
    //   name: "Skins",
    //   url: "/dashboard",
    //   icon: <img src="/dash-icon-1.png" width="100" />,
    // },
  ];

  const hoddashBoardLinks = [
    // {
    //   name: "Dashboard",
    //   url: "/dashboard",
    //   icon: <img src="/dash-icon-1.png" width="100" />,
    // },
    {
      name: "Imports",
      url: "/hodPages/Imports",
      icon: <img src="/dash-icon-2.png" width="100" />,
    },
    {
      name: "Staff",
      url: "/hodPages/staff",
      icon: <img src="/dash-icon-3.png" width="100" />,
    },
    {
      name: "Student Enroll Details",
      url: "/hodPages/studentEnrollDetails",
      icon: <img src="/dash-icon-4.png" width="100" />,
    },
    {
      name: "Allocate Courses",
      url: "/hodPages/allocateCourses",
      icon: <img src="/dash-icon-5.png" width="100" />,
    },
    {
      name: "Course Coordinator Allocation",
      url: "/hodPages/courseCoordinatorAllocation",
      icon: <img src="/dash-icon-6.png" width="100" />,
    },
    {
      name: "Reports",
      url: "/",
      icon: <img src="/dash-icon-7.png" width="100" />,
    },
    {
      name: "Class Schedules",
      url: "/",
      icon: <img src="/dash-icon-2.png" width="100" />,
    },
    {
      name: "Po Mapping",
      url: "/",
      icon: <img src="/dash-icon-8.png" width="100" />,
    },
    {
      name: "Swap Classes",
      url: "/hodPages/swapClass/swapWrapper",
      icon: <img src="/dash-icon-9.png" width="100" />,
    },
    {
      name: "Mentor",
      url: "/hodPages/Mentors/mentor",
      icon: <img src="/dash-icon-10.png" width="100" />,
    },
    {
      name: "Feedback Details",
      url: "/hodPages/feedbackDetails/feedbackDetails",
      icon: <img src="/dash-icon-1.png" width="100" />,
    },
    {
      name: "Assign Group",
      url: "/hodPages/assignGroup",
      icon: <img src="/dash-icon-1.png" width="100" />,
    },
    {
      name: "List of Faculty Courses",
      url: "/hodPages/facultyCoursesList",
      icon: <img src="/dash-icon-1.png" width="100" />,
    },

    {
      name: "Faculty Data Download",
      url: "/hodPages/facultyDataDownload",
      icon: <img src="/dash-icon-1.png" width="100" />,
    },
    {
      name: "Assign Electives",
      url: "/hodPages/assignElectives",
      icon: <img src="/dash-icon-1.png" width="100" />,
    },
  ];

  const admindashBoardLinks = [
    // {
    //   name: "Dashboard",
    //   url: "/dashboard",
    //   icon: <img src="/dash-icon-1.png" width="100" />,
    // },
    {
      name: "Imports",
      url: "/adminPages/imports",
      icon: <img src="/dash-icon-2.png" width="100" />,
    },
    {
      name: "Attendance",
      url: "/adminPages/attendance",
      icon: <img src="/dash-icon-3.png" width="100" />,
    },

    {
      name: "Setup",
      url: "/",
      icon: <img src="/dash-icon-2.png" width="100" />,
    },
    {
      name: "Students",
      url: "/adminPages/students",
      icon: <img src="/dash-icon-8.png" width="100" />,
    },
    {
      name: "Faculty",
      url: "/adminPages/faculty",
      icon: <img src="/dash-icon-9.png" width="100" />,
    },
    {
      name: "TimeTable",
      url: "/adminPages/timeTable",
      icon: <img src="/dash-icon-10.png" width="100" />,
    },
    {
      name: "Semester Sections",
      url: "/adminPages/semSections",
      icon: <img src="/dash-icon-1.png" width="100" />,
    },
    {
      name: "Faculty Subject Experience",
      url: "/adminPages/facSubExp",
      icon: <img src="/dash-icon-1.png" width="100" />,
    },
    {
      name: "Reports",
      url: "/",
      icon: <img src="/dash-icon-1.png" width="100" />,
    },

    {
      name: "Graphs",
      url: "/",
      icon: <img src="/dash-icon-1.png" width="100" />,
    },
  ];

  return (
    <React.Fragment>
      <Layout>
        <div>{/* <Attendance nonAttenData={nonAttenData?.datesData} /> */}</div>

        {roleCheck !== "Admin" &&
          roleCheck !== "Student" &&
          roleCheck !== "Hod" &&
          roleCheck === "Faculty" && (
            <div className="clearfix">
              {dashBoardLinks &&
                dashBoardLinks.map((item) => (
                  <div
                    className="w-4/12 float-left text-center relative"
                    onClick={() => storeRouteName(item.name)}
                  >
                    <Link href={item.url} key={item.name}>
                      <a className=" p-4 bg-white shadow  box-border block m-1 font-bold hover:shadow-2xl hover:text-green-400">
                        <span
                          css={css`
                            display: block;
                          `}
                        >
                          <span
                            css={css`
                              display: block;
                              margin: 0px auto;
                              width: 100px;
                            `}
                          >
                            {item.icon}
                          </span>
                          {item.name}
                        </span>
                      </a>
                    </Link>
                  </div>
                ))}
            </div>
          )}

        {roleCheck !== "Student" &&
          roleCheck !== "Faculty" &&
          roleCheck !== "Hod" &&
          roleCheck === "Admin" && (
            <DynAdminDashboard
              dashBoardLinks={admindashBoardLinks}
              storeRoute={storeRouteName}
            />
          )}

        {roleCheck !== "Student" &&
          roleCheck !== "Faculty" &&
          roleCheck !== "Admin" &&
          roleCheck === "HOD" && (
            <DynHodDashboard
              dashBoardLinks={hoddashBoardLinks}
              storeRoute={storeRouteName}
            />
          )}

        {roleCheck === "Student" &&
          roleCheck !== "Faculty" &&
          roleCheck !== "Admin" &&
          roleCheck !== "HOD" && <DynStuDashboard />}
      </Layout>
    </React.Fragment>
  );
};

export default Dashboard;
