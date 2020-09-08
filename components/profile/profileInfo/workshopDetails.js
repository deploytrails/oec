import React, { useState } from "react";
import moment from "moment";
import Cookies from "js-cookie";
import * as TABLE from "../../dashboards/styles/table.styles";
import PulseLoader from "react-spinners/PulseLoader";
import WorkshopModal from "../../profile/profile-modals/workshopModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSnackbar } from "react-simple-snackbar";
import ConfirmationModal from "../../General/confirmation-modal";
import { deleteWorkshopDetails } from "../../../services/profileService";
import {
  faSearch,
  faEdit,
  faTrashAlt,
  faPlus,
  faFileImport,
} from "@fortawesome/free-solid-svg-icons";

const WorkshopDetails = ({ isWorkShopData, loadWorkshopInfo }) => {
  const [openSnackbar, closeSnackbar] = useSnackbar();
  const ProfileId = Cookies.get("employeeID");
  const [show, setShow] = useState(false);
  const [workshopList, setWorkShopList] = useState({});
  const [isAlert, setIsAlert] = useState(false);

  const openModal = (data) => {
    setShow(!show);
    setWorkShopList(data);
    if (!data || data === {} || data === null || data === undefined) {
      setWorkShopList({});
    }
    console.log("workshopdtata", data);
  };
  let state = "forWorkShopDelete";

  const openAlertModal = () => {
    setIsAlert(!isAlert);
  };
  const deleteWorkRecord = async (id) => {
    const phdData = await deleteWorkshopDetails(id);
    loadWorkshopInfo();
    openSnackbar("Successfully deleted Workshop record");
    setIsAlert(!isAlert);
    console.log(id);
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
            <TABLE.TableTh>Name of the Workshop</TABLE.TableTh>
            <TABLE.TableTh>Organized By</TABLE.TableTh>
            <TABLE.TableTh>Month & Year</TABLE.TableTh>
            <TABLE.TableTh>National / International</TABLE.TableTh>
            <TABLE.TableTh>Action</TABLE.TableTh>
          </TABLE.TableTR>

          {!isWorkShopData && <PulseLoader size="10" color="#3aafa9" />}

          {isWorkShopData &&
            isWorkShopData.length &&
            isWorkShopData.map((wshpInfo) => (
              <TABLE.TableTRR key={wshpInfo.workShopID}>
                <TABLE.TableTdd>{wshpInfo.workShopVenue}</TABLE.TableTdd>
                <TABLE.TableTdd>{wshpInfo.organizedby}</TABLE.TableTdd>
                <TABLE.TableTdd>
                  {moment(wshpInfo.monthyear).format("DD/MM/YYYY")}
                </TABLE.TableTdd>
                <TABLE.TableTdd>{wshpInfo.workshoptype}</TABLE.TableTdd>
                <TABLE.TableTdd>
                  <span className="cursor-pointer mr-4 text-blue-400">
                    <FontAwesomeIcon
                      icon={faEdit}
                      onClick={() => openModal(wshpInfo)}
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
                      deleteMessage="Workshop Details"
                      deleteRecord={() =>
                        deleteWorkRecord(wshpInfo.workShopID, ProfileId, state)
                      }
                      openAlertModal={openAlertModal}
                    />
                  )}
                </TABLE.TableTdd>
              </TABLE.TableTRR>
            ))}
        </TABLE.TableWrapper>
        {show && (
          <WorkshopModal
            openModal={openModal}
            loadWorkshopInfo={loadWorkshopInfo}
            workshopList={workshopList}
          />
        )}
      </div>
    </React.Fragment>
  );
};

export default WorkshopDetails;
