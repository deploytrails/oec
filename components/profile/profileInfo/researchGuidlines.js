import React, { useState } from "react";
import Cookies from "js-cookie";
import * as TABLE from "../../dashboards/styles/table.styles";
import PulseLoader from "react-spinners/PulseLoader";
import ResearchGuidlinesModal from "../../profile/profile-modals/researchGuidlinesModal";
import { deleteGuidlinesDetails } from "../../../services/profileService";
import ConfirmationModal from "../../General/confirmation-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faEdit,
  faTrashAlt,
  faPlus,
  faFileImport,
} from "@fortawesome/free-solid-svg-icons";
import { useSnackbar } from "react-simple-snackbar";

const ResearchGuidlines = ({ isResearchGuidData, loadResearchGuidInfo }) => {
  const [show, setShow] = useState(false);
  const [openSnackbar, closeSnackbar] = useSnackbar();
  const ProfileId = Cookies.get("employeeID");
  const [guidList, setGuidList] = useState({});
  const [isAlert, setIsAlert] = useState(false);
  const openModal = (data) => {
    setShow(!show);
    setGuidList(data);
    if (!data || data === {} || data === null || data === undefined) {
      setGuidList({});
    }
    console.log("guidList", data);
  };

  const openAlertModal = () => {
    setIsAlert(!isAlert);
  };
  const deleteGuidlinesRecord = async (id) => {
    const guidData = await deleteGuidlinesDetails(id);
    loadResearchGuidInfo();
    openSnackbar("Successfully deleted Research Guidlines record");
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
            <TABLE.TableTh>Scholar Name</TABLE.TableTh>
            <TABLE.TableTh>Admission Year</TABLE.TableTh>
            <TABLE.TableTh>University Name</TABLE.TableTh>
            <TABLE.TableTh>Status</TABLE.TableTh>
            <TABLE.TableTh>Action</TABLE.TableTh>
          </TABLE.TableTR>

          {!isResearchGuidData && <PulseLoader size="10" color="#3aafa9" />}

          {isResearchGuidData &&
            isResearchGuidData.length &&
            isResearchGuidData.map((rgInfo) => (
              <TABLE.TableTRR key={rgInfo.researchGuidanceID}>
                <TABLE.TableTdd>{rgInfo.scholarname}</TABLE.TableTdd>
                <TABLE.TableTdd>{rgInfo.yearOfAdmission}</TABLE.TableTdd>
                <TABLE.TableTdd>{rgInfo.universityName}</TABLE.TableTdd>
                <TABLE.TableTdd>{rgInfo.status}</TABLE.TableTdd>
                <TABLE.TableTdd>
                  <span className="cursor-pointer mr-4 text-blue-400">
                    <FontAwesomeIcon
                      icon={faEdit}
                      onClick={() => openModal(rgInfo)}
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
                      deleteMessage="Research Guidlines Details"
                      deleteRecord={() =>
                        deleteGuidlinesRecord(rgInfo.researchGuidanceID)
                      }
                      openAlertModal={openAlertModal}
                    />
                  )}
                </TABLE.TableTdd>
              </TABLE.TableTRR>
            ))}
        </TABLE.TableWrapper>

        {show && (
          <ResearchGuidlinesModal
            openModal={openModal}
            guidList={guidList}
            loadResearchGuidInfo={loadResearchGuidInfo}
          />
        )}
      </div>
    </React.Fragment>
  );
};

export default ResearchGuidlines;
