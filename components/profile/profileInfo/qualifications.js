import React, { useState } from "react";
import * as TABLE from "../../dashboards/styles/table.styles";
import PulseLoader from "react-spinners/PulseLoader";
import QualificationModal from "../../profile/profile-modals/qualificationModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ConfirmationModal from "../../General/confirmation-modal";
import { useSnackbar } from "react-simple-snackbar";
import { deleteQualificationDetails } from "../../../services/profileService";
import {
  faSearch,
  faEdit,
  faTrashAlt,
  faPlus
} from "@fortawesome/free-solid-svg-icons";

const QualificationInfo = ({
  isQualificData,
  loadQualificationInfo,
  isProfileData
}) => {
  const [show, setShow] = useState(false);
  const [qualificationList, setQualificationList] = useState({});
  const [isAlert, setIsAlert] = useState(false);
  const [openSnackbar, closeSnackbar] = useSnackbar();
  const openModal = data => {
    setShow(!show);
    setQualificationList(data);
    if (!data || data === {} || data === null || data === undefined) {
      setQualificationList({});
    }
  };
  const openAlertModal = () => {
    setIsAlert(!isAlert);
  };
  const deleteQualificationRecord = async id => {
    const qualificationData = await deleteQualificationDetails(id);
    loadQualificationInfo();
    openSnackbar("Successfully deleted Qualification record");
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
          <FontAwesomeIcon icon={faPlus} /> ADD QUALIFICATION
        </button>
        <TABLE.TableWrapper>
          <TABLE.TableTR>
            <TABLE.TableTh>Qualification Type</TABLE.TableTh>
            <TABLE.TableTh>Name of the College</TABLE.TableTh>
            <TABLE.TableTh>Branch</TABLE.TableTh>
            <TABLE.TableTh>Year of Completion</TABLE.TableTh>
            <TABLE.TableTh>Action</TABLE.TableTh>
          </TABLE.TableTR>

          {!isQualificData && <PulseLoader size="10" color="#3aafa9" />}

          {isQualificData &&
            isQualificData.length &&
            isQualificData.map(qualInfo => (
              <TABLE.TableTRR key={qualInfo.branchName}>
                <TABLE.TableTdd>{qualInfo.qualificationType}</TABLE.TableTdd>
                <TABLE.TableTdd>{qualInfo.collegeName}</TABLE.TableTdd>
                <TABLE.TableTdd>{qualInfo.branchName}</TABLE.TableTdd>
                <TABLE.TableTdd>{qualInfo.yearOfPass}</TABLE.TableTdd>
                <TABLE.TableTdd>
                  <span className="cursor-pointer mr-4 text-blue-400">
                    <FontAwesomeIcon
                      icon={faEdit}
                      onClick={() => openModal(qualInfo)}
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
                      deleteMessage="Qualification Details"
                      deleteRecord={() =>
                        deleteQualificationRecord(qualInfo.qualificationID)
                      }
                      openAlertModal={openAlertModal}
                    />
                  )}
                </TABLE.TableTdd>
              </TABLE.TableTRR>
            ))}
        </TABLE.TableWrapper>
      </div>
      {show && (
        <QualificationModal
          openModal={openModal}
          qualificationList={qualificationList}
          loadQualificationInfo={loadQualificationInfo}
          isProfileData={isProfileData}
        />
      )}
    </React.Fragment>
  );
};

export default QualificationInfo;
