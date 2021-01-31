import React, { useState } from "react";
import * as TABLE from "../../../components/dashboards/styles/table.styles";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ConfirmationModal from "../../../components/General/confirmation-modal";
import { removeTextBook } from "../../../services/allocateServices";
import EditRecordModal from "./editRecordModal";

import { useSnackbar } from "react-simple-snackbar";

const TextBooksTabData = ({ forBookTable, loadReferenceData }) => {
  const [isAlert, setIsAlert] = useState(false);
  const [openSnackbar, closeSnackbar] = useSnackbar();
  const [showEditModal, setShowEditModal] = useState(false);
  const [activeTabData, setActiveTabData] = useState({});

  const toggleEditModal = async (data) => {
    setActiveTabData(data);
    setShowEditModal(!showEditModal);
  };

  const openAlertModal = () => {
    setIsAlert(!isAlert);
  };

  const deleteTextBook = (bookId) => {
    removeTextBook(bookId).then((data) => {
      if (data) {
        // console.log(data);
        openSnackbar("Book has been deleted!");
        openAlertModal();
        loadReferenceData();
      }
    });
  };

  return (
    <React.Fragment>
      <br></br>
      {forBookTable && forBookTable.length ? (
        <TABLE.TableWrapper>
          <TABLE.TableTR>
            <TABLE.TableTh>Sl. No.</TABLE.TableTh>
            <TABLE.TableTh>Course Text Book Name</TABLE.TableTh>
            <TABLE.TableTh>Author</TABLE.TableTh>
            <TABLE.TableTh>Operation</TABLE.TableTh>
          </TABLE.TableTR>
          {forBookTable &&
            forBookTable.length &&
            forBookTable.map((book, i) => (
              <TABLE.TableTbody key={book.courseBookId}>
                <TABLE.TableTRR>
                  <TABLE.TableTdd>{i + 1}</TABLE.TableTdd>
                  <TABLE.TableTdd>{book.bookName}</TABLE.TableTdd>
                  <TABLE.TableTdd>{book.author}</TABLE.TableTdd>
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
                        deleteMessage="Book Details"
                        deleteRecord={() => deleteTextBook(book.courseBookId)}
                        openAlertModal={openAlertModal}
                      />
                    )}
                  </TABLE.TableTdd>
                </TABLE.TableTRR>
              </TABLE.TableTbody>
            ))}
        </TABLE.TableWrapper>
      ) : (
        <div>Books Not Defined!</div>
      )}
      {showEditModal && (
        <EditRecordModal
          toggleEditModal={toggleEditModal}
          activeTab={0}
          activeTabData={activeTabData}
          loadReferenceData={loadReferenceData}
        />
      )}
    </React.Fragment>
  );
};

export default TextBooksTabData;
