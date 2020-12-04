import React from "react";
import css from "@emotion/css";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { COLORS } from "../../constants";

const PageTitle = () => {
  const routerpath = useRouter();
  const pageName = routerpath.pathname.replace("/", "");
  const roleCheck = Cookies.get("roleFinder");
  return (
    <React.Fragment>
      <div
        className="py-4 px-6 clearfix"
        css={css`
          background-color: ${COLORS.GRAY_SMALLER};
          border-top: 1px solid ${COLORS.GRAY_LIGHTMEDIUM};
          border-bottom: 1px solid ${COLORS.GRAY_LIGHTMEDIUM};
        `}
      >
        <div className="float-left capitalize">
          <h2
            css={css`
              font-size: 18px;
              font-weight: bold;
            `}
          >
          <span className="mr-2">{roleCheck === 'Faculty' ? "Faculty" : roleCheck === 'Admin' ? "Admin" : roleCheck==='HOD' ? "HOD" : roleCheck === 'Student' ? "Student" : ""}</span>
            {pageName}
          </h2>
        </div>
        <div className="float-right text-gray-600">
        
          <span className="ml-2 capitalize">
          
            <FontAwesomeIcon icon={faHome} className="mr-1" />
            <span className="mr-2">{roleCheck === 'Faculty' ? "Faculty" : roleCheck === 'Admin' ? "Admin" : roleCheck==='HOD' ? "HOD" : roleCheck === 'Student' ? "Student" : ""}</span>
            {pageName}
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PageTitle;
