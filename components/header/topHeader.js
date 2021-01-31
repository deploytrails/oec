import React, { useEffect, useState } from "react";
import css from "@emotion/css";
import { useRouter } from "next/router";
import Link from "next/link";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faChevronDown,
  faSearch,
  faBars,
  faSignOutAlt,
  faChevronLeft,
  faHome,
  faChevronRight,
  faIdCard,
} from "@fortawesome/free-solid-svg-icons";

const TopHeader = () => {
  const userName = Cookies.get("userName");
  const [isNavClosed, setIsNavClosed] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [isToggle, setIsToggle] = useState(false);
  const router = useRouter();
  const pageName = Cookies.get("routeName");
  const [roleMenu, setRoleMenu] = useState(false);

  const roleArray = ["Admin", "Faculty", "HOD"];

  //close side nav
  const cloasenav = () => {
    setIsNavClosed(true);
    setIsNavOpen(false);
    let navId = document.querySelector("#sidenav");
    let wrapId = document.querySelector("#sidewrap");
    navId.style.left = "-340px";
    navId.style.transition = "all 0.3s ease-in-out";
    wrapId.style.marginLeft = "0px";
    wrapId.style.transition = "all 0.3s ease-in-out";
  };
  //open side nav
  const openNav = () => {
    setIsNavClosed(false);
    setIsNavOpen(true);
    let navId = document.querySelector("#sidenav");
    let wrapId = document.querySelector("#sidewrap");
    navId.style.left = "0px";
    wrapId.style.marginLeft = "340px";
    navId.style.transition = "all 0.3s ease-in-out";
    wrapId.style.transition = "all 0.3s ease-in-out";
  };

  React.useEffect(() => cloasenav(), []);

  //goto Profile page
  const gotoProfile = () => {
    router.push("/profile");
  };

  //logout
  const logMeOut = () => {
    Cookies.remove("loggedUserStatus");
    Cookies.remove("employeeID");
    Cookies.remove("routeName");
    router.push("/");
  };
  //dipslay profile dropdown
  const displayHeaderProfile = () => {
    setIsToggle(!isToggle);
  };

  let userRoles = "";
  //console.log("rou", router);
  //const routeName = router.pathname.replace('/', '');
  const routeName = "/dashboard";
  const changeRole = (event) => {
    setRoleMenu(false);
    //console.log(event);
    //  const targetValue = event.target.value;
    const targetValue = event;

    switch (targetValue) {
      case "Faculty":
        userRoles = "Faculty";
        Cookies.set("roleFinder", userRoles);
        router.replace(routeName);
        break;
      case "HOD":
        userRoles = "HOD";
        Cookies.set("roleFinder", userRoles);
        router.replace(routeName);
        break;
      case "Admin":
        userRoles = "Admin";
        Cookies.set("roleFinder", userRoles);
        router.replace(routeName);
        break;
      case "Student":
        userRoles = "Student";
        Cookies.set("roleFinder", userRoles);
        router.replace(routeName);
        break;
      default:
        userRoles = "Faculty";
        Cookies.set("roleFinder", userRoles);
        router.replace(routeName);
        break;
    }
  };

  return (
    <React.Fragment>
      <div className="py-4 px-6 clearfix shadow bg-white">
        <div className="float-left cursor-pointer">
          <React.Fragment>
            {isNavClosed && (
              <strong onClick={openNav}>
                OEC&nbsp;
                <FontAwesomeIcon icon={faBars} />
              </strong>
            )}
            {isNavOpen && (
              <button
                type="button"
                className="h-6 w-6 bg-white shadow rounded-full"
              >
                <FontAwesomeIcon icon={faChevronLeft} onClick={cloasenav} />
              </button>
            )}
          </React.Fragment>

          {/* <div className="ml-4 inline-block">
            <label>
              <select
                onChange={(e) => changeRole(e)}
                className="font-sans text-sm outline-none border border-solid border-gray-400 rounded px-2"
              >
                <option value="">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="Faculty">Faculty</option>
                <option value="HOD">HOD</option>
                <option value="Student">Student</option>
              </select>
            </label>
          </div> */}
          <div className="text-gray-600 inline-block">
            {pageName === "Dashboard" ? (
              <span className="ml-2 capitalize">
                <FontAwesomeIcon icon={faHome} className="mr-1" />
                Dashboard
              </span>
            ) : (
              <span className="ml-2 capitalize">
                <Link href="/dashboard" key="Dashboard">
                  <a class="hover:underline">
                    <FontAwesomeIcon icon={faHome} className="mr-1" />
                    Dashboard
                  </a>
                </Link>
                &nbsp;/ {pageName}
              </span>
            )}
          </div>
        </div>
        <div className="float-right text-gray-600">
          {/* <span className="mr-20">
            <FontAwesomeIcon icon={faSearch} />
          </span> */}
          <button
            type="button"
            className=" relative focus:outline-none"
            onClick={displayHeaderProfile}
          >
            <span>
              <img
                src="https://image.flaticon.com/icons/svg/848/848006.svg"
                alt="Profile"
                title="Profile"
                className="h-6 w-6 inline-block mr-2"
              />

              {userName}
            </span>
            <span className="ml-2">
              <FontAwesomeIcon
                icon={faChevronDown}
                css={
                  isToggle === true
                    ? css`
                        transform: rotate(180deg);
                        transition: 0.3s ease-in-out;
                      `
                    : css`
                        transform: rotate(0deg);
                        transition: 0.3s ease-in-out;
                      `
                }
              />
            </span>
            {isToggle && (
              <div
                className="shadow-2xl p-0 m-0 absolute bg-white w-full"
                css={css`
                  top: 40px;
                  z-index: 1;
                `}
              >
                <button
                  type="button"
                  onClick={gotoProfile}
                  className="block w-full py-1 px-3 text-left focus:outline-none hover:text-green-500"
                >
                  <FontAwesomeIcon icon={faUser} /> Profile
                </button>

                <div
                  className="w-full py-1 px-3 border-t border-gray-300 text-left "
                  onMouseEnter={() => setRoleMenu(true)}
                  onMouseLeave={() => setRoleMenu(false)}
                >
                  <FontAwesomeIcon icon={faIdCard} />
                  &nbsp;Role ({Cookies.get("roleFinder")})
                  <span className="float-right">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      css={
                        roleMenu
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
                  {roleMenu && (
                    <div>
                      <ul
                        className="ml-6 font-sans text-sm"
                        css={css`
                          & > li {
                            padding: 4px 0px;
                          }
                        `}
                      >
                        {roleArray
                          .filter((role) => role !== Cookies.get("roleFinder"))
                          .map((filteredRole) => (
                            <li>
                              <a onClick={() => changeRole(filteredRole)}>
                                {filteredRole}
                              </a>
                            </li>
                          ))}
                      </ul>
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  onClick={logMeOut}
                  className="block w-full py-1 px-3 border-t border-gray-300 text-left focus:outline-none hover:text-green-500"
                >
                  <FontAwesomeIcon icon={faSignOutAlt} /> logout
                </button>
              </div>
            )}
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TopHeader;
