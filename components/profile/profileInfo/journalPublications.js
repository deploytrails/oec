import React, { useState } from "react";
import moment from "moment";
import * as TABLE from "../../dashboards/styles/table.styles";
import PulseLoader from "react-spinners/PulseLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ConfirmationModal from "../../General/confirmation-modal";
import JournalPublicationModal from "../../profile/profile-modals/journalPublicationModal";
import { useSnackbar } from "react-simple-snackbar";
import {
  faSearch,
  faEdit,
  faTrashAlt,
  faPlus,
  faFileImport,
} from "@fortawesome/free-solid-svg-icons";
import { deletePaperDetails } from "../../../services/profileService";

const JournalPublications =  ({
  isJourData,
  loadJournalPaperInfo
}) => {
  const [show, setShow] = useState(false);
  const [journalList, setJournalList] = useState({});
  const [isAlert, setIsAlert] = useState(false);
  const [openSnackbar, closeSnackbar] = useSnackbar();
  
  const openModal = (data) => {
    setShow(!show);
    setJournalList(data);
    if (!data || data === {} || data === null || data === undefined) {
      setJournalList({});
    }
  };
  
  const openAlertModal = (id) => {
    setIsAlert(!isAlert);
   // setJournPaperid(id);
    openConfirmation(id)
  };

  const openConfirmation =(id)=>{
    setIsAlert(!isAlert);
    console.log(isAlert)
    if(isAlert){

    
    return (
        <ConfirmationModal
          deleteMessage="Journal Publication Details"
          deleteRecord={() =>
            deleteJournalPubRecord(id)
          }
          openAlertModal={openAlertModal}
        />
    )
        }
  }
  const deleteJournalPubRecord = async () => {
    console.log("journalid",journPaperid);
    //const qualificationData = await deletePaperDetails(id);
    loadJournalPaperInfo();
    openSnackbar("Successfully deleted Journal Publication record");
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
          <FontAwesomeIcon icon={faPlus} /> ADD Journal
        </button>
        <TABLE.TableWrapper>
          <TABLE.TableTR>
          <TABLE.TableTh>Paper ID</TABLE.TableTh>
            <TABLE.TableTh>Paper Title</TABLE.TableTh>
            <TABLE.TableTh>Journal Title </TABLE.TableTh>
            <TABLE.TableTh>National / International</TABLE.TableTh>
            <TABLE.TableTh>Month & Year</TABLE.TableTh>
            <TABLE.TableTh>Action</TABLE.TableTh>
           </TABLE.TableTR>

          {!isJourData && <PulseLoader size="10" color="#3aafa9" />}

          {isJourData &&
            isJourData.length &&
            isJourData.map((jourInfo) => (
              <TABLE.TableTRR key={jourInfo.paperPublicationID}>
                <TABLE.TableTdd>{jourInfo.paperPublicationID}</TABLE.TableTdd>
                <TABLE.TableTdd>{jourInfo.publicationTitle}</TABLE.TableTdd>
                <TABLE.TableTdd>{jourInfo.journalName}</TABLE.TableTdd>
                <TABLE.TableTdd>{jourInfo.publicationType}</TABLE.TableTdd>
                <TABLE.TableTdd>{moment(jourInfo.publicationMonthYear).format("DD/MM/YYYY")}</TABLE.TableTdd>
                <TABLE.TableTdd>
                  <span className="cursor-pointer mr-4 text-blue-400">
                    <FontAwesomeIcon
                      icon={faEdit}
                      onClick={() => openModal(jourInfo)}
                    />
                  </span>
                  <span className="cursor-pointer text-red-400">
                    <FontAwesomeIcon
                      icon={faTrashAlt}
                      onClick={()=>
                        openConfirmation(jourInfo.paperPublicationID)}
                    />
                  </span>
                 
                </TABLE.TableTdd>
              </TABLE.TableTRR>
            ))}
        </TABLE.TableWrapper>
      </div>
      {show && (
        <JournalPublicationModal
          openModal={openModal}
          journalList={journalList}
          loadJournalPaperInfo={loadJournalPaperInfo}
           />
      )}
    </React.Fragment>
  );
};

export default JournalPublications;
