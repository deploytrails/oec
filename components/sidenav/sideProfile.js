import React from "react";
import Cookies from "js-cookie";
import { css } from "@emotion/core";
import { COLORS } from "../../constants";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faMailBulk,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
const SideProfile = () => {
  const userName = Cookies.get("userName");
  //logout method
  const router = useRouter();
  const logMeOut = () => {
    Cookies.remove("loggedUserStatus");
    Cookies.remove("employeeID");
    router.push("/");
  };
  
  return (
    <React.Fragment>
      <section
        className="block py-4 px-6 text-white font-bold"
        css={css`
          background-color: ${COLORS.EXTRADBG};
          border-bottom: 1px solid ${COLORS.DARKBORDER};
        `}
      >
        <div className="md:flex">
          <img
            src="https://image.flaticon.com/icons/svg/848/848006.svg"
            alt="Profile"
            title="Profile"
            className="h-16 w-16 mx-auto md:mx-0"
          />
          <h3 className="text-lg pt-5 px-2">{userName}</h3>
        </div>
      </section>
      <section
        className="block"
        css={css`
          border-bottom: 1px solid ${COLORS.DARKBORDER};
        `}
      >
        <ul
          className="list-none text-sm"
          css={css`
            & > li {
              display: inline-block;
              width: 33.3333%;
              text-align: center;
              padding: 8px 0px;
              border-right: 1px solid ${COLORS.DARKBORDER};
              color: ${COLORS.TEXTGRAY};
              cursor: pointer;
              &:hover {
                color: ${COLORS.GREEN};
              }
            }
          `}
        >
          <li>
            <FontAwesomeIcon icon={faEdit} /> Edit Profile
          </li>
          <li>
            <FontAwesomeIcon icon={faMailBulk} /> Mailbox
          </li>
          <li role="link" onClick={logMeOut}>
            <FontAwesomeIcon icon={faSignOutAlt} /> Logout
          </li>
        </ul>
      </section>
    </React.Fragment>
  );
};

export default SideProfile;
