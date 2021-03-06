import React, { useState } from "react";
import dynamic from "next/dynamic";
import { css } from "@emotion/core";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { COLORS } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const HodSideNavLinks = dynamic({
  loader: () => import("./hodSideNavLinks"),
  ssr: false,
});
const AdminSideNavLinks = dynamic({
  loader: () => import("./adminSideNavLinks"),
  ssr: false,
});
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

const SideNavLinks = () => {
  const router = useRouter();
  const [dropMenu, setDropMenu] = useState(false);
  const [menterMenu, setMenterMenu] = useState(false);
  const [examMenu, setExamMenu] = useState(false);
  const [reportsMenu, setReportsMenu] = useState(false);

  const toggleAlloCourceMenu = () => {
    setDropMenu(!dropMenu);
  };
  const togglementorMenu = () => {
    setMenterMenu(!menterMenu);
  };
  const toggleExamMenu = () => {
    setExamMenu(!examMenu);
  };
  const toggleReportsMenu = () => {
    setReportsMenu(!reportsMenu);
  };
  const storeRouteName = (routeName) => {
    Cookies.set("routeName", routeName);
  };
  const roleCheck = Cookies.get("roleFinder");
  return (
    <React.Fragment>
      {roleCheck !== "Admin" &&
        roleCheck !== "Student" &&
        roleCheck !== "Hod" &&
        roleCheck === "Faculty" && (
          <ul
            css={css`
              height: calc(100% - 190px);
              overflow-y: auto;
              overflow-x: hidden;
              padding: 10px 40px 10px 40px;
              color: ${COLORS.TEXTGRAY};
              & > li > a {
                padding: 8px 0px;
                display: block;

                border-bottom: 1px solid ${COLORS.DARKBORDER};
                font-size: 13px;
                &:hover {
                  color: ${COLORS.GREEN};
                }
              }
            `}
          >
            <li
              css={
                router.pathname === "/dashboard"
                  ? css`
                      color: ${COLORS.GREEN};
                    `
                  : css`
                      color: ${COLORS.TEXTGRAY};
                    `
              }
            >
              <Link href="/dashboard">
                <a onClick={() => storeRouteName("Dashboard")}>
                  <FontAwesomeIcon icon={faColumns} /> Dashboard
                </a>
              </Link>
            </li>

            <li
              css={
                router.pathname === "/imports"
                  ? css`
                      color: ${COLORS.GREEN};
                    `
                  : css`
                      color: ${COLORS.TEXTGRAY};
                    `
              }
            >
              <Link href="/imports">
                <a onClick={() => storeRouteName("Imports")}>
                  <FontAwesomeIcon icon={faFileImport} /> Imports
                </a>
              </Link>
            </li>

            <li
              css={
                router.pathname === "/notifications"
                  ? css`
                      color: ${COLORS.GREEN};
                    `
                  : css`
                      color: ${COLORS.TEXTGRAY};
                    `
              }
            >
              <Link href="/notifications">
                <a onClick={() => storeRouteName("Notifications")}>
                  <FontAwesomeIcon icon={faBell} /> Notifications
                </a>
              </Link>
            </li>

            <li
              css={
                router.pathname === "/profile"
                  ? css`
                      color: ${COLORS.GREEN};
                    `
                  : css`
                      color: ${COLORS.TEXTGRAY};
                    `
              }
            >
              <Link href="/profile">
                <a onClick={() => storeRouteName("Profile")}>
                  <FontAwesomeIcon icon={faUser} /> Profile
                </a>
              </Link>
            </li>

            <li
              css={
                router.pathname === "/allocated-coureces"
                  ? css`
                      color: ${COLORS.GREEN};
                    `
                  : css`
                      color: ${COLORS.TEXTGRAY};
                    `
              }
            >
              <a
                className="clearfix cursor-pointer"
                onClick={toggleAlloCourceMenu}
              >
                <FontAwesomeIcon icon={faList} /> Allocated Courses
                <span className="float-right">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    css={
                      dropMenu
                        ? css`
                            transform: rotate(90deg);
                            transition: all 0.1s ease-in-out;
                          `
                        : css`
                            transform: rotate(0deg);
                            transition: all 0.1s ease-in-out;
                          `
                    }
                  />
                </span>
              </a>
              {dropMenu && (
                <ul
                  className="ml-6 font-sans text-sm"
                  css={css`
                    & > li {
                      padding: 4px 0px;
                    }
                  `}
                >
                  <li
                    css={
                      router.pathname === "/allocated-cources/allocatedCourses"
                        ? css`
                            color: ${COLORS.GREEN};
                          `
                        : css`
                            color: ${COLORS.TEXTGRAY};
                          `
                    }
                  >
                    <Link href="/allocated-cources/allocatedCourses">
                      <a
                        onClick={() =>
                          storeRouteName(
                            "Allocated Courses / Allocated Courses"
                          )
                        }
                      >
                        <FontAwesomeIcon icon={faBook} /> Allocated Courses
                      </a>
                    </Link>
                  </li>
                  <li
                    css={
                      router.pathname === "/allocated-cources/attendance"
                        ? css`
                            color: ${COLORS.GREEN};
                          `
                        : css`
                            color: ${COLORS.TEXTGRAY};
                          `
                    }
                  >
                    <Link href="/allocated-cources/attendance">
                      <a
                        onClick={() =>
                          storeRouteName("Allocated Courses / Attendance")
                        }
                      >
                        <FontAwesomeIcon icon={faPeopleArrows} /> Attendance
                      </a>
                    </Link>
                  </li>
                  <li
                    css={
                      router.pathname === "/allocated-cources/marksEntry"
                        ? css`
                            color: ${COLORS.GREEN};
                          `
                        : css`
                            color: ${COLORS.TEXTGRAY};
                          `
                    }
                  >
                    <Link href="/allocated-cources/marksEntry">
                      <a
                        onClick={() =>
                          storeRouteName("Allocated Courses / Marks Entry")
                        }
                      >
                        <FontAwesomeIcon icon={faNewspaper} /> Mark Entry
                      </a>
                    </Link>
                  </li>
                  {/* <li>
                    <FontAwesomeIcon icon={faEdit} /> Assignment Creation
                  </li> */}
                </ul>
              )}
            </li>

            <li
              css={
                router.pathname === "/courseCoordinatorAllocation"
                  ? css`
                      color: ${COLORS.GREEN};
                    `
                  : css`
                      color: ${COLORS.TEXTGRAY};
                    `
              }
            >
              <Link href="/courseCoordinatorAllocation">
                <a onClick={() => storeRouteName("Course Coordinator")}>
                  <FontAwesomeIcon icon={faIdBadge} /> Course Coordinator
                  Allocation
                </a>
              </Link>
            </li>

            <li
              css={
                router.pathname === "/class-schedule"
                  ? css`
                      color: ${COLORS.GREEN};
                    `
                  : css`
                      color: ${COLORS.TEXTGRAY};
                    `
              }
            >
              <Link href="/class-schedule">
                <a onClick={() => storeRouteName("Class Schedule")}>
                  <FontAwesomeIcon icon={faCalendar} /> Class Schedule
                </a>
              </Link>
            </li>

            <li
              css={
                router.pathname === "/mentoring"
                  ? css`
                      color: ${COLORS.GREEN};
                    `
                  : css`
                      color: ${COLORS.TEXTGRAY};
                    `
              }
            >
              <a className="clearfix cursor-pointer" onClick={togglementorMenu}>
                <FontAwesomeIcon icon={faKeyboard} /> Mentoring
                <span className="float-right">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    css={
                      menterMenu
                        ? css`
                            transform: rotate(90deg);
                            transition: all 0.1s ease-in-out;
                          `
                        : css`
                            transform: rotate(0deg);
                            transition: all 0.1s ease-in-out;
                          `
                    }
                  />
                </span>
              </a>
              {menterMenu && (
                <ul
                  className="ml-6 font-sans text-sm"
                  css={css`
                    & > li {
                      padding: 4px 0px;
                    }
                  `}
                >
                  <li
                    css={
                      router.pathname === "/mentoring/assignedStudents"
                        ? css`
                            color: ${COLORS.GREEN};
                          `
                        : css`
                            color: ${COLORS.TEXTGRAY};
                          `
                    }
                  >
                    <Link href="/mentoring/assignedStudents">
                      <a
                        onClick={() =>
                          storeRouteName("Mentoring / Assigned Students")
                        }
                      >
                        <FontAwesomeIcon icon={faGraduationCap} /> Assigned
                        Students
                      </a>
                    </Link>
                  </li>
                  <li
                    css={
                      router.pathname === "/mentoring/discrepancy"
                        ? css`
                            color: ${COLORS.GREEN};
                          `
                        : css`
                            color: ${COLORS.TEXTGRAY};
                          `
                    }
                  >
                    <Link href="/mentoring/discrepancy">
                      <a
                        onClick={() =>
                          storeRouteName("Mentoring / Discrepancy")
                        }
                      >
                        <FontAwesomeIcon icon={faCompressArrowsAlt} />{" "}
                        Discrepancy
                      </a>
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li
              css={
                router.pathname === "/examSchedule"
                  ? css`
                      color: ${COLORS.GREEN};
                    `
                  : css`
                      color: ${COLORS.TEXTGRAY};
                    `
              }
            >
              <a className="clearfix cursor-pointer" onClick={toggleExamMenu}>
                <FontAwesomeIcon icon={faCalendar} /> Exam Schedule
                <span className="float-right">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    css={
                      examMenu
                        ? css`
                            transform: rotate(90deg);
                            transition: all 0.1s ease-in-out;
                          `
                        : css`
                            transform: rotate(0deg);
                            transition: all 0.1s ease-in-out;
                          `
                    }
                  />
                </span>
              </a>
              {examMenu && (
                <ul
                  className="ml-6 font-sans text-sm"
                  css={css`
                    & > li {
                      padding: 4px 0px;
                    }
                  `}
                >
                  <li
                    css={
                      router.pathname === "/examSchedule/examInvigilation"
                        ? css`
                            color: ${COLORS.GREEN};
                          `
                        : css`
                            color: ${COLORS.TEXTGRAY};
                          `
                    }
                  >
                    <Link href="/examSchedule/examInvigilation">
                      <a
                        onClick={() =>
                          storeRouteName("Exam Schedule / Exam Invigilation")
                        }
                      >
                        <FontAwesomeIcon icon={faExchangeAlt} /> Exam
                        Invigilation
                      </a>
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li
              css={
                router.pathname === "/reports"
                  ? css`
                      color: ${COLORS.GREEN};
                    `
                  : css`
                      color: ${COLORS.TEXTGRAY};
                    `
              }
            >
              <a
                className="clearfix cursor-pointer"
                onClick={toggleReportsMenu}
              >
                <FontAwesomeIcon icon={faChartBar} /> Reports
                <span className="float-right">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    css={
                      reportsMenu
                        ? css`
                            transform: rotate(90deg);
                            transition: all 0.1s ease-in-out;
                          `
                        : css`
                            transform: rotate(0deg);
                            transition: all 0.1s ease-in-out;
                          `
                    }
                  />
                </span>
              </a>
              {reportsMenu && (
                <ul
                  className="ml-6 font-sans text-sm"
                  css={css`
                    & > li {
                      padding: 4px 0px;
                    }
                  `}
                >
                  <li
                    css={
                      router.pathname === "/reports/courseRegister"
                        ? css`
                            color: ${COLORS.GREEN};
                          `
                        : css`
                            color: ${COLORS.TEXTGRAY};
                          `
                    }
                  >
                    <Link href="/reports/courseRegister">
                      <a
                        onClick={() =>
                          storeRouteName("Reports / Course Register")
                        }
                      >
                        <FontAwesomeIcon icon={faRegistered} /> Course Register
                      </a>
                    </Link>
                  </li>
                  <li
                    css={
                      router.pathname === "/reports/courseWiseAttendance"
                        ? css`
                            color: ${COLORS.GREEN};
                          `
                        : css`
                            color: ${COLORS.TEXTGRAY};
                          `
                    }
                  >
                    <Link href="/reports/courseWiseAttendance">
                      <a
                        onClick={() =>
                          storeRouteName("Reports / Course Wise Attendance")
                        }
                      >
                        <FontAwesomeIcon icon={faLayerGroup} /> Course Wise
                        Attendance
                      </a>
                    </Link>
                  </li>
                  <li
                    css={
                      router.pathname === "/reports/dayWiseAttendance"
                        ? css`
                            color: ${COLORS.GREEN};
                          `
                        : css`
                            color: ${COLORS.TEXTGRAY};
                          `
                    }
                  >
                    <Link href="/reports/dayWiseAttendance">
                      <a
                        onClick={() =>
                          storeRouteName("Reports / Day Wise Attendance")
                        }
                      >
                        <FontAwesomeIcon icon={faAddressCard} /> Day Wise
                        Attendance
                      </a>
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* <li
              css={
                router.pathname === "/query-form"
                  ? css`
                      color: ${COLORS.GREEN};
                    `
                  : css`
                      color: ${COLORS.TEXTGRAY};
                    `
              }
            >
              <Link href="/query-form">
                <a>
                  <FontAwesomeIcon icon={faPhone} /> Query Form
                </a>
              </Link>
            </li>

            <li
              css={
                router.pathname === "/skins"
                  ? css`
                      color: ${COLORS.GREEN};
                    `
                  : css`
                      color: ${COLORS.TEXTGRAY};
                    `
              }
            >
              <Link href="/skins">
                <a>
                  <FontAwesomeIcon icon={faTint} /> Skins
                </a>
              </Link>
            </li> */}
          </ul>
        )}

      {roleCheck !== "Student" &&
        roleCheck !== "Faculty" &&
        roleCheck !== "Hod" &&
        roleCheck === "Admin" && <AdminSideNavLinks />}

      {roleCheck !== "Student" &&
        roleCheck !== "Faculty" &&
        roleCheck !== "Admin" &&
        roleCheck === "HOD" && <HodSideNavLinks />}

      {roleCheck === "Student" &&
        roleCheck !== "Faculty" &&
        roleCheck !== "Admin" &&
        roleCheck !== "HOD" && <p className="text-white">Student Navigation</p>}
    </React.Fragment>
  );
};

export default SideNavLinks;
