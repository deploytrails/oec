import React, { useState, useEffect } from "react";
import { getAssignedStudentsData } from "../../../services/hodServices/mentorService";
import TableWrap from "../../../components/TableUtilities/TableWrap";

const AssignedStudentsTabData = ({ profileId }) => {
  const [isAssignedStudentsData, setIsAssignedStudentsData] = useState([]);
  const getAssignedStudentsDetails = async () => {
    const cData = await getAssignedStudentsData(profileId);
    setIsAssignedStudentsData(cData?.assignedStudentsData);
  };
  const thValues = [
    "Student Roll Number",
    "Student Name",
    "Faculty Number",
    "Faculty Name",
  ];

  const tdValues = [
    { valueProperty: "1" },
    { valueProperty: "0" },
    { valueProperty: "2" },
    { valueProperty: "3" },
  ];

  useEffect(() => {
    getAssignedStudentsDetails();
  }, []);
  return (
    <React.Fragment>
      <div>
        {isAssignedStudentsData && isAssignedStudentsData.length > 0 && (
          <TableWrap
            thValues={thValues}
            tdValues={tdValues}
            data={isAssignedStudentsData}
          />
        )}
      </div>
    </React.Fragment>
  );
};

export default AssignedStudentsTabData;
