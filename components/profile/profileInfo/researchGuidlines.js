import React, { useState } from "react";
import * as TABLE from "../../dashboards/styles/table.styles";
import PulseLoader from "react-spinners/PulseLoader";
import ResearchGuidlinesModal from "../../profile/profile-modals/researchGuidlinesModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faEdit,
  faTrashAlt,
  faPlus,
  faFileImport,
} from "@fortawesome/free-solid-svg-icons";

const ResearchGuidlines = ({ isResearchGuidData }) => {
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
            <TABLE.TableTh>Name of the Scholar</TABLE.TableTh>
            <TABLE.TableTh>Year of Admission</TABLE.TableTh>
            <TABLE.TableTh>Name of the University</TABLE.TableTh>
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
                    <FontAwesomeIcon icon={faEdit} />
                  </span>
                  <span className="cursor-pointer text-red-400">
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </span>
                </TABLE.TableTdd>
              </TABLE.TableTRR>
            ))}
        </TABLE.TableWrapper>

        {show && <ResearchGuidlinesModal openModal={openModal} />}
      </div>
    </React.Fragment>
  );
};

export default ResearchGuidlines;
