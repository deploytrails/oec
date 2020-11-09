import React, { useState, useEffect } from "react";
import { css } from "@emotion/core";
import Layout from "../components/layout";
import Link from "next/link";
import Cookies from "js-cookie";
import Attendance from "../components/dashboards/attendance";
import { getNonPostedAttendance } from "../services/dashboardService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faColumns,
  faFileImport,
  faNotesMedical,
  faBook,
  faBell,
  faUser,
  faList,
  faIdBadge,
  faCalendar,
  faKeyboard,
  faChartBar,
  faPhone,
  faTint,
  faChevronCircleRight,
  faArrowRight,
  faChevronRight,
  faPeopleArrows,
  faHandPaper,
  faPaperclip,
  faNewspaper,
  faCertificate,
  faEdit,
  faGraduationCap,
  faCompressArrowsAlt,
  faExchangeAlt,
  faRegistered,
  faObjectGroup,
  faLayerGroup,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

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

  const dashBoardLinks = [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: <img src="/dash-icon-1.png" width="100" />,
    },
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
      name: "Allocated Cources",
      url: "/allocated-cources/attendance",
      icon: <img src="/dash-icon-5.png" width="100" />,
    },
    {
      name: "Cource Coordinator Allocation",
      url: "/cource-coordinator-allocation",
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
    {
      name: "QueryForm",
      url: "/query-form",
      icon: <img src="/dash-icon-10.png" width="100" />,
    },
    {
      name: "Skins",
      url: "/dashboard",
      icon: <img src="/dash-icon-1.png" width="100" />,
    },
  ];

  return (
    <React.Fragment>
      <Layout>
        <div>{/* <Attendance nonAttenData={nonAttenData?.datesData} /> */}</div>
        <div className="clearfix">
          {dashBoardLinks &&
            dashBoardLinks.map((item) => (
              <div className="w-4/12 float-left text-center relative">
                <Link href={item.url} key={item.name}>
                  <a className=" p-4 bg-white shadow  box-border block m-1 font-bold hover:shadow-2xl hover:text-green-400">
                    <span
                      css={css`
                        display: block;
                      `}
                    >
                      <span css={css`
                        display:block;
                        margin:0px auto;
                        width:100px;
                      `}>{item.icon}</span>
                      {item.name}
                    </span>
                   
                  </a>
                </Link>
              </div>
            ))}
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default Dashboard;
