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
} from "@fortawesome/free-solid-svg-icons";

const HodSideNavLinks = () => {
  const router = useRouter();
  const [dropMenu, setDropMenu] = useState(false);
  const [poMenu, setPoMenu] = useState(false);
  const [reportsMenu, setReportsMenu] = useState(false);

  const toggleAlloCourceMenu = () => {
    setDropMenu(!dropMenu);
  };
  const togglePoMenu = () => {
    setPoMenu(!poMenu);
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
            <a>
              <FontAwesomeIcon icon={faFileImport} /> Imports
            </a>
          </Link>
        </li>

        <li
          css={
            router.pathname === "/hodPages/staff"
              ? css`
                  color: ${COLORS.GREEN};
                `
              : css`
                  color: ${COLORS.TEXTGRAY};
                `
          }
        >
          <Link href="/hodPages/staff">
            <a>
              <FontAwesomeIcon icon={faBell} /> Staff
            </a>
          </Link>
        </li>

        <li
          css={
            router.pathname === "/hodPages/studentEnrollDetails"
              ? css`
                  color: ${COLORS.GREEN};
                `
              : css`
                  color: ${COLORS.TEXTGRAY};
                `
          }
        >
          <Link href="/hodPages/studentEnrollDetails">
            <a>
              <FontAwesomeIcon icon={faUser} /> Student Enroll Details
            </a>
          </Link>
        </li>
        <li
          css={
            router.pathname === "/hodPages/allocateCourses"
              ? css`
                  color: ${COLORS.GREEN};
                `
              : css`
                  color: ${COLORS.TEXTGRAY};
                `
          }
        >
          <Link href="/hodPages/allocateCourses">
            <a>
              <FontAwesomeIcon icon={faUser} /> Allocate Courses
            </a>
          </Link>
        </li>
        <li
          css={
            router.pathname === "/hodPages/courseCoordinatorAllocation"
              ? css`
                  color: ${COLORS.GREEN};
                `
              : css`
                  color: ${COLORS.TEXTGRAY};
                `
          }
        >
          <Link href="/hodPages/courseCoordinatorAllocation">
            <a>
              <FontAwesomeIcon icon={faUser} /> Course Coordinator Allocation
            </a>
          </Link>
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
                  router.pathname === "/hodPages/reports/nonPostedData"
                    ? css`
                        color: ${COLORS.GREEN};
                      `
                    : css`
                        color: ${COLORS.TEXTGRAY};
                      `
                }
              >
                <Link href="/hodPages/reports/nonPostedData">
                  <a>
                    <FontAwesomeIcon icon={faBook} /> NonPosted Data
                  </a>
                </Link>
              </li>
              <li
                css={
                  router.pathname === "/hodPages/reports/facWiseCouReg"
                    ? css`
                        color: ${COLORS.GREEN};
                      `
                    : css`
                        color: ${COLORS.TEXTGRAY};
                      `
                }
              >
                <Link href="/hodPages/reports/facWiseCouReg">
                  <a>
                    <FontAwesomeIcon icon={faBook} /> Faculty Wise Course
                    Register
                  </a>
                </Link>
              </li>
              <li
                css={
                  router.pathname === "/hodPages/reports/couWiseAtt"
                    ? css`
                        color: ${COLORS.GREEN};
                      `
                    : css`
                        color: ${COLORS.TEXTGRAY};
                      `
                }
              >
                <Link href="/hodPages/reports/couWiseAtt">
                  <a>
                    <FontAwesomeIcon icon={faBook} /> Course Wise Attendance
                  </a>
                </Link>
              </li>
              <li
                css={
                  router.pathname === "/hodPages/reports/dayWiseAtt"
                    ? css`
                        color: ${COLORS.GREEN};
                      `
                    : css`
                        color: ${COLORS.TEXTGRAY};
                      `
                }
              >
                <Link href="/hodPages/reports/dayWiseAtt">
                  <a>
                    <FontAwesomeIcon icon={faBook} /> Day Wise Attendance
                  </a>
                </Link>
              </li>
              <li
                css={
                  router.pathname === "/hodPages/reports/facHandlingCourses"
                    ? css`
                        color: ${COLORS.GREEN};
                      `
                    : css`
                        color: ${COLORS.TEXTGRAY};
                      `
                }
              >
                <Link href="/hodPages/reports/facHandlingCourses">
                  <a>
                    <FontAwesomeIcon icon={faBook} /> Faculty Handling Courses
                  </a>
                </Link>
              </li>
              <li
                css={
                  router.pathname === "/hodPages/reports/coordHandlingCou"
                    ? css`
                        color: ${COLORS.GREEN};
                      `
                    : css`
                        color: ${COLORS.TEXTGRAY};
                      `
                }
              >
                <Link href="/hodPages/reports/coordHandlingCou">
                  <a>
                    <FontAwesomeIcon icon={faBook} /> Coordinator Handling
                    Courses
                  </a>
                </Link>
              </li>
              <li
                css={
                  router.pathname === "/hodPages/reports/tentLectSch"
                    ? css`
                        color: ${COLORS.GREEN};
                      `
                    : css`
                        color: ${COLORS.TEXTGRAY};
                      `
                }
              >
                <Link href="/hodPages/reports/tentLectSch">
                  <a>
                    <FontAwesomeIcon icon={faBook} /> Tentative Lecture Schedule
                  </a>
                </Link>
              </li>
              <li
                css={
                  router.pathname === "/hodPages/reports/periodAdjNotif"
                    ? css`
                        color: ${COLORS.GREEN};
                      `
                    : css`
                        color: ${COLORS.TEXTGRAY};
                      `
                }
              >
                <Link href="/hodPages/reports/periodAdjNotif">
                  <a>
                    <FontAwesomeIcon icon={faBook} /> Period Adjustment
                    Notification
                  </a>
                </Link>
              </li>
              <li
                css={
                  router.pathname === "/hodPages/reports/facTimeTable"
                    ? css`
                        color: ${COLORS.GREEN};
                      `
                    : css`
                        color: ${COLORS.TEXTGRAY};
                      `
                }
              >
                <Link href="/hodPages/reports/facTimeTable">
                  <a>
                    <FontAwesomeIcon icon={faBook} /> Faculty Time Table
                  </a>
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li
          css={
            router.pathname === "/classSchedule"
              ? css`
                  color: ${COLORS.GREEN};
                `
              : css`
                  color: ${COLORS.TEXTGRAY};
                `
          }
        >
          <a className="clearfix cursor-pointer" onClick={toggleAlloCourceMenu}>
            <FontAwesomeIcon icon={faList} /> Class Schedule
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
                  router.pathname === "/hodPages/classSchedule/myClasSchedules"
                    ? css`
                        color: ${COLORS.GREEN};
                      `
                    : css`
                        color: ${COLORS.TEXTGRAY};
                      `
                }
              >
                <Link href="/hodPages/classSchedule/myClasSchedules">
                  <a>
                    <FontAwesomeIcon icon={faBook} /> My Class Schedules
                  </a>
                </Link>
              </li>
              <li
                css={
                  router.pathname === "/hodPages/classSchedule/viewTimeTable"
                    ? css`
                        color: ${COLORS.GREEN};
                      `
                    : css`
                        color: ${COLORS.TEXTGRAY};
                      `
                }
              >
                <Link href="/hodPages/classSchedule/viewTimeTable">
                  <a>
                    <FontAwesomeIcon icon={faPeopleArrows} /> View TimeTable
                  </a>
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li
          css={
            router.pathname === "/poMapping"
              ? css`
                  color: ${COLORS.GREEN};
                `
              : css`
                  color: ${COLORS.TEXTGRAY};
                `
          }
        >
          <a className="clearfix cursor-pointer" onClick={togglePoMenu}>
            <FontAwesomeIcon icon={faKeyboard} /> PO Mapping
            <span className="float-right">
              <FontAwesomeIcon
                icon={faChevronRight}
                css={
                  poMenu
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
          {poMenu && (
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
                  router.pathname === "/hodPages/poMapping/visMisStatement"
                    ? css`
                        color: ${COLORS.GREEN};
                      `
                    : css`
                        color: ${COLORS.TEXTGRAY};
                      `
                }
              >
                <Link href="/hodPages/poMapping/visMisStatement">
                  <a>
                    <FontAwesomeIcon icon={faGraduationCap} /> Vision/Mission
                    Statement
                  </a>
                </Link>
              </li>
              <li
                css={
                  router.pathname === "/hodPages/poMapping/progEduObjectives"
                    ? css`
                        color: ${COLORS.GREEN};
                      `
                    : css`
                        color: ${COLORS.TEXTGRAY};
                      `
                }
              >
                <Link href="/hodPages/poMapping/progEduObjectives">
                  <a>
                    <FontAwesomeIcon icon={faCompressArrowsAlt} /> Program
                    Educational Objectives
                  </a>
                </Link>
              </li>
              <li
                css={
                  router.pathname === "/hodPages/poMapping/pOPSOs"
                    ? css`
                        color: ${COLORS.GREEN};
                      `
                    : css`
                        color: ${COLORS.TEXTGRAY};
                      `
                }
              >
                <Link href="/hodPages/poMapping/pOPSOs">
                  <a>
                    <FontAwesomeIcon icon={faCompressArrowsAlt} /> PO & PSO's
                  </a>
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li
          css={
            router.pathname === "/hodPages/swapClasses"
              ? css`
                  color: ${COLORS.GREEN};
                `
              : css`
                  color: ${COLORS.TEXTGRAY};
                `
          }
        >
          <Link href="/hodPages/swapClasses">
            <a>
              <FontAwesomeIcon icon={faIdBadge} /> Swap Classes
            </a>
          </Link>
        </li>

        <li
          css={
            router.pathname === "/hodPages/mentor"
              ? css`
                  color: ${COLORS.GREEN};
                `
              : css`
                  color: ${COLORS.TEXTGRAY};
                `
          }
        >
          <Link href="/hodPages/mentor">
            <a>
              <FontAwesomeIcon icon={faCalendar} /> Mentor
            </a>
          </Link>
        </li>

        <li
          css={
            router.pathname === "/hodPages/feedbackDetails"
              ? css`
                  color: ${COLORS.GREEN};
                `
              : css`
                  color: ${COLORS.TEXTGRAY};
                `
          }
        >
          <Link href="/hodPages/feedbackDetails">
            <a>
              <FontAwesomeIcon icon={faPhone} /> Feedback Details
            </a>
          </Link>
        </li>

        <li
          css={
            router.pathname === "/hodPages/assignGroup"
              ? css`
                  color: ${COLORS.GREEN};
                `
              : css`
                  color: ${COLORS.TEXTGRAY};
                `
          }
        >
          <Link href="/hodPages/assignGroup">
            <a>
              <FontAwesomeIcon icon={faTint} /> Assign Group
            </a>
          </Link>
        </li>
        <li
          css={
            router.pathname === "/hodPages/facultyCoursesList"
              ? css`
                  color: ${COLORS.GREEN};
                `
              : css`
                  color: ${COLORS.TEXTGRAY};
                `
          }
        >
          <Link href="/hodPages/facultyCoursesList">
            <a>
              <FontAwesomeIcon icon={faTint} />
              List of Faculty Courses
            </a>
          </Link>
        </li>
        <li
          css={
            router.pathname === "/hodPages/facultyDataDownload"
              ? css`
                  color: ${COLORS.GREEN};
                `
              : css`
                  color: ${COLORS.TEXTGRAY};
                `
          }
        >
          <Link href="/hodPages/facultyDataDownload">
            <a>
              <FontAwesomeIcon icon={faTint} /> Faculty Data Download
            </a>
          </Link>
        </li>
        <li
          css={
            router.pathname === "/hodPages/assignElectives"
              ? css`
                  color: ${COLORS.GREEN};
                `
              : css`
                  color: ${COLORS.TEXTGRAY};
                `
          }
        >
          <Link href="/hodPages/assignElectives">
            <a>
              <FontAwesomeIcon icon={faTint} /> Assign Electives
            </a>
          </Link>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default HodSideNavLinks;
