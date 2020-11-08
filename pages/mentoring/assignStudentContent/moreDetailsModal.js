import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import * as STYLES from "../../../components/General/modalStyles";
import css from "@emotion/css";
import CourseFacultyData from "./courseFacultyDetails";
import DiscrepancyData from "./discrepancy";
import StudentDetails from "./studentDetails";
import CommunicationDetails from "./communicationDetails";

const MoreDetailsModal = ({ toggleModal, activeButton, studentModelData }) => {
  const moreDetailsList = [
    "Course and Faculty Details",
    "Discrepancy/Issue",
    "Student Details",
    "Communication Details"
  ];
  return (
    <STYLES.PopupMask>
      <STYLES.PopupWrapper
        css={css`
          width: 75%;
          height:80vh;
          overflow-y:scroll;
        `}
      >
        <STYLES.PopupTitle>
          {moreDetailsList[activeButton]}
          <FontAwesomeIcon
            icon={faTimes}
            onClick={() => toggleModal()}
            className="float-right"
          />
        </STYLES.PopupTitle>
        {activeButton === 0 && (
          <CourseFacultyData studentModelData={studentModelData} />
        )}
        {activeButton === 1 && (
          <DiscrepancyData studentModelData={studentModelData} />
        )}
        {activeButton === 2 && (
          <StudentDetails studentModelData={studentModelData} />
        )}
        {activeButton === 3 && (
          <CommunicationDetails studentModelData={studentModelData} />
        )}
      </STYLES.PopupWrapper>
    </STYLES.PopupMask>
  );
};
export default MoreDetailsModal;
