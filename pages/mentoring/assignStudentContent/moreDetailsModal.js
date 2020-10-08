import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import * as STYLES from "../../../components/General/modalStyles";
import css from "@emotion/css";
import CourseFacultyData from "./courseFacultyDetails";
import DiscrepancyData from "./discrepancy";

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
        `}
      >
        <STYLES.PopupTitle>
          {moreDetailsList[activeButton]}
          <FontAwesomeIcon
            icon={faTimes}
            onClick={() => toggleModal()}
            style={{ float: "right" }}
          />
        </STYLES.PopupTitle>
        {activeButton === 0 && (
          <CourseFacultyData studentModelData={studentModelData} />
        )}
        {activeButton === 1 && (
          <DiscrepancyData studentModelData={studentModelData} />
        )}
        {activeButton === 2 && (
          <CourseFacultyData studentModelId={studentModelData} />
        )}
        {activeButton === 3 && (
          <CourseFacultyData studentModelId={studentModelData} />
        )}
      </STYLES.PopupWrapper>
    </STYLES.PopupMask>
  );
};
export default MoreDetailsModal;
