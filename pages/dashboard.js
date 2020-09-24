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
      icon: <FontAwesomeIcon icon={faColumns} size="2x" />,
    },
    {
      name: "Imports",
      url: "/imports",
      icon: <FontAwesomeIcon icon={faFileImport} size="2x" />,
    },
    {
      name: "Notifications",
      url: "/notifications",
      icon: <FontAwesomeIcon icon={faBell} size="2x" />,
    },
    {
      name: "Profile",
      url: "/profile",
      icon: <FontAwesomeIcon icon={faUser} size="2x" />,
    },
    {
      name: "Allocated Cources",
      url: "/allocated-cources/attendance",
      icon: <FontAwesomeIcon icon={faList} size="2x" />,
    },
    {
      name: "Cource Coordinator Allocation",
      url: "/cource-coordinator-allocation",
      icon: <FontAwesomeIcon icon={faIdBadge} size="2x" />,
    },
    {
      name: "Class Schedule",
      url: "/class-schedule",
      icon: <FontAwesomeIcon icon={faCalendar} size="2x" />,
    },
    {
      name: "Mentoring",
      url: "/dashboard",
      icon: <FontAwesomeIcon icon={faKeyboard} size="2x" />,
    },
    {
      name: "Exam Schedule",
      url: "/dashboard",
      icon: <FontAwesomeIcon icon={faCalendar} size="2x" />,
    },
    {
      name: "Reports",
      url: "/dashboard",
      icon: <FontAwesomeIcon icon={faChartBar} size="2x" />,
    },
    {
      name: "QueryForm",
      url: "/query-form",
      icon: <FontAwesomeIcon icon={faPhone} size="2x" />,
    },
    {
      name: "Skins",
      url: "/dashboard",
      icon: <FontAwesomeIcon icon={faTint} size="2x" />,
    },
  ];

  return (
    <React.Fragment>
      <Layout>
        <div>{/* <Attendance nonAttenData={nonAttenData?.datesData} /> */}</div>
        <div className="clearfix">
          {dashBoardLinks &&
            dashBoardLinks.map((item) => (
              <div className="w-3/12 float-left text-center relative">
                <Link href={item.url} key={item.name}>
                  <a className=" p-4 h-32 bg-white shadow  box-border block m-1 font-bold hover:shadow-2xl hover:text-green-400">
                    <span
                      css={css`
                        position: absolute;
                        display: block;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                      `}
                    >
                      {" "}
                      <span className="block">{item.icon}</span>
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
