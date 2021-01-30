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
                  <span>{item.firstName}</span>
                  <span>
                    <FontAwesomeIcon icon={faUserCircle} />
                    First Name
                  </span>
                  <span>-</span>
                  <span>
                    <FontAwesomeIcon icon={faPen} />
                    Last Name
                  </span>
                  <span>{item.lastName}</span>
                  <span>
                    <FontAwesomeIcon icon={faMarsDouble} />
                    Gender
                  </span>
                  <span>{item.gender}</span>
                  <span>
                    <FontAwesomeIcon icon={faBirthdayCake} />
                    Date of Birth
                  </span>
                  <span>{moment(item.dateOfBirth).format("DD/MM/YYYY")}</span>
                  <span>
                    <FontAwesomeIcon icon={faUserLock} />
                    Father Name
                  </span>
                  <span>{item.fatherName}</span>
                  <span>
                    <FontAwesomeIcon icon={faTv} />
                    Employee Type
                  </span>
                  <span>{item.employeeType}</span>
                  <span>
                    <FontAwesomeIcon icon={faBuilding} />
                    Association Type
                  </span>
                  <span>{item.associationType}</span>
                  <span>
                    <FontAwesomeIcon icon={faSuitcase} />
                    Designation
                  </span>
                  <span>{item.designation}</span>
                  <span>
                    <FontAwesomeIcon icon={faCalendar} />
                    Joining Date
                  </span>
                  <span>{moment(item.dateOfJoining).format("DD/MM/YYYY")}</span>
                  <span>
                    <FontAwesomeIcon icon={faCalendarCheck} />
                    Leaving Date
                  </span>
                  <span>-</span>
                  <span>
                    <FontAwesomeIcon icon={faPassport} />
                    Aadhar Card No.
                  </span>
                  <span>{item.aadharNo}</span>
                  <span>
                    <FontAwesomeIcon icon={faPassport} />
                    PAN Card No.
                  </span>
                  <span>{item.panCardNo}</span>
                  <span>
                    <FontAwesomeIcon icon={faHashtag} />
                    JNTUA No.
                  </span>
                  <span>{item.jntuhID}</span>
                  <span>
                    <FontAwesomeIcon icon={faHashtag} />
                    AICTE No.
                  </span>
                  <span>{item.aicteId}</span>
                  <span>
                    <FontAwesomeIcon icon={faAward} />
                    Achievements
                  </span>
                  <span>{item.achievements}</span>
                  <span>
                    <FontAwesomeIcon icon={faSearch} />
                    Research Activities
                  </span>
                  <span>{item.researchActivities}</span>
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
