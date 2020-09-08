import React, { useState } from "react";
import css from "@emotion/css";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faChevronDown,
  faSearch,
  faBars,
  faCross,
  faTimes,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

const TopHeader = () => {
  const userName = Cookies.get("userName");
  const [isNavClosed, setIsNavClosed] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [isToggle, setIsToggle] = useState(false);
  const router = useRouter();

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
  //goto Profile page
  const gotoProfile = () => {
    router.push("/profile");
  };

  //logout
  const logMeOut = () => {
    Cookies.remove("loggedUserStatus");
    Cookies.remove("employeeID");
    router.push("/");
  };
  //dipslay profile dropdown
  const displayHeaderProfile = () => {
    setIsToggle(!isToggle);
  };
  return (
    <React.Fragment>
      <div className="py-4 px-6 clearfix shadow bg-white">
        <div className="float-left cursor-pointer">
          {isNavClosed && <FontAwesomeIcon icon={faTimes} onClick={openNav} />}
          {isNavOpen && <FontAwesomeIcon icon={faBars} onClick={cloasenav} />}
        </div>
        <div className="float-right text-gray-600">
          <span className="mr-20">
            <FontAwesomeIcon icon={faSearch} />
          </span>
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
                `}
              >
                <button
                  type="button"
                  onClick={gotoProfile}
                  className="block w-full py-1 px-3 text-left focus:outline-none hover:text-green-500"
                >
                  <FontAwesomeIcon icon={faUser} /> Profile
                </button>
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
