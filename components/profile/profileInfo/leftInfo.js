import React, { useState } from "react";
import css from "@emotion/css";
import moment from "moment";
import Cookies from "js-cookie";
import { COLORS } from "../../../constants";
import Modal from "../profile-modals/updateProfile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUserCircle,
  faPen,
  faMarsDouble,
  faBirthdayCake,
  faUserLock,
  faTv,
  faBuilding,
  faSuitcase,
  faCalendar,
  faCalendarCheck,
  faPassport,
  faHashtag,
  faAward,
  faSearch,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";

const LeftInfo = ({ isProfileData, loadProfileData }) => {
  const [show, setShow] = useState(false);
  const pData = isProfileData && isProfileData.profile;
  console.log(pData);
  const ProfileId = Cookies.get("employeeID");
  const [userData, setUserData] = useState({});
  const [isAlert, setIsAlert] = useState(false);
  const openModal = (data) => {
    setShow(!show);
    setUserData(data);
    if (!data || data === {} || data === null || data === undefined) {
      setUserData({});
    }
    console.log("dataaa", data);
  };

  return (
    <React.Fragment>
      <div className="block">
        <div
          className="text-sm font-sans"
          css={css`
            & > p {
              display: block;
              margin-right: 10px;
            }
            & > p > span {
              float: left;
              width: 48%;
              border-bottom: 1px solid ${COLORS.GRAY};
              padding: 8px 0px;
              color: ${COLORS.BLACK};
            }
            & > p > span > svg {
              margin-right: 4px;
            }
          `}
        >
          {pData &&
            pData.length > 0 &&
            pData.map((item) => (
              <React.Fragment>
                <p key={item} className="clearfix">
                  <span>
                    <FontAwesomeIcon icon={faUser} />
                    Name
                  </span>
                  <span>{item?.firstName ? item?.firstName : "-"}</span>
                  <span>
                    <FontAwesomeIcon icon={faUserCircle} />
                    First Name
                  </span>
                  <span>{item?.surName ? item?.surName : "-"}</span>
                  <span>
                    <FontAwesomeIcon icon={faPen} />
                    Last Name
                  </span>
                  <span>{item?.lastName ? item?.lastName : "-"}</span>
                  <span>
                    <FontAwesomeIcon icon={faMarsDouble} />
                    Gender
                  </span>
                  <span>{item?.gender ? item?.gender : "-"}</span>
                  <span>
                    <FontAwesomeIcon icon={faBirthdayCake} />
                    Date of Birth
                  </span>
                  <span>{item?.dateOfBirth ? moment(item?.dateOfBirth).format("DD/MM/YYYY") :"-" }</span>
                  <span>
                    <FontAwesomeIcon icon={faUserLock} />
                    Father Name
                  </span>
                  <span>{item?.fatherName ? item?.fatherName :"-"}</span>
                  <span>
                    <FontAwesomeIcon icon={faTv} />
                    Employee Type
                  </span>
                  <span>{item?.employeeType ? item?.employeeType : "-"}</span>
                  <span>
                    <FontAwesomeIcon icon={faBuilding} />
                    Association Type
                  </span>
                  <span>{item?.associationType ? item?.associationType : "-"}</span>
                  <span>
                    <FontAwesomeIcon icon={faSuitcase} />
                    Designation
                  </span>
                  <span>{item?.designation ? item.designation :"-"}</span>
                  <span>
                    <FontAwesomeIcon icon={faCalendar} />
                    Joining Date
                  </span>
                  <span>{item?.dateOfJoining ? moment(item?.dateOfJoining).format("DD/MM/YYYY") :"-"}</span>
                  <span>
                    <FontAwesomeIcon icon={faCalendarCheck} />
                    Leaving Date
                  </span>
                  <span>{item?.dateOfLeaving ? moment(item?.dateOfLeaving).format("DD/MM/YYYY") : "-"}</span>
                  <span>
                    <FontAwesomeIcon icon={faPassport} />
                    Aadhar Card No.
                  </span>
                  <span>{item?.aadharNo ? item?.aadharNo :"-"}</span>
                  <span>
                    <FontAwesomeIcon icon={faPassport} />
                    PAN Card No.
                  </span>
                  <span>{item?.panCardNo ? item?.panCardNo :"-"}</span>
                  <span>
                    <FontAwesomeIcon icon={faHashtag} />
                    JNTUA No.
                  </span>
                  <span>{item?.jntuhID ? item?.jntuhID :"-"}</span>
                  <span>
                    <FontAwesomeIcon icon={faHashtag} />
                    AICTE No.
                  </span>
                  <span>{item?.aicteId ? item?.aicteId :"-"}</span>
                  <span>
                    <FontAwesomeIcon icon={faAward} />
                    Achievements
                  </span>
                  <span>{item?.achievements ? item?.achievements :"-"}</span>
                  <span>
                    <FontAwesomeIcon icon={faSearch} />
                    Research Activities
                  </span>
                  <span>{item?.researchActivities ? item?.researchActivities: "-"}</span>
                </p>
                <button
                  onClick={() => openModal(item)}
                  type="button"
                  className="bg-red-400 py-2 px-4 text-sm text-white font-bold rounded shadow mt-4 hover:bg-red-600 transition-all"
                >
                  <FontAwesomeIcon icon={faPen} /> Change Profile Information
                </button>
              </React.Fragment>
            ))}
        </div>
        {show && (
          <Modal
            openModal={openModal}
            userData={userData}
            loadProfileData={loadProfileData}
          />
        )}
      </div>
    </React.Fragment>
  );
};

export default LeftInfo;
