import React, { useState } from "react";
import * as TABLE from "../../dashboards/styles/table.styles";
import PulseLoader from "react-spinners/PulseLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BookPublicationModal from "../../profile/profile-modals/bookPublicationModal";
import {
  faSearch,
  faEdit,
  faTrashAlt,
  faPlus,
  faFileImport,
} from "@fortawesome/free-solid-svg-icons";

const BookPublications = ({ isBookPubInfo }) => {
  const [show, setShow] = useState(false);
  const openModal = () => {
    setShow(!show);
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
            onClick={openModal}
            type="button"
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
            <TABLE.TableTh>Title of the book</TABLE.TableTh>
            <TABLE.TableTh>Name of the Publishers</TABLE.TableTh>
            <TABLE.TableTh>National / International</TABLE.TableTh>
            <TABLE.TableTh>ISBN</TABLE.TableTh>
            <TABLE.TableTh>Year</TABLE.TableTh>
            <TABLE.TableTh>Action</TABLE.TableTh>
          </TABLE.TableTR>

          {!isBookPubInfo && <PulseLoader size="10" color="#3aafa9" />}

          {isBookPubInfo &&
            isBookPubInfo.length &&
            isBookPubInfo.map((bookInfo) => (
              <TABLE.TableTRR key={bookInfo.bookPublicationID}>
                <TABLE.TableTdd>{bookInfo.bookTitle}</TABLE.TableTdd>
                <TABLE.TableTdd>{bookInfo.publisherName}</TABLE.TableTdd>
                <TABLE.TableTdd>{bookInfo.bookPublicationType}</TABLE.TableTdd>
                <TABLE.TableTdd>{bookInfo.isbnNo}</TABLE.TableTdd>
                <TABLE.TableTdd>{bookInfo.bookPublicationYear}</TABLE.TableTdd>
                <TABLE.TableTdd>
                  <span className="cursor-pointer mr-4 text-blue-400">
                    <FontAwesomeIcon icon={faEdit} />
                  </span>
                  <span className="cursor-pointer text-red-400">
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </span>
                </TABLE.TableTdd>
              </TABLE.TableTRR>
            ))}
        </TABLE.TableWrapper>
      </div>
      {show && <BookPublicationModal openModal={openModal} />}
    </React.Fragment>
  );
};

export default BookPublications;
