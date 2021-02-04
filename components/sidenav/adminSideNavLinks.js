import React, { useState } from "react";
import { css } from "@emotion/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { COLORS } from "../../constants";
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
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";

const AdminSideNavLinks = () => {
  const router = useRouter();
  const [dropMenu, setDropMenu] = useState(false);
  const [setupMenu, setSetupMenu] = useState(false);
  const [reportsMenu, setReportsMenu] = useState(false);

  const toggleAlloCourceMenu = () => {
    setDropMenu(!dropMenu);
  };
  const toggleSetup = () => {
    setSetupMenu(!setupMenu);
  };
  const toggleReportsMenu = () => {
    setReportsMenu(!reportsMenu);
  };

  return (
    <React.Fragment>
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
            <a>
              <FontAwesomeIcon icon={faColumns} /> Dashboard
            </a>
          </Link>
        </li>

        <li
          css={
            router.pathname === "/adminPages/imports"
              ? css`
                  color: ${COLORS.GREEN};
                `
              : css`
                  color: ${COLORS.TEXTGRAY};
                `
          }
        >
          <Link href="/adminPages/imports">
            <a>
              <FontAwesomeIcon icon={faFileImport} /> Imports
            </a>
          </Link>
        </li>

        <li
          css={
            router.pathname === "/adminPages/attendance"
              ? css`
                  color: ${COLORS.GREEN};
                `
              : css`
                  color: ${COLORS.TEXTGRAY};
                `
          }
        >
          <Link href="/adminPages/attendance">
            <a>
              <FontAwesomeIcon icon={faBell} /> Attendance
            </a>
          </Link>
        </li>

        <li
          css={
            router.pathname === "/adminPages/setup"
              ? css`
                  color: ${COLORS.GREEN};
                `
              : css`
                  color: ${COLORS.TEXTGRAY};
                `
          }
        >
          <a className="clearfix cursor-pointer" onClick={toggleSetup}>
            <FontAwesomeIcon icon={faChartBar} /> Setup
            <span className="float-right">
              <FontAwesomeIcon
                icon={faChevronRight}
                css={
                  setupMenu
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
          {setupMenu && (
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
                  router.pathname === "/adminPages/setup/academicYear"
                    ? css`
                        color: ${COLORS.GREEN};
                      `
                    : css`
                        color: ${COLORS.TEXTGRAY};
                      `
                }
              >
                <Link href="/adminPages/setup/academicYear">
                  <a>
                    <FontAwesomeIcon icon={faBook} /> Academic Year
                  </a>
                </Link>
              </li>
              <li
                css={
                  router.pathname === "/adminPages/setup/defineDegree"
                    ? css`
                        color: ${COLORS.GREEN};
                      `
                    : css`
                        color: ${COLORS.TEXTGRAY};
                      `
                }
              >
                <Link href="/adminPages/setup/defineDegree">
                  <a>
                    <FontAwesomeIcon icon={faBook} /> Define Degree
                  </a>
                </Link>
              </li>
              <li
                css={
                  router.pathname === "/adminPages/setup/definePrograms"
                    ? css`
                        color: ${COLORS.GREEN};
                      `
                    : css`
                        color: ${COLORS.TEXTGRAY};
                      `
                }
              >
                <Link href="/adminPages/setup/definePrograms">
                  <a>
                    <FontAwesomeIcon icon={faBook} /> Define Programs
                  </a>
                </Link>
              </li>
              <li
                css={
                  router.pathname === "/adminPages/setup/defineCourses"
                    ? css`
                        color: ${COLORS.GREEN};
                      `
                    : css`
                        color: ${COLORS.TEXTGRAY};
                      `
                }
              >
                <Link href="/adminPages/setup/defineCourses">
                  <a>
                    <FontAwesomeIcon icon={faBook} /> Define Courses
                  </a>
                </Link>
              </li>
              <li
                css={
                  router.pathname === "/adminPages/setup/buildingOrBlocks"
                    ? css`
                        color: ${COLORS.GREEN};
                      `
                    : css`
                        color: ${COLORS.TEXTGRAY};
                      `
                }
              >
                <Link href="/adminPages/setup/buildingOrBlocks">
                  <a>
                    <FontAwesomeIcon icon={faBook} /> Building/Blocks
                  </a>
                </Link>
              </li>
              <li
                css={
                  router.pathname === "/adminPages/setup/defineRooms"
                    ? css`
                        color: ${COLORS.GREEN};
                      `
                    : css`
                        color: ${COLORS.TEXTGRAY};
                      `
                }
              >
                <Link href="/adminPages/setup/defineRooms">
                  <a>
                    <FontAwesomeIcon icon={faBook} /> Define Rooms
                  </a>
                </Link>
              </li>
              <li
                css={
                  router.pathname === "/adminPages/setup/createSemesters"
                    ? css`
                        color: ${COLORS.GREEN};
                      `
                    : css`
                        color: ${COLORS.TEXTGRAY};
                      `
                }
              >
                <Link href="/adminPages/setup/createSemesters">
                  <a>
                    <FontAwesomeIcon icon={faBook} /> Create Semesters
                  </a>
                </Link>
              </li>
              <li
                css={
                  router.pathname === "/adminPages/setup/defineSemesterCourses"
                    ? css`
                        color: ${COLORS.GREEN};
                      `
                    : css`
                        color: ${COLORS.TEXTGRAY};
                      `
                }
              >
                <Link href="/adminPages/setup/defineSemesterCourses">
                  <a>
                    <FontAwesomeIcon icon={faBook} /> Define Semester Courses
                  </a>
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li
          css={
            router.pathname === "/adminPages/students"
              ? css`
                  color: ${COLORS.GREEN};
                `
              : css`
                  color: ${COLORS.TEXTGRAY};
                `
          }
        >
          <Link href="/adminPages/students">
            <a>
              <FontAwesomeIcon icon={faIdBadge} /> Students
            </a>
          </Link>
        </li>

        <li
          css={
            router.pathname === "/adminPages/faculty"
              ? css`
                  color: ${COLORS.GREEN};
                `
              : css`
                  color: ${COLORS.TEXTGRAY};
                `
          }
        >
          <Link href="/adminPages/faculty">
            <a>
              <FontAwesomeIcon icon={faIdBadge} /> Faculty
            </a>
          </Link>
        </li>

        <li
          css={
            router.pathname === "/adminPages/timeTable"
              ? css`
                  color: ${COLORS.GREEN};
                `
              : css`
                  color: ${COLORS.TEXTGRAY};
                `
          }
        >
          <Link href="/adminPages/timeTable">
            <a>
              <FontAwesomeIcon icon={faIdBadge} /> Time Table
            </a>
          </Link>
        </li>

        <li
          css={
            router.pathname === "/adminPages/semSections"
              ? css`
                  color: ${COLORS.GREEN};
                `
              : css`
                  color: ${COLORS.TEXTGRAY};
                `
          }
        >
          <Link href="/adminPages/semSections">
            <a>
              <FontAwesomeIcon icon={faCalendar} /> Semester Sections
            </a>
          </Link>
        </li>

        <li
          css={
            router.pathname === "/adminPages/facSubExp"
              ? css`
                  color: ${COLORS.GREEN};
                `
              : css`
                  color: ${COLORS.TEXTGRAY};
                `
          }
        >
          <Link href="/adminPages/facSubExp">
            <a>
              <FontAwesomeIcon icon={faPhone} /> Faculty Subject Experience
            </a>
          </Link>
        </li>
        <li
          css={
            router.pathname === "/adminPages/reports"
              ? css`
                  color: ${COLORS.GREEN};
                `
              : css`
                  color: ${COLORS.TEXTGRAY};
                `
          }
        >
          <a className="clearfix cursor-pointer" onClick={toggleReportsMenu}>
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
                  router.pathname === "/adminPages/reports/nonPostedData"
                    ? css`
                        color: ${COLORS.GREEN};
                      `
                    : css`
                        color: ${COLORS.TEXTGRAY};
                      `
                }
              >
                <Link href="/adminPages/reports/nonPostedData">
                  <a>
                    <FontAwesomeIcon icon={faBook} /> Non Posted Attendance List
                  </a>
                </Link>
              </li>
              <li
                css={
                  router.pathname === "/adminPages/reports/studentDetails"
                    ? css`
                        color: ${COLORS.GREEN};
                      `
                    : css`
                        color: ${COLORS.TEXTGRAY};
                      `
                }
              >
                <Link href="/adminPages/reports/studentDetails">
                  <a>
                    <FontAwesomeIcon icon={faBook} /> Student Details
                  </a>
                </Link>
              </li>
              <li
                css={
                  router.pathname ===
                  "/adminPages/reports/subjectWiseAttendance"
                    ? css`
                        color: ${COLORS.GREEN};
                      `
                    : css`
                        color: ${COLORS.TEXTGRAY};
                      `
                }
              >
                <Link href="/adminPages/reports/subjectWiseAttendance">
                  <a>
                    <FontAwesomeIcon icon={faBook} /> Subject Wise Attendance
                  </a>
                </Link>
              </li>
              <li
                css={
                  router.pathname ===
                  "/adminPages/reports/studentWiseAttendance"
                    ? css`
                        color: ${COLORS.GREEN};
                      `
                    : css`
                        color: ${COLORS.TEXTGRAY};
                      `
                }
              >
                <Link href="/adminPages/reports/studentWiseAttendance">
                  <a>
                    <FontAwesomeIcon icon={faBook} /> Student Wise Attendance
                  </a>
                </Link>
              </li>
              <li
                css={
                  router.pathname === "/adminPages/reports/facultyAttendance"
                    ? css`
                        color: ${COLORS.GREEN};
                      `
                    : css`
                        color: ${COLORS.TEXTGRAY};
                      `
                }
              >
                <Link href="/adminPages/reports/facultyAttendance">
                  <a>
                    <FontAwesomeIcon icon={faBook} /> Faculty Attendance
                  </a>
                </Link>
              </li>
              <li
                css={
                  router.pathname === "/adminPages/reports/courseDetails"
                    ? css`
                        color: ${COLORS.GREEN};
                      `
                    : css`
                        color: ${COLORS.TEXTGRAY};
                      `
                }
              >
                <Link href="/adminPages/reports/courseDetails">
                  <a>
                    <FontAwesomeIcon icon={faBook} /> Course Details Courses
                  </a>
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li
          css={
            router.pathname === "/adminPages/graphs"
              ? css`
                  color: ${COLORS.GREEN};
                `
              : css`
                  color: ${COLORS.TEXTGRAY};
                `
          }
        >
          <a className="clearfix cursor-pointer" onClick={toggleAlloCourceMenu}>
            <FontAwesomeIcon icon={faCalendarAlt} /> Graphs
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
                  router.pathname === "/adminPages/graphs/intakeGraph"
                    ? css`
                        color: ${COLORS.GREEN};
                      `
                    : css`
                        color: ${COLORS.TEXTGRAY};
                      `
                }
              >
                <Link href="/adminPages/graphs/intakeGraph">
                  <a>
                    <FontAwesomeIcon icon={faBook} /> Intake Graphs
                  </a>
                </Link>
              </li>
              <li
                css={
                  router.pathname === "/adminPages/graphs/enrollmentGraph"
                    ? css`
                        color: ${COLORS.GREEN};
                      `
                    : css`
                        color: ${COLORS.TEXTGRAY};
                      `
                }
              >
                <Link href="/adminPages/graphs/enrollmentGraph">
                  <a>
                    <FontAwesomeIcon icon={faPeopleArrows} /> Enrollment Graph
                  </a>
                </Link>
              </li>
              <li
                css={
                  router.pathname === "/adminPages/graphs/marksGraph"
                    ? css`
                        color: ${COLORS.GREEN};
                      `
                    : css`
                        color: ${COLORS.TEXTGRAY};
                      `
                }
              >
                <Link href="/adminPages/graphs/marksGraph">
                  <a>
                    <FontAwesomeIcon icon={faPeopleArrows} /> Marks Graph
                  </a>
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </React.Fragment>
  );
};

export default AdminSideNavLinks;
