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
              <li>
                <FontAwesomeIcon icon={faRegistered} /> Cource Register
              </li>
              <li>
                <FontAwesomeIcon icon={faLayerGroup} /> Cource Wise Attendance
              </li>
              <li>
                <FontAwesomeIcon icon={faAddressCard} /> Day Wise Attendance
              </li>
            </ul>
          )}
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
          <a className="clearfix cursor-pointer" onClick={toggleAlloCourceMenu}>
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
                  <a>
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
                  <a>
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
                  <a>
                    <FontAwesomeIcon icon={faNewspaper} /> Mark Entry
                  </a>
                </Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faEdit} /> Assignment Creation
              </li>
            </ul>
          )}
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
                  <a>
                    <FontAwesomeIcon icon={faGraduationCap} /> Assigned Students
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
                  <a>
                    <FontAwesomeIcon icon={faCompressArrowsAlt} /> Discrepancy
                  </a>
                </Link>
              </li>
            </ul>
          )}
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
                  <a>
                    <FontAwesomeIcon icon={faGraduationCap} /> Assigned Students
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
                  <a>
                    <FontAwesomeIcon icon={faCompressArrowsAlt} /> Discrepancy
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
