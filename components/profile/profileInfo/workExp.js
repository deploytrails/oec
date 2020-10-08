import React, { useState } from "react";
import moment from "moment";
import * as TABLE from "../../dashboards/styles/table.styles";
import PulseLoader from "react-spinners/PulseLoader";
import WorkExpModal from "../../profile/profile-modals/workexpModals";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ConfirmationModal from "../../General/confirmation-modal";
import { deleteWorkExpDetails } from "../../../services/profileService";
import { useSnackbar } from "react-simple-snackbar";
import {
  faSearch,
  faEdit,
  faTrashAlt,
  faPlus
} from "@fortawesome/free-solid-svg-icons";

const WorkExp = ({ isExpeInfo, loadExpInfo }) => {
  const [show, setShow] = useState(false);
  const [expList, setExpList] = useState({});
  const [isAlert, setIsAlert] = useState(false);
  const [openSnackbar, closeSnackbar] = useSnackbar();
  const openModal = data => {
    setShow(!show);
    setExpList(data);
    if (!data || data === {} || data === null || data === undefined) {
      setExpList({});
    }
  };
  const openAlertModal = () => {
    setIsAlert(!isAlert);
  };
  const deleteExperienceRecord = async id => {
    const expData = await deleteWorkExpDetails(id);
    loadExpInfo();
    openSnackbar("Successfully deleted Work Experience record");
    setIsAlert(!isAlert);
  };
  return (
    <React.Fragment>
      <div className="clearfix px-6 pb-6">
        <button
          onClick={openModal}
          type="button"
          className="py-2 px-4 rounded float-right bg-blue-400 text-center text-white mb-4 hover:bg-blue-500 focus:outline-none"
        >
          <FontAwesomeIcon icon={faPlus} /> ADD EXPERIENCE
        </button>
        <TABLE.TableWrapper>
          <TABLE.TableTR>
            <TABLE.TableTh>Name of the College</TABLE.TableTh>
            <TABLE.TableTh>Designation</TABLE.TableTh>
            <TABLE.TableTh>Roles & Responsibilities</TABLE.TableTh>
            <TABLE.TableTh>From</TABLE.TableTh>
            <TABLE.TableTh>To</TABLE.TableTh>
            <TABLE.TableTh>Action</TABLE.TableTh>
          </TABLE.TableTR>

          {!isExpeInfo && <PulseLoader size="10" color="#3aafa9" />}

          {isExpeInfo &&
            isExpeInfo.length &&
            isExpeInfo.map(expInfo => (
              <TABLE.TableTRR key={expInfo.workExperienceId}>
                <TABLE.TableTdd>{expInfo.collegename}</TABLE.TableTdd>
                <TABLE.TableTdd>{expInfo.designation}</TABLE.TableTdd>
                <TABLE.TableTdd>{expInfo.responsibilites}</TABLE.TableTdd>
                <TABLE.TableTdd>
                  {moment(expInfo.expFrom).format("DD/MM/YYYY")}
                </TABLE.TableTdd>
                <TABLE.TableTdd>
                  {moment(expInfo.expTo).format("DD/MM/YYYY")}
                </TABLE.TableTdd>
                <TABLE.TableTdd>
                  <span className="cursor-pointer mr-4 text-blue-400">
                    <FontAwesomeIcon
                      icon={faEdit}
                      onClick={() => openModal(expInfo)}
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
                      deleteMessage="Work Experience Details"
                      deleteRecord={() =>
                        deleteExperienceRecord(expInfo.workExperienceId)
                      }
                      openAlertModal={openAlertModal}
                    />
                  )}
                </TABLE.TableTdd>
              </TABLE.TableTRR>
            ))}
        </TABLE.TableWrapper>
        {show && (
          <WorkExpModal
            openModal={openModal}
            expList={expList}
            loadExpInfo={loadExpInfo}
          />
        )}
      </div>
    </React.Fragment>
  );
};

export default WorkExp;
