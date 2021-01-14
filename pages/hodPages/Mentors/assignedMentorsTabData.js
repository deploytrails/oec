import React from "react";
import TableWrap from "../../../components/TableUtilities/TableWrap";

const AssignedMentorsTabData = ({ isAssignedData }) => {
  const thValues = [
    "Faculty Number",
    "Faculty Name",
    "No.of Students Assigned",
  ];

  const tdValues = [
    { valueProperty: "2" },
    { valueProperty: "1" },
    { valueProperty: "3" },
  ];

  const openModal = () => {
    console.log("into");
  };

  return (
    <React.Fragment>
      <div>
        {isAssignedData && isAssignedData.length > 0 && (
          <TableWrap
            thValues={thValues}
            tdValues={tdValues}
            data={isAssignedData}
          />
        )}
      </div>
    </React.Fragment>
  );
};

export default AssignedMentorsTabData;
