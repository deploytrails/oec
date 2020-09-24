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
            <a>
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
            <a>
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
              <li>
                <FontAwesomeIcon icon={faBook} /> Allocated Cources
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
              <li>
                <FontAwesomeIcon icon={faNewspaper} /> Mark Entry
              </li>
              <li>
                <FontAwesomeIcon icon={faEdit} /> Assignment Creation
              </li>
            </ul>
          )}
        </li>

        <li
          css={
            router.pathname === "/cource-coordinator-allocation"
              ? css`
                  color: ${COLORS.GREEN};
                `
              : css`
                  color: ${COLORS.TEXTGRAY};
                `
          }
        >
          <Link href="/cource-coordinator-allocation">
            <a>
              <FontAwesomeIcon icon={faIdBadge} /> Cource Coordinator Allocation
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
            <a>
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
              <li>
                <FontAwesomeIcon icon={faGraduationCap} /> Assigned Students
              </li>
              <li>
                <FontAwesomeIcon icon={faCompressArrowsAlt} /> Discrepancy
              </li>
            </ul>
          )}
        </li>

        <li
          css={
            router.pathname === "/exam-schedule"
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
              <li>
                <FontAwesomeIcon icon={faExchangeAlt} /> Exam Invigilation
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
        </li>
      </ul>
    </React.Fragment>
  );
};

export default SideNavLinks;
