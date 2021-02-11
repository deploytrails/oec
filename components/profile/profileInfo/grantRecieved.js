import React, { useState } from "react";
import * as TABLE from "../../dashboards/styles/table.styles";
import PulseLoader from "react-spinners/PulseLoader";
import GrantRecievedModal from "../../profile/profile-modals/grantRecievedModal";
import { deleteGrantDetails } from "../../../services/profileService";
import ConfirmationModal from "../../General/confirmation-modal";
import { useSnackbar } from "react-simple-snackbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faEdit,
  faTrashAlt,
  faPlus,
  faFileImport,
} from "@fortawesome/free-solid-svg-icons";

const GrantRecieved = ({ isGrantsData, loadGrantsInfo }) => {
  const [openSnackbar, closeSnackbar] = useSnackbar();
  console.log("isGrantsData123", isGrantsData);
  const [show, setShow] = useState(false);
  const [grantList, setGrantList] = useState({});
  const [isAlert, setIsAlert] = useState(false);
  const openModal = (data) => {
    setShow(!show);
    setGrantList(data);
    if (!data || data === {} || data === null || data === undefined) {
      setGrantList({});
    }
    console.log("ccc", data);
  };

  const openAlertModal = () => {
    setIsAlert(!isAlert);
  };
  const deleteGrantRecord = async (id) => {
    const phdData = await deleteGrantDetails(id);
    loadGrantsInfo();
    openSnackbar("Successfully deleted Grant record");
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
            <TABLE.TableTh>Scheme</TABLE.TableTh>
            <TABLE.TableTh>Amount Sanctioned</TABLE.TableTh>
            <TABLE.TableTh>Sanctioned Letter No.</TABLE.TableTh>
            <TABLE.TableTh>Year</TABLE.TableTh>
            <TABLE.TableTh>Action</TABLE.TableTh>
          </TABLE.TableTR>

          {!isGrantsData && <PulseLoader size="10" color="#3aafa9" />}

          {isGrantsData &&
            isGrantsData.length &&
            isGrantsData.map((grtInfo) => (
              <TABLE.TableTRR key={grtInfo.empgrantrcvdid}>
                <TABLE.TableTdd>{grtInfo.scheme}</TABLE.TableTdd>
                <TABLE.TableTdd>{grtInfo.amtsancted}</TABLE.TableTdd>
                <TABLE.TableTdd>{grtInfo.sanctdlettrno}</TABLE.TableTdd>
                <TABLE.TableTdd>{grtInfo.year}</TABLE.TableTdd>
                <TABLE.TableTdd>
                  <span className="cursor-pointer mr-4 text-blue-400">
                    <FontAwesomeIcon
                      icon={faEdit}
                      onClick={() => openModal(grtInfo)}
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
                      deleteMessage="Grant Details"
                      deleteRecord={() =>
                        deleteGrantRecord(grtInfo.empgrantrcvdid)
                      }
                      openAlertModal={openAlertModal}
                    />
                  )}
                </TABLE.TableTdd>
              </TABLE.TableTRR>
            ))}
        </TABLE.TableWrapper>
        {show && (
          <GrantRecievedModal
            openModal={openModal}
            loadGrantsInfo={loadGrantsInfo}
            grantList={grantList}
          />
        )}
      </div>
    </React.Fragment>
  );
};

export default GrantRecieved;
