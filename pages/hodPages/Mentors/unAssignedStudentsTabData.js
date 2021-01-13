import React, { useState, useEffect } from "react";
import { getUnAssignedStudentsData } from "../../../services/hodServices/mentorService";
import TableWrap from "../../../components/TableUtilities/TableWrap";

const UnAssignedStudentsTabData = ({ profileId }) => {
  const [isUnAssignedStudentsData, setIsUnAssignedStudentsData] = useState([]);
  const getUnAssignedStudentsDetails = async () => {
    const cData = await getUnAssignedStudentsData(profileId);
    setIsUnAssignedStudentsData(cData);
    console.log(cData);
  };
  const thValues = ["Student Roll Number", "Student Name", "Semester"];

  const tdValues = [
    { valueProperty: "roll" },
    { valueProperty: "firstName" },
    { valueProperty: "semesterCode" },
  ];

  useEffect(() => {
    getUnAssignedStudentsDetails();
  }, []);
  return (
    <React.Fragment>
      <div>
        {isUnAssignedStudentsData && isUnAssignedStudentsData.length > 0 && (
          <TableWrap
            thValues={thValues}
            tdValues={tdValues}
            data={isUnAssignedStudentsData}
          />
        )}
      </div>
    </React.Fragment>
  );
};

export default UnAssignedStudentsTabData;
