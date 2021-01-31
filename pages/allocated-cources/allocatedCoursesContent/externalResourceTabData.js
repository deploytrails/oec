import React, { useState, useEffect } from "react";
import * as TABLE from "../../../components/dashboards/styles/table.styles";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ConfirmationModal from "../../../components/General/confirmation-modal";
import EditRecordModal from "./editRecordModal";
import { useSnackbar } from "react-simple-snackbar";
import { removeRefLink } from "../../../services/allocateServices";

const ExternalResourceTabData = ({ forLinkTable, loadReferenceData }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [isAlert, setIsAlert] = useState(false);
  const [openSnackbar, closeSnackbar] = useSnackbar();
  const [activeTabData, setActiveTabData] = useState({});

  const toggleEditModal = async (data) => {
    setActiveTabData(data);
    setShowEditModal(!showEditModal);
  };
  const openAlertModal = () => {
    setIsAlert(!isAlert);
  };

  const deleteReflink = (linkId) => {
    removeRefLink(linkId).then((data) => {
      if (data) {
        // console.log(data);
        openSnackbar("Reference book has been deleted!");
        openAlertModal();
        loadReferenceData();
      }
    });
  };
  useEffect(() => {
    console.log(forLinkTable);
  }, []);
  return (
    <React.Fragment>
      <br></br>
      {forLinkTable && forLinkTable.length ? (
        <TABLE.TableWrapper>
          <TABLE.TableTR>
            <TABLE.TableTh>Priority No.</TABLE.TableTh>
            <TABLE.TableTh> Link Type</TABLE.TableTh>
            <TABLE.TableTh> Link </TABLE.TableTh>
            <TABLE.TableTh> Link Description</TABLE.TableTh>
            <TABLE.TableTh> Operation</TABLE.TableTh>
          </TABLE.TableTR>
          {forLinkTable &&
            forLinkTable.length &&
            forLinkTable.map((link, i) => (
              <TABLE.TableTbody key={link.courseResourcesId}>
                <TABLE.TableTRR>
                  <TABLE.TableTdd>{link.priorityNo}</TABLE.TableTdd>
                  <TABLE.TableTdd>{link.linkType}</TABLE.TableTdd>
                  <TABLE.TableTdd>{link.link}</TABLE.TableTdd>
                  <TABLE.TableTdd>{link.linkDescription}</TABLE.TableTdd>

                  <TABLE.TableTdd>
                    <span className="cursor-pointer mr-4 text-blue-400">
                      <FontAwesomeIcon
                        icon={faEdit}
                        onClick={() => toggleEditModal(link)}
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
                        deleteMessage="Reference Link Details"
                        deleteRecord={() =>
                          deleteReflink(link.courseResourcesId)
                        }
                        openAlertModal={openAlertModal}
                      />
                    )}
                  </TABLE.TableTdd>
                </TABLE.TableTRR>
              </TABLE.TableTbody>
            ))}
        </TABLE.TableWrapper>
      ) : (
        <div>External Reference Links/Notes Not Defined!</div>
      )}
      {showEditModal && (
        <EditRecordModal
          toggleEditModal={toggleEditModal}
          activeTab={2}
          activeTabData={activeTabData}
          loadReferenceData={loadReferenceData}
        />
      )}
    </React.Fragment>
  );
};

export default ExternalResourceTabData;
