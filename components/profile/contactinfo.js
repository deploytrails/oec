import React, { useState } from "react";
import css from "@emotion/css";
import Cookies from "js-cookie";
import { COLORS } from "../../constants";
import ContactModal from "../../components/profile/profile-modals/contactDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMailBulk,
  faEnvelope,
  faMobile,
  faPhone,
  faAddressCard,
  faEnvelopeSquare,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { useSnackbar } from "react-simple-snackbar";

const ContactInfo = ({ isProfileData, loadProfileData }) => {
  const [show, setShow] = useState(false);
  const [openSnackbar, closeSnackbar] = useSnackbar();
  const ProfileId = Cookies.get("employeeID");
  const [userData, setUserData] = useState({});

  const cData = isProfileData && isProfileData.profile;
  const openModal = (data) => {
    setShow(!show);
    setUserData(data);
    if (!data || data === {} || data === null || data === undefined) {
      setUserData({});
    }
    console.log("userData", data);
  };
  return (
    <React.Fragment>
      <div className="pb-10 px-6">
        {cData &&
          cData.length > 0 &&
          cData.map((contactDets) => (
            <div
              className="w-5/12"
              css={css`
                & > p {
                  border-bottom: 1px solid ${COLORS.GRAY};
                  display: block;
                  padding: 10px 0px;
                }
              `}
            >
              <p className="clearfix font-sans text-sm">
                <FontAwesomeIcon icon={faEnvelope} /> Email:
                <span className="float-right">{contactDets.email}</span>
              </p>
              <p className="clearfix font-sans text-sm">
                <FontAwesomeIcon icon={faEnvelopeSquare} /> Alternate Email:
                <span className="float-right">
                  {contactDets.alternateEmail}
                </span>
              </p>
              <p className="clearfix font-sans text-sm">
                <FontAwesomeIcon icon={faEnvelope} /> Mobile Number:
                <span className="float-right">{contactDets.mobileNumber}</span>
              </p>
              <p className="clearfix font-sans text-sm">
                <FontAwesomeIcon icon={faPhone} /> Alternate Mobile No:
                <span className="float-right">
                  {contactDets.alternateMobile}
                </span>
              </p>

              <p className="clearfix font-sans text-sm">
                <FontAwesomeIcon icon={faAddressCard} /> Address:
                <span className="float-right">{contactDets.address}</span>
              </p>
              <button
                onClick={() => openModal(contactDets)}
                type="button"
                className="bg-red-400 py-2 px-4 text-sm text-white font-bold rounded shadow mt-4 hover:bg-red-600 transition-all"
              >
                <FontAwesomeIcon icon={faPen} /> Change Profile Information
              </button>
            </div>
          ))}
      </div>
      {show && (
        <ContactModal
          openModal={openModal}
          userData={userData}
          loadProfileData={loadProfileData}
        />
      )}
    </React.Fragment>
  );
};

export default ContactInfo;
