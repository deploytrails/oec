import React, { useState, useEffect } from "react";
import * as TABLE from "../../../components/dashboards/styles/table.styles";
import { removeRefBook } from "../../../services/allocateServices";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ConfirmationModal from "../../../components/General/confirmation-modal";
import EditRecordModal from "./editRecordModal";
import { useSnackbar } from "react-simple-snackbar";

const ReferenceBooksTabData = ({
  refBookData,
  loadReferenceData,
  unitsData,
}) => {
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

  const deleteRefBook = (bookId) => {
    removeRefBook(bookId).then((data) => {
      if (data) {
        // console.log(data);
        openSnackbar("Reference book has been deleted!");
        openAlertModal();
        loadReferenceData();
      }
    });
  };

  return (
    <React.Fragment>
      <br></br>
      {refBookData && refBookData.length ? (
        <TABLE.TableWrapper>
          <TABLE.TableTR>
            <TABLE.TableTh>Sl. No.</TABLE.TableTh>
            <TABLE.TableTh>Book Name</TABLE.TableTh>
            <TABLE.TableTh>Author</TABLE.TableTh>
            <TABLE.TableTh> Preferred Units</TABLE.TableTh>
            <TABLE.TableTh> Operation</TABLE.TableTh>
          </TABLE.TableTR>
          {refBookData &&
            refBookData.length &&
            refBookData.map((book, i) => (
              <TABLE.TableTbody key={book.courseRefBookId}>
                <TABLE.TableTRR>
                  <TABLE.TableTdd>{i + 1}</TABLE.TableTdd>
                  <TABLE.TableTdd>{book.bookName}</TABLE.TableTdd>
                  <TABLE.TableTdd>{book.author}</TABLE.TableTdd>
                  <TABLE.TableTdd>{book.unitsSelected}</TABLE.TableTdd>
                  <TABLE.TableTdd>
                    <span className="cursor-pointer mr-4 text-blue-400">
                      <FontAwesomeIcon
                        icon={faEdit}
                        onClick={() => toggleEditModal(book)}
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
                        deleteMessage="Reference Book Details"
                        deleteRecord={() => deleteRefBook(book.courseRefBookId)}
                        openAlertModal={openAlertModal}
                      />
                    )}
                  </TABLE.TableTdd>
                </TABLE.TableTRR>
              </TABLE.TableTbody>
            ))}
        </TABLE.TableWrapper>
      ) : (
        <div>Reference Books Not Defined!</div>
      )}
      {showEditModal && (
        <EditRecordModal
          toggleEditModal={toggleEditModal}
          activeTab={1}
          activeTabData={activeTabData}
          loadReferenceData={loadReferenceData}
          unitsData={unitsData}
        />
      )}
    </React.Fragment>
  );
};

export default ReferenceBooksTabData;
