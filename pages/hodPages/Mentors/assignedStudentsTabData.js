import React, { useState, useEffect } from "react";
import { getAssignedStudentsData } from "../../../services/hodServices/mentorService";
import TableWrap from "../../../components/TableUtilities/TableWrap";

const AssignedStudentsTabData = ({ profileId }) => {
  const [isAssignedStudentsData, setIsAssignedStudentsData] = useState([]);
  const getAssignedStudentsDetails = async () => {
    const cData = await getAssignedStudentsData(profileId);
    console.log(cData);
    setIsAssignedStudentsData(cData["Student Details and Mentor Details"]);
    console.log(isAssignedStudentsData);
  };
  const thValues = [
    "Student Roll Number",
    "Student Name",
    "Faculty Number",
    "Faculty Name",
  ];

  const tdValues = [
    { valueProperty: "roll" },
    { valueProperty: "firstName" },
    { valueProperty: "semesterCode" },
  ];

  useEffect(() => {
    getAssignedStudentsDetails();
  }, []);
  return (
    <React.Fragment>
      <div>Assigned Students</div>
      {/* <div>
        {isAssignedStudentsData && isAssignedStudentsData.length > 0 && (
          <TableWrap
            thValues={thValues}
            tdValues={tdValues}
            data={isAssignedStudentsData}
          />
        )}
      </div> */}
    </React.Fragment>
  );
};

export default AssignedStudentsTabData;
