import React, { useState } from "react";
import * as TABLE from "../../dashboards/styles/table.styles";
import PulseLoader from "react-spinners/PulseLoader";
import PhdModal from "../../profile/profile-modals/phdModal";
import { deletePhdDetails } from "../../../services/profileService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSnackbar } from "react-simple-snackbar";
import ConfirmationModal from "../../General/confirmation-modal";

import {
  faSearch,
  faEdit,
  faTrashAlt,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const PhdDetails = ({ isPhData, loadPhInfo }) => {
  const [show, setShow] = useState(false);
  const [isPHDdata, setIsPHDdata] = useState({});
  const [isAlert, setIsAlert] = useState(false);
  const [openSnackbar, closeSnackbar] = useSnackbar();
  const openModal = () => {
    setShow(true);
  };
  const closeModal = () => {
    setShow(false);
    setIsPHDdata([]);
  };
  const openEditPhd = (data) => {
    setIsPHDdata(data);
    openModal();
  };

  const openAlertModal = () => {
    setIsAlert(!isAlert);
  };

  const deletePhdRecord = async (id) => {
    const phdData = await deletePhdDetails(id);
    loadPhInfo();
    openSnackbar("Successfully deleted phd record");
    setIsAlert(!isAlert);
  };
  return (
    <React.Fragment>
      <div className="clearfix px-6 pb-6">
        <button
          type="button"
          onClick={openModal}
          className="py-2 px-4 rounded float-right bg-blue-400 text-center text-white mb-4 hover:bg-blue-500 focus:outline-none"
        >
          <FontAwesomeIcon icon={faPlus} /> ADD
        </button>
        <TABLE.TableWrapper>
          <TABLE.TableTR>
            <TABLE.TableTh>Research Title</TABLE.TableTh>
            <TABLE.TableTh>University</TABLE.TableTh>
            <TABLE.TableTh>Registered Year</TABLE.TableTh>
            <TABLE.TableTh>Status</TABLE.TableTh>
            <TABLE.TableTh>Action</TABLE.TableTh>
          </TABLE.TableTR>

          {!isPhData && <PulseLoader size="10" color="#3aafa9" />}

          {isPhData &&
            isPhData.length &&
            isPhData.map((pInfo) => (
              <TABLE.TableTRR key={pInfo.phdDetailsID}>
                <TABLE.TableTdd>{pInfo.researchTitle}</TABLE.TableTdd>
                <TABLE.TableTdd>{pInfo.university}</TABLE.TableTdd>
                <TABLE.TableTdd>{pInfo.registeredYear}</TABLE.TableTdd>
                <TABLE.TableTdd>{pInfo.status}</TABLE.TableTdd>
                <TABLE.TableTdd>
                  <span className="cursor-pointer mr-4 text-blue-400">
                    <FontAwesomeIcon
                      icon={faEdit}
                      onClick={() => openEditPhd(pInfo)}
                    />
                  </span>
                  <span className="cursor-pointer text-red-400">
                    <FontAwesomeIcon
                      icon={faTrashAlt}
                      onClick={openAlertModal}
                      //onClick={() => deletePhdRecord(pInfo.phdDetailsID)}
                    />
                  </span>
                  {isAlert && (
                    <ConfirmationModal
                      deleteMessage="Ph.D Details"
                      deleteRecord={() => deletePhdRecord(pInfo.phdDetailsID)}
                      openAlertModal={openAlertModal}
                    />
                  )}
                </TABLE.TableTdd>
              </TABLE.TableTRR>
            ))}
        </TABLE.TableWrapper>
        {show && (
          <PhdModal
            closeModal={closeModal}
            isPHDdata={isPHDdata}
            loadPhInfo={loadPhInfo}
          />
        )}
      </div>
    </React.Fragment>
  );
};

export default PhdDetails;
