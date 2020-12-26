import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import * as STYLES from "../../../components/General/modalStyles";
import css from "@emotion/css";
import CoPoModelData from "./coPoModelData";
import ReferenceModelData from "./referenceModelData";
import ExtraClassModelData from "./extraClassModalData";
import COPOMapping from "../../../components/course-coordinator/COPOMapping";

const OperationsModal = ({
  toggleModal,
  activeButton,
  activeTabData,
  FacultyId,
}) => {
  const moreOptionList = [
    activeTabData[1].courseName + " (" + activeTabData[1].courseCode + ")",
    "CO-PO Mapping",
    "Add Extra Class",
  ];
  return (
    <STYLES.PopupMask>
      <STYLES.PopupWrapper
        css={css`
          width: 95%;
          height: 95%;
          overflow: hidden;
          overflow-x: scroll;
          overflow-y: scroll;
        `}
      >
        <STYLES.PopupTitle>
          {moreOptionList[activeButton]}
          <FontAwesomeIcon
            icon={faTimes}
            onClick={() => toggleModal()}
            style={{ float: "right" }}
          />
        </STYLES.PopupTitle>
        {activeButton === 0 && (
          <ReferenceModelData
            activeTabData={activeTabData}
            FacultyId={FacultyId}
          />
        )}
        {/* {activeButton === 1 && (
          <CoPoModelData activeTabData={activeTabData} FacultyId={FacultyId} />
        )} */}
        {activeButton === 1 && (
          <COPOMapping courseData={activeTabData}></COPOMapping>
        )}
        {activeButton === 2 && (
          <ExtraClassModelData
            activeTabData={activeTabData}
            FacultyId={FacultyId}
          />
        )}
      </STYLES.PopupWrapper>
    </STYLES.PopupMask>
  );
};
export default OperationsModal;
