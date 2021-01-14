import React from "react";
import TableWrap from "../../../components/TableUtilities/TableWrap";

const UnAssignedMentorsTabData = ({ isUnAssignedData }) => {
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

  return (
    <React.Fragment>
      <div>
        {isUnAssignedData && isUnAssignedData.length > 0 && (
          <TableWrap
            thValues={thValues}
            tdValues={tdValues}
            data={isUnAssignedData}
          />
        )}
      </div>
    </React.Fragment>
  );
};

export default UnAssignedMentorsTabData;
