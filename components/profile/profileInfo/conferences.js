import React, { useState } from "react";
import moment from "moment";
import Cookies from "js-cookie";
import * as TABLE from "../../dashboards/styles/table.styles";
import PulseLoader from "react-spinners/PulseLoader";
import { useSnackbar } from "react-simple-snackbar";
import ConferenceModal from "../../profile/profile-modals/conferenceModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deleteConferenceDetails } from "../../../services/profileService";
import ConfirmationModal from "../../General/confirmation-modal";
import {
  faSearch,
  faEdit,
  faTrashAlt,
  faPlus,
  faFileImport,
} from "@fortawesome/free-solid-svg-icons";

const Conferences = ({ isConfData, loadConfInfo }) => {
  const [show, setShow] = useState(false);
  const [confData, setConfData] = useState({});
  const ProfileId = Cookies.get("employeeID");
  const [isAlert, setIsAlert] = useState(false);
  const [openSnackbar, closeSnackbar] = useSnackbar();
  const openModal = () => {
    setShow(!show);
  };
  const closeModal = () => {
    setShow(false);
    setConfData([]);
  };
  const openEditConference = (data) => {
    setConfData(data);
    openModal();
  };

  const openAlertModal = () => {
    setIsAlert(!isAlert);
  };
  const deleteConferenceRecord = async (id) => {
    const phdData = await deleteConferenceDetails(id);
    loadConfInfo();
    openSnackbar("Successfully deleted phd record");
    setIsAlert(!isAlert);
  };

  return (
    <React.Fragment>
      <div className="clearfix px-6 pb-6">
        <div className="float-left">
          <label htmlFor="search">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search"
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none "
            />
          </label>
        </div>
        <div className="float-right">
          <button
            type="button"
            onClick={openModal}
            className="py-2 px-4 rounded  bg-blue-400 mr-2 text-center text-white mb-4 hover:bg-blue-500 focus:outline-none"
          >
            <FontAwesomeIcon icon={faPlus} /> ADD
          </button>
          <button
            type="button"
            className="py-2 px-4 rounded  bg-blue-400 text-center text-white mb-4 hover:bg-blue-500 focus:outline-none"
          >
            <FontAwesomeIcon icon={faFileImport} /> Import / Export Data
          </button>
        </div>

        <TABLE.TableWrapper>
          <TABLE.TableTR>
            <TABLE.TableTh>Name of The Faculty</TABLE.TableTh>
            <TABLE.TableTh>Conference / Seminar</TABLE.TableTh>
            <TABLE.TableTh>Title Of The Conference</TABLE.TableTh>
            <TABLE.TableTh>National / International</TABLE.TableTh>
            <TABLE.TableTh>Month & Year</TABLE.TableTh>
            <TABLE.TableTh>Action</TABLE.TableTh>
          </TABLE.TableTR>

          {!isConfData && <PulseLoader size="10" color="#3aafa9" />}

          {isConfData &&
            isConfData.length &&
            isConfData.map((confInfo) => (
              <TABLE.TableTRR key={confInfo.conferenceID}>
                <TABLE.TableTdd>{confInfo.hrEmployee.lastName}</TABLE.TableTdd>
                <TABLE.TableTdd>{confInfo.typeOfconferencename}</TABLE.TableTdd>
                <TABLE.TableTdd>{confInfo.titleConference}</TABLE.TableTdd>
                <TABLE.TableTdd>
                  {confInfo.internationalNational}
                </TABLE.TableTdd>
                <TABLE.TableTdd>
                  {moment(confInfo.conferenceMonthYear).format("DD/MM/YYYY")}
                </TABLE.TableTdd>
                <TABLE.TableTdd>
                  <span className="cursor-pointer mr-4 text-blue-400">
                    <FontAwesomeIcon
                      icon={faEdit}
                      onClick={() => openEditConference(confInfo)}
                    />
                  </span>
                  <span className="cursor-pointer text-red-400">
                    <FontAwesomeIcon
                      icon={faTrashAlt}
                      onClick={openAlertModal}
                    />
                  </span>
                  {isAlert && (
                    <ConfirmationModal
                      deleteMessage="Conference Details"
                      deleteRecord={() =>
                        deleteConferenceRecord(confInfo.conferenceID)
                      }
                      openAlertModal={openAlertModal}
                    />
                  )}
                </TABLE.TableTdd>
              </TABLE.TableTRR>
            ))}
        </TABLE.TableWrapper>
        {show && (
          <ConferenceModal
            confData={confData}
            closeModal={closeModal}
            loadConfInfo={loadConfInfo}
          />
        )}
      </div>
    </React.Fragment>
  );
};

export default Conferences;
