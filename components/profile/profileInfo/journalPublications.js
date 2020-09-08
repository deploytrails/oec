import React from "react";
import * as TABLE from "../../dashboards/styles/table.styles";
import PulseLoader from "react-spinners/PulseLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faEdit,
  faTrashAlt,
  faPlus,
  faFileImport,
} from "@fortawesome/free-solid-svg-icons";

const JournalPublications = () => {
  return (
    <React.Fragment>
      <div className=" px-6 pb-6">
        <div className=" clearfix">
          <button
            type="button"
            className="py-2 px-4 rounded float-right bg-blue-400 text-center text-white mb-4 hover:bg-blue-500 focus:outline-none"
          >
            <FontAwesomeIcon icon={faFileImport} /> Import / Export Data
          </button>
        </div>

        <div className="block">
          <h3>No Journal Publications Yet!</h3>
          <button
            type="button"
            className="bg-red-400 py-2 px-4 text-sm text-white font-bold rounded shadow mt-4 hover:bg-red-600 transition-all"
          >
            <FontAwesomeIcon icon={faPlus} /> Add New Journal
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default JournalPublications;
